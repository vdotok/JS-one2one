import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebsocketService } from './services/websocket.service';
import { StorageService } from './services/storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { BaseService } from './services/base.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { PubsubService } from './services/pubsub.service';
import { GetErrorsComponent } from './FormsHandler/get-errors.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { filterPipe } from './pipe/filter';
import { SafeUrlPipe } from './pipe/safeurl';
import { FormatTimePipe } from './pipe/formatTime';

const components = [
  GetErrorsComponent,
  filterPipe,
  SafeUrlPipe,
  FormatTimePipe
]

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ],
  declarations: [...components],
  exports: [...components],
  providers: [
    StorageService,
    AuthService,
    AuthGuard,
    BaseService,
    PubsubService,
    WebsocketService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    { provide: HTTP_INTERCEPTORS, useClass: HttpService, multi: true },
  ],
})
export class SharedModule { }
