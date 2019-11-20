import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioServiceService } from '../service/usuario/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  private usuario = new Usuario();

  constructor(private usuarioService: UsuarioServiceService, private router: Router) { }

  ngOnInit() {
  }

  cadastrar() {
    this.usuario.tipoUsuario = "CLIENTE"
    try {
      this.usuarioService.cadastrarUsuario(this.usuario)
      this.router.navigate(["/login"])
    } catch (error) {

    }
  }
}
