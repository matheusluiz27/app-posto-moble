import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  public items: any;
  constructor(
    public http: HttpClient
  ) {
    this.loadData();
  }
  loadData() {
    let data: Observable<any>;
    data = this.http.get('');
    data.subscribe(result => {
      this.items = result;
    } );
  }

}
