import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usuarioLogueadoGGuard } from './usuario-logueado-g.guard';

describe('usuarioLogueadoGGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usuarioLogueadoGGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
