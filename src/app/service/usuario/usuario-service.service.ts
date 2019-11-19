import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: Usuario) {
    this.http.post<Usuario>(`${environment.api}/usuarios`, usuario).subscribe( usuario => {
      console.log(usuario);
    })
  }
}
