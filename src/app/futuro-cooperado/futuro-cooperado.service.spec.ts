import { TestBed } from '@angular/core/testing';

import { FuturoCooperadoService } from './futuro-cooperado.service';

describe('FuturoCooperadoService', () => {
  let service: FuturoCooperadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuturoCooperadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
