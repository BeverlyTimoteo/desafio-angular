import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperadoDetalhesComponent } from './cooperado-detalhes.component';

describe('CooperadoDetalhesComponent', () => {
  let component: CooperadoDetalhesComponent;
  let fixture: ComponentFixture<CooperadoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperadoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperadoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
