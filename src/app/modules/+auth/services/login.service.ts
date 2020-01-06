import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IAuthToken } from '@shared/models/interfaces/login/auth-token';
import { ApiService } from '@shared/services/api.service';
import { IApiResponse } from '@shared/models/interfaces/api-response';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(
    private apiService: ApiService
  ) { }

  tryLogin(login: string, password: string): Observable<IAuthToken> {
    return this.apiService
      .post('route to login api', {login, password})
      .map((response: IApiResponse) => {
        if (response.status.isOk) {
          return response.data;
        } else {
          console.log('login failed');
          return response.data;
        }
      });
  }
}
