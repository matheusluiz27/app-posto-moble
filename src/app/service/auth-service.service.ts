import { environment } from './../../environments/environment';
import { HttpService } from './../core/service/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpService: HttpService, private storage: Storage) { }

  async login(login: any) {
    const result = await this.httpService.post<any>(`${environment.api}/auth`, login);
    const token = result.token;
    await this.storage.setItem('token', token);
    return;
  }

}
