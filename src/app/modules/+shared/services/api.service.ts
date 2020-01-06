import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IApiResponse} from '@shared/models/interfaces/api-response';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public post(url: string, body: any, options = {}): Observable<IApiResponse> {
    return this.httpClient.post<IApiResponse>(url, body, options);
  }
}
