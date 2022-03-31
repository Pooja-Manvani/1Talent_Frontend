import { TestBed } from '@angular/core/testing';

import { LeaveTablePresenterService } from './leave-table-presenter.service';

describe('LeaveTablePresenterService', () => {
  let service: LeaveTablePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveTablePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
