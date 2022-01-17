import { TestBed } from '@angular/core/testing';

import { CovidService } from './covid.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CovidService', () => {
  let service: CovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
