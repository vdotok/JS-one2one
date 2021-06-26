import { Injectable } from '@angular/core';
import { HttpEvent, HttpResponse, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';
import { BaseService } from './base.service';

@Injectable()
export class HttpService implements HttpInterceptor {
    private baseUrl = environment.apiBaseUrl;

    constructor(
        private router: Router,
        private svc: BaseService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.getModifiedReq(req);
        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        if (event && event.body) {
                            const serRes = event.body;
                            this.svc.isLoading.next(false);
                            if (serRes.code === 401) {
                                StorageService.clearLocalStorge();
                                this.showErrorMsg(serRes.message);
                                this.router.navigate(['/login']);
                            } else if (serRes.code === 407) {
                                // StorageService.clearLocalStorge();
                                this.showErrorMsg(serRes.message);
                                // this.router.navigate(['/auth/login']);
                            } else if (serRes.code === 200 || serRes.code === 201) {
                            } else {
                                this.showErrorMsg(serRes.message);
                            }
                        }

                    }
                }),
                catchError(errorRes => {
                    this.svc.isLoading.next(false);
                    console.log('this should print your error!', errorRes.error);
                    if (errorRes instanceof HttpErrorResponse) {
                        if (errorRes.status === 500) {
                            // this.toastrService.danger('Opps!', "Something went wrong");
                        } else {
                            this.showErrorMsg(errorRes.message);
                        }
                    }
                    return throwError(errorRes);
                })
            );
    };

    getModifiedReq(req: HttpRequest<any>): HttpRequest<any> {
        req = req.clone({ url: this.baseUrl + req.url });
        const formdata = JSON.stringify(req.body);
        const auth_token = StorageService.getAuthToken();
        if (auth_token) req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + auth_token) });
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        req = req.clone({ body: formdata });
        return req;
    }

    showErrorMsg(errorResponse) {
        if (typeof errorResponse == 'string') {
            // this.toastrService.danger('Opps!', errorResponse);
        }

    }
}