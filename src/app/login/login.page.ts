import { AuthServiceService } from './../service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  async logar() {

  }

}
