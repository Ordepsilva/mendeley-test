import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders
} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiMendeleyService {

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  APIURL: string = "http://localhost:5000/";
  LOGIN: string = "login";

  constructor(private http: HttpClient) { }

  public mendeleyoAuth(): Observable<any> {
    return this.http.get<any>(this.APIURL + this.LOGIN);
  }

  
}