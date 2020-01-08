import { Injectable } from '@angular/core';
import {IAuthToken} from '@shared/models/interfaces/login/auth-token';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public getAuthToken(): IAuthToken {
    return this.get<IAuthToken>('auth_token');
  }

  public setAuthToken(token: IAuthToken) {
    this.set<IAuthToken>('auth_token', token);
  }


  public set<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get<T>(key: string): T {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {}
    return null;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clearAuth() {
    localStorage.removeItem('auth_token');
  }
}
