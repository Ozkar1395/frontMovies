import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReservasComponent } from './form-reservas.component';

describe('FormReservasComponent', () => {
  let component: FormReservasComponent;
  let fixture: ComponentFixture<FormReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
