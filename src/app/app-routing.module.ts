import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'hanking', loadChildren: './hanking/hanking.module#HankingPageModule' },  { path: 'infoposto', loadChildren: './infoposto/infoposto.module#InfopostoPageModule' },
  { path: 'confi', loadChildren: './confi/confi.module#ConfiPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
