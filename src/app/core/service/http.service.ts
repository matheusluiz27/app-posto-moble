import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { IonicStorageModule } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HTTP, private storage: Storage) { }

  private async getAuthorizationHeader(headers: any){
    const token = await this.storage.getItem('token');

    if (token) {
      headers["Authorization"] = `Bearer &{token}`;
    }
  }

  async get<T>(url: string, parameters: any = {}, headers: any = {}){
    headers = await this.getAuthorizationHeader(headers);
    const result = await this.http.get(url, parameters, headers);
    return this.readResults<T>(result);
  }

  async post<T>(url: string, body: any = {}, headers: any = {}){
    headers = await this.getAuthorizationHeader(headers);
    const result = await this.http.post(url, body, headers);
    return this.readResults<T>(result);
  }

  async put<T>(url: string, body: any = {}, headers: any = {}){
    headers = await this.getAuthorizationHeader(headers);
    const result = await this.http.get(url, body, headers);
    return this.readResults<T>(result);
  }

  async delete<T>(url: string, parameters: any = {}, headers: any = {}){
    headers = await this.getAuthorizationHeader(headers);
    const result = await this.http.post(url, parameters, headers);
    return this.readResults<T>(result);
  }

  private readResults<T>(result: HTTPResponse){
    if(result && result.data){
      return JSON.parse(result.data) as T;
    }

    return null;
  }

}
