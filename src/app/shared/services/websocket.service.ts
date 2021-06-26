import { Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// declare var PUBSUB: any;
declare const PUBSUB: any;
declare const pubsub: any;

@Injectable()
export class WebsocketService {
  @Output() public ready: Subject<void> = new Subject();
  public webSocket: WebSocket;
  ws;
  Client;

  public initSocket(url: string): Observable<any> {
    this.webSocket = new WebSocket('wss://' + 'vtest3.vdotok.com:8443' + '/call');
    this.webSocket.onopen = () => this.ready.next();
    return new Observable<any>(observer => {
      this.webSocket.onmessage = (event: MessageEvent) => observer.next(event);
      this.webSocket.onerror = (event: Event) => observer.error(event);
      this.webSocket.onclose = (event: CloseEvent) => observer.complete();
      // Callback invoked on unsubscribe
      return () => this.webSocket.close();
    });
  }

  public send(message: string): void {
    // if (this.webSocket.readyState === WebSocket.OPEN) {
    //   this.webSocket.send(message);
    // }
  }


  public initPUBSUBSocket() {
    return new PUBSUB.Client({
      host: "ws://emit1.togee.io",
      port: "8080",
      credentials: {
        username: "john",
        password: ""
      },
      clientId: "12345",
      reConnectivity: true,
      secret: "cWV91camkwd99XO9rvHmamvXxGdyeHK5"
    });
  }
}
