import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infoposto',
  templateUrl: './infoposto.page.html',
  styleUrls: ['./infoposto.page.scss'],
})
export class InfopostoPage implements OnInit {
public items: any;

  constructor(private http: HttpClient) {
    this.infoData();
   }
   infoData() {
    let Data: Observable<any>;
    Data = this.http.get('');
    Data.subscribe(result => {
      this.items = result;
    });
   }

  ngOnInit() {
  }

}
