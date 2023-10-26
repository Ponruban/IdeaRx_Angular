import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'https://api.publicapis.org/entries';
  constructor(private httpClient : HttpClient) { }
  get() {
    return this.httpClient.get(this.url);
  }

  // post() {
  //   return this.httpClient.post(this.url);
  // }
}
