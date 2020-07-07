import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  apiurl='https://futureserver-1f6d9.web.app/'
  // apiurl='http://localhost:3000/'

  constructor(private http: HttpClient) { }

  sendmail(data){
    return this.http.post(this.apiurl+'future',data);
  }
}
