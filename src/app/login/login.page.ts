import { AuthServiceService } from '../service/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginModel = new Login();
  
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  logar() {
    try {
      this.authService.login(this.loginModel);
    } catch (erro) {
      
    }
  }

}
