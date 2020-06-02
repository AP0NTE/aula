import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoRegistroComponent } from './apoyo-registro.component';

describe('ApoyoRegistroComponent', () => {
  let component: ApoyoRegistroComponent;
  let fixture: ComponentFixture<ApoyoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
