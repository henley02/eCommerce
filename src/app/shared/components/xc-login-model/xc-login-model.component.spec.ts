import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcLoginModelComponent } from './xc-login-model.component';

describe('XcLoginModelComponent', () => {
  let component: XcLoginModelComponent;
  let fixture: ComponentFixture<XcLoginModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcLoginModelComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcLoginModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
