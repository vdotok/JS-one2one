import { Injectable, Output } from '@angular/core';
import { StorageService } from './storage.service';
declare const CVDOTOK: any;

@Injectable()
export class PubsubService {
  @Output() public Client: any;

  constructor() {
  }

  public initConfigure(): void {
    const user = StorageService.getUserData();
    this.Client = new CVDOTOK.Client({
      // projectID: "143LV8M8",
      //projectID: "6NE92I",
      projectID: "115G1WZI",
      // secret: "3d9686b635b15b5bc2d19800407609fa",
      //host: `${user.media_server_map.protocol}://${user.media_server_map.host}:${user.media_server_map.port}/${user.media_server_map.end_point}`
      host: 'wss://r-signalling.vdotok.dev:8443/call',
      stunServer: user.stun_server_map ? user.stun_server_map.complete_address : ''
    });
    this.Client.on("connected", (res) => {
      let user = StorageService.getUserData();
      this.Client.Register(
        user.ref_id.toString(),
        user.authorization_token.toString()
      );
    });
  }

  public Disconnect(): void {
    // this.Client.Disconnect();
  }

  Call(params): void {
    this.Client.Call(params);
  }

  audioCall(params): void {
    this.Client.AudioCall(params);
  }

  acceptCall(params): void {
    this.Client.AcceptCall(params);
  }

  rejectCall(): void {
    this.Client.RejectCall();
  }

  endCall(): void {
    this.Client.EndCall();
  }

  cancelCall(): void {
    this.Client.CancelCall();
  }

  setCameraOn(): void {
    this.Client.SetCameraOn();
  }

  setCameraOff(): void {
    this.Client.SetCameraOff();
  }

  setMicMute(): void {
    this.Client.SetMicMute();
  }

  setMicUnmute(): void {
    this.Client.SetMicUnmute();
  }

}
