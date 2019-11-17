import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-rating',
  templateUrl: './ion-rating.component.html',
  styleUrls: ['./ion-rating.component.scss'],
})
export class IonRatingComponent implements OnInit {

  @Input() numStars = 5;
  @Input() value = 0;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();


  stars: string[] = [];

  constructor() { }

  ngOnInit() {}

}
