import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  FindArrayObject,
  isMobile,
} from 'src/app/shared/helpers/helpersFunctions';
import { BaseService } from 'src/app/shared/services/base.service';
import { PubsubService } from 'src/app/shared/services/pubsub.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { timer, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { startWith } from 'rxjs/internal/operators/startWith';
import { fromEvent, of } from 'rxjs';
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";
@Component({
  selector: 'call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
})
export class CallComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('noCall') noCall: TemplateRef<any>;
  @ViewChild('incommingAudioCall') incommingAudioCall: TemplateRef<any>;
  @ViewChild('outgoingAudioCall') outgoingAudioCall: TemplateRef<any>;
  @ViewChild('AudioCallInProgress') AudioCallInProgress: TemplateRef<any>;
  @ViewChild('incommingVideoCall') incommingVideoCall: TemplateRef<any>;
  @ViewChild('outgoingVideoCall') outgoingVideoCall: TemplateRef<any>;
  @ViewChild('VideoCallInProgress') VideoCallInProgress: TemplateRef<any>;
  currentUserName = StorageService.getAuthUsername();
  currentUserData = StorageService.getUserData();
  loading = true;
  AllUsers = [];
  CopyAllUsers = [];
  screen = 'LISTING';
  countDownTime: Subscription;
  publicIps = [];
  NatType = "symmetric";
  callTime = 0;
  sdkconnected = false;
  calling = {
    call_type: 'video',
    templateName: 'noCall',
    callerName: '',
  };
  settings = {
    isOnInProgressCamara: true,
    isOnInProgressMicrophone: true,
    remoteVideoMicrophone: true,
  };
  incomingCallSessionId: any;

  get selectedTemplate() {
    const templateList = {
      noCall: this.noCall,
      incommingAudioCall: this.incommingAudioCall,
      outgoingAudioCall: this.outgoingAudioCall,
      AudioCallInProgress: this.AudioCallInProgress,
      incommingVideoCall: this.incommingVideoCall,
      outgoingVideoCall: this.outgoingVideoCall,
      VideoCallInProgress: this.VideoCallInProgress,
    };
    return templateList[this.calling.templateName];
  }

  constructor(
    public pubsubService: PubsubService,
    private svc: BaseService,
    private router: Router,
    public dialog: MatDialog,
    private changeDetector: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.pubsubService.initConfigure();
  }

  ngOnInit() {
      this.pubsubService.Client.on('register', (response) => {
      console.error('register response', response);
    });

      this.pubsubService.Client.on('connected', (response) => {
      this.sdkconnected = true;
      console.error('connected response', response);
    });

      this.pubsubService.Client.on('call', (response) => {
      console.error('**call response', response);
      switch (response.type) {
        case 'CALL_RECEIVED':
          const full_name = this.findUserName(response.from);
          this.calling.callerName = full_name;
          this.calling.templateName =
            response.call_type == 'video'
              ? 'incommingVideoCall'
              : 'incommingAudioCall';
          this.calling.call_type = response.call_type;
          this.changeDetector.detectChanges();
          this.screen = 'MAIN';
          this.incomingCallSessionId = response.uuid ?? response.sessionUUID;
          break;
        case 'PARTICIPANT_LEFT':
          this.toastr.error('', 'User has ended the call');
          break;
        case 'CALL_ENDED':
          this.resetCall();
          break;
        case 'MISSED_CALL':
          this.resetCall();
          this.toastr.error('Opps', 'Missed Call');
          break;
        case 'CALL_REJECTED':
          this.resetCall();
          this.toastr.error('Opps', 'user is busy');
          break;
        case 'CALL_ACCEPTED':
          this.changeDetector.detectChanges();
          this.calling.templateName =
            this.calling.call_type == 'video'
              ? 'VideoCallInProgress'
              : 'AudioCallInProgress';
          this.startWatch();
          this.changeDetector.detectChanges();
          break;
        case 'CALL_STATUS':
          const displaystyle = response.video_status ? 'block' : 'none';
          const callerHolderstyle = response.video_status ? 'none' : 'block';
          if (document.getElementById('remoteVideo')) {
            document.getElementById('remoteVideo').style.display = displaystyle;
          }
          if (document.getElementById('callerHolder')) {
            document.getElementById('callerHolder').style.display =
              callerHolderstyle;
          }
          this.settings.remoteVideoMicrophone = response.audio_status;
          break;
      }
    });
  }
  ngAfterViewInit(): void {
    if (this.searchInput) {
      fromEvent(this.searchInput.nativeElement, 'input')
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          debounceTime(1000),
          distinctUntilChanged(),
          startWith(''),
          mergeMap((value) => {
            this.loading = true;
            if (!value) {
              const data = {
                sorting: 'ORDER BY full_name ASC',
                search_field: 'full_name',
                search_value: '',
                condition: 'contains',
              };
              return this.svc.post('AllUsers', data).pipe(
                map((res) => {
                  this.CopyAllUsers = [...res.users];
                  return res;
                })
              );
            }
            const temparaay = [...this.CopyAllUsers];
            const filteruser = temparaay.filter((user) => {
              const searchValue = value.toLowerCase();
              if (user.full_name.toLowerCase().startsWith(searchValue)) {
                return -1;
              }
            });
            const returnData = {
              users: filteruser,
            };
            return of(returnData);
          })
        )
        .subscribe((res) => {
          this.loading = false;
          if (!res.users || !res.users.length) {
            this.toastr.error('Opps!', 'No contacts found');
            this.AllUsers = [];
          } else {
            this.AllUsers = res.users;
          }
        });
    }

    this.changeDetector.detectChanges();
    this.pubsubService.Client.on('authentication_error', (res: any) => {
      this.toastr.error('SDK Authentication Error', 'Opps');
    });
    this.pubsubService.Client.on('disconnect', (response) => {
      console.error('disconnect', response);
    });
  }

  getUsers() {
    this.loading = true;
    const data = {
      sorting: 'ORDER BY full_name ASC',
      search_field: 'full_name',
      search_value: this.searchInput.nativeElement.value,
      condition: 'contains',
    };
    this.svc.post('AllUsers', data).subscribe((res) => {
      this.loading = false;
      if (!res.users || !res.users.length) {
        this.toastr.error('Opps!', 'No contacts found');
        this.AllUsers = [];
      } else {
        this.CopyAllUsers = [...res.users];
        this.AllUsers = res.users;
      }
    });
  }

  findUserName(ref_id: string): string {
    const user = FindArrayObject(this.CopyAllUsers, 'ref_id', ref_id);
    return user ? user.full_name : '';
  }

  logout() {
    this.pubsubService.Disconnect();
    StorageService.clearLocalStorge();
    this.router.navigate(['login']);
  }

  rejectedCall() {
    this.calling.templateName = 'noCall';
    this.changeDetector.detectChanges();
    this.pubsubService.Client.endCall();
  }

  resetCall() {
    this.settings = {
      isOnInProgressCamara: true,
      isOnInProgressMicrophone: true,
      remoteVideoMicrophone: true,
    };
    this.calling = {
      call_type: 'video',
      templateName: 'noCall',
      callerName: '',
    };
    this.callTime = 0;
    this.screen = 'LISTING';
    if (this.countDownTime) {
      this.countDownTime.unsubscribe();
    }
    document.getElementById('localVideo').style.display = 'block';
    this.changeDetector.detectChanges();
  }

  stopCall() {
    this.calling.templateName = 'noCall';
    this.pubsubService.endCall();
    this.resetCall();
    this.changeDetector.detectChanges();
    console.error('stopCall');
  }
  rejectCall() {
    this.calling.templateName = 'noCall';
    this.pubsubService.rejectCall();
    this.resetCall();
    this.changeDetector.detectChanges();
    console.error('rejectCall');
  }

  inCall(): boolean {
    return this.calling.templateName != 'noCall';
  }

  startVideoCall(user) {
    if (this.inCall()) { return; }
    document.getElementById('localVideo').style.display = 'block';
    this.screen = 'MAIN';
    this.calling.templateName = 'outgoingVideoCall';
    this.calling.callerName = user.full_name;
    this.changeDetector.detectChanges();
    const params = {
      localVideo: document.getElementById('localVideo'),
      remoteVideo: document.getElementById('remoteVideo'),
      to: [user.ref_id],
      audio: 1,
      video: 1,
      timeout:40,
      isPeer:0
    };
    this.pubsubService.Call(params);
  }

  acceptcall() {
    this.pubsubService.acceptCall({
      localVideo: document.getElementById('localVideo'),
      remoteVideo: document.getElementById('remoteVideo'),
      sessionUuid: this.incomingCallSessionId,
      audio: 1,
      video: this.calling.call_type == 'video'
    });
    this.changeDetector.detectChanges();
    this.calling.templateName =
      this.calling.call_type == 'video'
        ? 'VideoCallInProgress'
        : 'AudioCallInProgress';
    this.startWatch();
    this.changeDetector.detectChanges();
  }

  startWatch() {
    if (!this.callTime) {
      this.countDownTime = timer(0, 1000).subscribe(() => ++this.callTime);
    }
  }

  startAudioCall(user) {
    if (this.inCall()) { return; }
    this.calling.call_type = 'audio';
    this.screen = 'MAIN';
    this.calling.templateName = 'outgoingAudioCall';
    this.calling.callerName = user.full_name;
    const params = {
      localVideo: document.getElementById('localVideo'),
      remoteVideo: document.getElementById('remoteVideo'),
      to: [user.ref_id],
      audio: 1,
      video: 0,
      timeout:40,
      isPeer:0
    };
    this.pubsubService.audioCall(params);
  }

  changeSettings(filed) {
    this.settings[filed] = !this.settings[filed];
    switch (filed) {
      case 'isOnInProgressCamara':
        this.settings[filed]
          ? this.pubsubService.setCameraOn()
          : this.pubsubService.setCameraOff();
        const displaystyle = this.settings[filed] ? 'block' : 'none';
        if (document.getElementById('localVideo')) {
          document.getElementById('localVideo').style.display = displaystyle;
        }
        break;
      case 'isOnInProgressMicrophone':
        this.settings[filed]
          ? this.pubsubService.setMicUnmute()
          : this.pubsubService.setMicMute();
        const enabled = this.settings[filed];
        const audiotrack: any = (
          document.getElementById('localAudio')
        ) as HTMLInputElement;
        if (audiotrack && audiotrack.audioTracks) {
          audiotrack.audioTracks[0].enabled = enabled;
        }
        break;
    }
  }

  isHideThread(): boolean {
    return isMobile() ? this.screen != 'LISTING' : false;
  }

  isHideChatScreen(): boolean {
    return isMobile() ? this.screen != 'MAIN' : false;
  }

  isHideRemoteVideo(): boolean {
    const ishide = !(
      this.calling.templateName == 'VideoCallInProgress' &&
      this.calling.call_type == 'video'
    );
    return ishide;
  }

  isHideLocalVideo(): boolean {
    const ishide = !(
      this.calling.templateName == 'VideoCallInProgress' ||
      this.calling.templateName == 'outgoingVideoCall'
    );
    return ishide;
  }

  isMobile() {
    return window.innerWidth < 768;
  }

  backScreen() {
    this.screen = 'CHAT';
    this.changeDetector.detectChanges();
  }
}
