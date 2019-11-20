import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiPage } from './confi.page';

describe('ConfiPage', () => {
  let component: ConfiPage;
  let fixture: ComponentFixture<ConfiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
