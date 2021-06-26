export class StorageService {

  static readonly STORAGE_KEY_AUTH_TOKEN = 'auth_token';
  static readonly STORAGE_KEY_USER_NAME = 'username';
  static readonly STORAGE_KEY_USER_DATA = 'user_data';

  static clearLocalStorge() {
    localStorage.clear();
    sessionStorage.clear();
    return;
  }

  static getAuthToken() {
    return localStorage.getItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
  }

  static setAuthToken(token) {
    localStorage.setItem(StorageService.STORAGE_KEY_AUTH_TOKEN, token);
  }

  static removeAuthToken() {
    localStorage.removeItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
  }

  static getAuthUsername() {
    return localStorage.getItem(StorageService.STORAGE_KEY_USER_NAME);
  }

  static setAuthUsername(username) {
    localStorage.setItem(StorageService.STORAGE_KEY_USER_NAME, username);
  }

  static removeAuthUsername() {
    localStorage.removeItem(StorageService.STORAGE_KEY_USER_NAME);
  }

  static setUserData(userData) {
    localStorage.setItem(StorageService.STORAGE_KEY_USER_DATA, JSON.stringify(userData));
  }

  static getUserData() {
    return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_USER_DATA));
  }

  static removeUserData() {
    localStorage.removeItem(StorageService.STORAGE_KEY_USER_DATA);
  }

}
