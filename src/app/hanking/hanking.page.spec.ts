import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HankingPage } from './hanking.page';

describe('HankingPage', () => {
  let component: HankingPage;
  let fixture: ComponentFixture<HankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HankingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
