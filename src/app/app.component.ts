import { Component, OnInit } from '@angular/core';
import { ApiMendeleyService } from 'src/services/api-mendeley.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';
  
  constructor(public apiMendeley: ApiMendeleyService) {
  }
  ngOnInit(): void {

  }

  authorization() {
    let state = this.generateRandomString();
    let client_id = "8688";
    let redirect_uri = "http://localhost:4200";
    let client_secret = "X21jDaXfGnmn4Ury";
    let response_type = "code"
    let scope = "all";
    let url = "client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&response_type=" + response_type + "&scope=" + scope + "&state=" + state;
    this.apiMendeley.mendeleyoAuth(url).subscribe(result => {
      console.log(result);
    }, (error => {
      console.log(error);
    }))
  }

  generateRandomString(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
