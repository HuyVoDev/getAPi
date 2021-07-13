import { TestBed } from '@angular/core/testing';

import { GetAPiComponentService } from './get-api-component.service';

describe('GetAPiComponentService', () => {
  let service: GetAPiComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAPiComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
