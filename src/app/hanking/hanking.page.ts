import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { getHtmlTagDefinition } from '@angular/compiler';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-hanking',
  templateUrl: './hanking.page.html',
  styleUrls: ['./hanking.page.scss'],
})
export class HankingPage implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  listarpostos() {
    this.http.get( +"/hanking").subscribe(
      result=>{
        console.log(result);
      }
    )
  }

}
