import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders,
} from "@angular/common/http";
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ApiMendeleyService {

  APIURL: string = "https://api.mendeley.com/";
  OAUTH: string = "oauth/";

  constructor(private http: HttpClient) { }

  public mendeleyoAuth(url: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    return this.http.get<any>(this.APIURL + this.OAUTH + "authorize?" + url, { headers: headers });
  }

}