import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// import { getHtmlTagDefinition } from '@angular/compiler';
// import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-hanking',
  templateUrl: './hanking.page.html',
  styleUrls: ['./hanking.page.scss'],
})
export class HankingPage implements OnInit {

  public items: any;
  constructor(public http: HttpClient) {}

  ngOnInit() {
  }

}
