import { TestBed } from '@angular/core/testing';

import { AirTableService } from './air-table.service';

describe('AirTableService', () => {
  let service: AirTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
