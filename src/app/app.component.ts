import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMendeleyService } from 'src/services/api-mendeley.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';
  account: any;
  oauthResponse: any;
  constructor(public apiMendeley: ApiMendeleyService, private activatedRoute: ActivatedRoute,
    private http: HttpClient) {

  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.code) {
        this.getAccessToken(params.code);
        console.log(params.code);
      }
    });
  }

  generateRandomString(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }


  goToLoginPage() {
    let state = this.generateRandomString();
    const params = [
      'response_type=code',
      'state=' + state,
      'client_id=8688',
      'scope=all',
      encodeURIComponent('redirect_uri=http://localhost:4200'),
    ];
    window.location.href = 'https://api.mendeley.com/oauth/authorize?' + params.join('&');
  }


  //request for token
  getAccessToken(code: string) {
    const payload = new HttpParams()
      .append('grant_type', 'authorization_code')
      .append('code', code)
      .append('redirect_uri', 'http://localhost:4200')
      .append('client_id', '8688')
      .append('client_secret', 'X21jDaXfGnmn4Ury');


    this.http.post('https://api.mendeley.com/oauth/token', payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '*/*',
      }
    }).subscribe(response => {
      this.oauthResponse = response;
    });
  }


  getProfile() {
    this.http.get('https://api.mendeley.com/author', {
      headers: {
        Authorization: 'Bearer ' + this.oauthResponse.access_token
      }
    }).subscribe(response => {
      this.account = response;
    });
  }

}
