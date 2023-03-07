import { TestBed } from '@angular/core/testing';

import { SwitchLoginService } from './switch-login.service';

describe('SwitchLoginService', () => {
  let service: SwitchLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
