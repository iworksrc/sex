import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IApiResponse } from '@shared/models/interfaces/api-response';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public post(url: string, body: any, options = {}): Observable<IApiResponse> {
    // return this.httpClient.post(url, body, options)
    //   .map((data) => {
    //     console.log('POST', data);
    //     return {data: data, status: {isOk: true, errors: null}};
    //   });

    /* mock, remove when normal backend is exist */
    return this.httpClient.get(url)
      .map((data) => {
        console.log('GET data ', data);
        return {data: data, status: {isOk: true, errors: null}};
      })
  }

  public get(url: string) {
    const encoded = encodeURIComponent(JSON.stringify({ass:'puss'})); //todo this is for GET with body
  }
}
