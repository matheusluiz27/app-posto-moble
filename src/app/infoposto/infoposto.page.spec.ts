import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopostoPage } from './infoposto.page';

describe('InfopostoPage', () => {
  let component: InfopostoPage;
  let fixture: ComponentFixture<InfopostoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopostoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
