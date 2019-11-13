import { ServicosService } from './Servicos/servicos.service';
import { LoginPage } from './login/login.page';
import { CadastroUsuarioPage } from './cadastro/cadastro-usuario.page';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Hanking',
      url: '/hanking',
      icon: 'list'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'list'
    },
    {
      title: 'Crie sua conta',
      url: '/cadastro-usuario',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'list'
    }
  ];

  constructor(
    public servicosService: ServicosService,
    public http: HttpClientModule,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // public nativeStorage: NativeStorage,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
