import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturoCooperadoComponent } from './futuro-cooperado.component';

describe('FuturoCooperadoComponent', () => {
  let component: FuturoCooperadoComponent;
  let fixture: ComponentFixture<FuturoCooperadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturoCooperadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturoCooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
