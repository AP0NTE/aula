import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaRegistroReactivoComponent } from './persona-registro-reactivo.component';

describe('PersonaRegistroReactivoComponent', () => {
  let component: PersonaRegistroReactivoComponent;
  let fixture: ComponentFixture<PersonaRegistroReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaRegistroReactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaRegistroReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
