import { TestBed } from '@angular/core/testing';

import { LeaveStatusPresenterService } from './leave-status-presenter.service';

describe('LeaveStatusPresenterService', () => {
  let service: LeaveStatusPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveStatusPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
