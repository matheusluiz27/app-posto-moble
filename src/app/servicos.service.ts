import { HttpService } from './core/service/http.service';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  public items: any;
  constructor( public http: HttpClient, private httpService: HttpService ) { } 

  get() {
    return this.httpService.get<JSON[]>(`${environment.api}`)
  }

}
