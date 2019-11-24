import { Login } from './../../model/Login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(login: Login) {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let options = {
      headers: headers
    }


    this.http.post<string>(`${environment.api}/auth`, login).subscribe(token => {
      localStorage.set('token', token["token"]);
      localStorage.getItem(token);
    });
  }

}
