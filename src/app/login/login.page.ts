import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { cadastro } from '../cadastro/cadastro-usuario.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/servicos/auth.service';
import { AlertService } from 'src/app/servicos/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  dismissLogin() {
    this.modalController.dismiss();
  }
  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }
  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast('Logado');
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }
}

