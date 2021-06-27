import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {

  constructor(protected http: HttpClient) {
  }

  /**
  * This method is used to Call API using Http GET method.
  * @param URL 
  * @return obserables responsce
  * @author  Muhammad <muhammad.mukhtiar@norgic.com>
  **/
  get(URL): Observable<any> {
    return this.http.get(URL);
  }

  /**
  * This method is use to add or update data using API 
  * @param formData 
  * @return obserables responsce
  * @author  Mukhtiar <muhammad.mukhtiar@norgic.com>
  **/
  save(URL, data = {}): Observable<any> {
    return this.http.post(URL, data);
  }

  /**
  * This method is used to Call API using Http Post method. 
  * @param URL 
  * @param URL 
  * @return obserables responsce
  * @author  Mukhtiar <muhammad.mukhtiar@norgic.com>
  **/
  post(URL: string, payload: any = {}): Observable<any> {
    return this.http.post(URL, payload);
  }

}
