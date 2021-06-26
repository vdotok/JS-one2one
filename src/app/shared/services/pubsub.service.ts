import { Injectable, OnDestroy, Output } from '@angular/core';
import { StorageService } from './storage.service';
declare const CVDOTOK: any;

@Injectable()
export class PubsubService {
  @Output()
  public Client: any;

  constructor() {
  }

  public initConfigure(): void {
    this.Client = new CVDOTOK.Client({
      projectID: "15Q89R",
      secret: "3d9686b635b15b5bc2d19800407609fa",
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

  acceptCall(local, remote): void {
    this.Client.AcceptCall(local, remote);
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
