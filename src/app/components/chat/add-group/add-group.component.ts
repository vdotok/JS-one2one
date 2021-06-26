import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import FormsHandler from 'src/app/shared/FormsHandler/FormsHandler';
import { BaseService } from 'src/app/shared/services/base.service';
import { PubsubService } from 'src/app/shared/services/pubsub.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { startWith } from 'rxjs/internal/operators/startWith';
import { fromEvent, of } from 'rxjs';

@Component({
  selector: 'add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  currentUserName = StorageService.getAuthUsername();
  currentUserData = StorageService.getUserData();
  @Output() changeEvent = new EventEmitter<string>();
  form: FormGroup;
  loading = true;
  AllUsers = [];
  group_title = '';
  groupnameError = '';
  dialogRef;
  selectedUsers = [];
  @ViewChild('searchInput') searchInput: ElementRef;
  CopyAllUsers = [];
  constructor(
    public pubsubService: PubsubService,
    private svc: BaseService,
    private toastr: ToastrService,
    private _fb: FormBuilder,
    private modalService: NgbModal,
    private changeDetector: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      'group_title': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    }, { updateOn: 'change' });

    document.addEventListener("keyup", event => {
      if (event.code === 'Enter' && !this.loading) {
        this.addGroup();
      }
    })

  }

  ngAfterViewInit(): void {
    if (this.searchInput) {
      fromEvent(this.searchInput.nativeElement, 'input')
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          debounceTime(1000),
          distinctUntilChanged(),
          startWith(''),
          mergeMap(value => {
            this.loading = true;
            if (!value) {
              const data = {
                sorting: "ORDER BY full_name ASC",
                search_field: "full_name",
                search_value: '',
                condition: "contains",
              }
              return this.svc.post('AllUsers', data).pipe(map(res => {
                this.CopyAllUsers = [...res.users];
                return res;
              }))
            }
            const temparaay = [...this.CopyAllUsers];
            const filteruser = temparaay.filter(user => {
              let searchValue = value.toLowerCase();
              if (user.full_name.toLowerCase().startsWith(searchValue)) { return -1; }
            });
            const returnData = {
              users: filteruser
            }
            return of(returnData)
          }),
        )
        .subscribe(res => {
          this.loading = false;
          if (!res.users || !res.users.length) {
            this.toastr.error("Opps!", "No contacts found");
            this.AllUsers = [];
          } else {
            this.AllUsers = res.users;
          }
        })
    }
  }

  selectContact(contact) {
    this.groupnameError = '';
    contact['selected'] = !contact['selected'];
    this.changeDetector.detectChanges();
    this.selectedUsers.push(contact);
    this.selectedUsers = this.selectedUsers.filter(user => user.selected);
    this.selectedUsers = [...new Set(this.selectedUsers)];
    if (!this.selectedUsers.length) {
      this.groupnameError = 'Please Select Contacts';
    } else if (this.selectedUsers.length > 4) {
      this.groupnameError = 'Participants cannot be more than 4';
    }
    console.error('groupnameError', this.groupnameError);
    this.changeDetector.detectChanges();
  }

  openDialog(content): void {
    this.groupnameError = '';
    this.selectedUsers = this.selectedUsers.filter(user => user.selected);
    this.changeDetector.detectChanges();
    if (!this.selectedUsers.length) {
      this.groupnameError = 'Please Select Contacts';
      return;
    } else if (this.selectedUsers.length > 4) {
      this.groupnameError = 'Participants cannot be more than 4';
      return;
    }

    if (this.selectedUsers.length == 1) {
      const useridArray = this.selectedUsers.map(user => user.user_id);
      let data = {
        "participants": useridArray,
        "auto_created": useridArray.length > 1 ? 0 : 1,
        "group_title": 'personal chat',
        ...this.form.value,
      }
      this.svc.post('CreateGroup', data).subscribe(v => {
        this.changeDetector.detectChanges();
        if (v && v.status == 200) {
          this.groupnameError = '';
          this.form.reset();
        }
        this.changeDetector.detectChanges();
        this.loading = false;
        this.changeEvent.emit("THREAD");
      });

    } else {

      this.dialogRef = this.modalService.open(content, {
        centered: true,
        backdrop: 'static',
        windowClass: 'dark-modal'
      });

    }
  }

  addGroup() {
    FormsHandler.validateForm(this.form);
    const useridArray = this.selectedUsers.map(user => user.user_id);
    if (this.form.invalid || !useridArray.length || this.loading) return;

    this.loading = true;
    this.changeDetector.detectChanges();
    let data = {
      "participants": useridArray,
      "auto_created": useridArray.length > 1 ? 0 : 1,
      ...this.form.value
    }
    this.svc.post('CreateGroup', data).subscribe(v => {
      this.changeDetector.detectChanges();
      if (v && v.status == 200) {
        this.groupnameError = '';
        this.toastr.success('The group has been created!', 'Success!');
        this.closemodel();
        this.form.reset();
      }
      this.changeDetector.detectChanges();
      this.loading = false;
    });
  }

  closemodel() {
    this.selectedUsers = [];
    this.dialogRef.close();
    this.AllUsers.forEach(element => element['selected'] = false);
    this.changeEvent.emit("THREAD");
    this.changeDetector.detectChanges();
  }

  backScreen() {
    this.changeEvent.emit("THREAD");
  }

}
