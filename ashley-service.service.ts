import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AshleyServiceService {

  constructor() { }
}

ashley-service.service.spec.ts
import { TestBed } from '@angular/core/testing';

import { AshleyServiceService } from './ashley-service.service';

describe('AshleyServiceService', () => {
  let service: AshleyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AshleyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
