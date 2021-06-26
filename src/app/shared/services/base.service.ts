import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {

  constructor(
    protected http: HttpClient
  ) { }

  public userData = new ReplaySubject<any>();
  userData$ = this.userData.asObservable();

  public isLoading = new Subject<any>();
  isLoadingResponse = this.isLoading.asObservable();

  /**
  * This method is used to Call API using Http GET method.
  * @param URL 
  * @return obserables responsce
  * @author  Muhammad Mukhtiar  <muhammad.mukhtiar@norgic.com>
  **/
  get(URL): Observable<any> {
    return this.http.get(URL);
  }

  /**
  * This method is use to add or update data using API 
  * @param formData 
  * @return obserables responsce
  * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
  **/
  save(URL, data = {}): Observable<any> {
    return this.http.post(URL, data);
  }

  /**
  * This method is used to Call API using Http Post method. 
  * @param URL 
  * @param URL 
  * @return obserables responsce
  * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
  **/
  post(URL: string, payload: any = {}): Observable<any> {
    return this.http.post(URL, payload);
  }

}
