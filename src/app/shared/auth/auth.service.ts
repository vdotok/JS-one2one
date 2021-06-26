import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthService {
  public userSubject$ = new Subject();
  public currentUserReq$;
  public currentUserId;
  public userSubject = new ReplaySubject<any>(1);
  private userRequest: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  login(data): Observable<any> {
    return this.http.post('Login', data);
  }

  signup(data): Observable<any> {
    return this.http.post('SignUp', data);
  }

  logout(): void {
    StorageService.clearLocalStorge();
  }

  getToken(): string {
    return StorageService.getAuthToken()
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  islogin(): boolean {
    return !!this.getToken();
  }

  resetUser() {
    this.currentUserId = null;
    this.userRequest = null;
    this.userSubject = new ReplaySubject(1);
  }

  getUserId() {
    const userdata = StorageService.getUserData();
    return userdata._id;
  }

  isAuthUser(): Observable<any> {
    return this.http.get<any>('users/current-user');
  }
}
