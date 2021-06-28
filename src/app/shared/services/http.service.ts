import { Injectable } from '@angular/core';
import { HttpEvent, HttpResponse, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpService implements HttpInterceptor {
    private baseUrl = environment.apiBaseUrl;

    constructor(private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.getModifiedReq(req);
        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        if (event && event.body && event.body.status != 200) {
                            const serRes = event.body;
                            this.showErrorMsg(serRes.message);
                        }
                    }
                }),
                catchError(errorRes => {
                    console.log('this should print your error!', errorRes.error);
                    if (errorRes instanceof HttpErrorResponse) {
                        this.showErrorMsg(errorRes.message);
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
        const error = typeof errorResponse == 'string' ? errorResponse : 'Something went wrong'
        this.toastr.error(error, 'Opps111!');
    }
}