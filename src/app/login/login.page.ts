import { AuthServiceService } from '../service/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../model/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginModel = new Login();
  
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  logar() {
    try {
      this.authService.login(this.loginModel);
      this.router.navigate(["/home"])
    } catch (erro) {
      console.log(erro)
    }
  }

}
