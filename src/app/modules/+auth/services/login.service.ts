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
      .post('./assets/users.json', {login, password})
      .map((response: IApiResponse) => {
        if (response.status.isOk) {

          if(this.checkAuth(response.data.users, login, password)) {
            return <IAuthToken>{token: '20a07fae972f3a322063c396a2ef858b79ec07f3', token_type: 'Bearer'} //response.data;
          } else {
            console.log('not mach user');
            return null;
          }

        } else {
          console.log('login failed');
          return response.data;
        }
      });
  }

  private checkAuth(data: any, login: string, password: string): boolean {
    return !!data.find(user => login === user.login && password === user.password);
  }
}
