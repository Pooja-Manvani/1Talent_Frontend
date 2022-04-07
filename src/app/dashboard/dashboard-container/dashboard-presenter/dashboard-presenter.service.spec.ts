import { TestBed } from '@angular/core/testing';

import { DashboardPresenterService } from './dashboard-presenter.service';

describe('DashboardPresenterService', () => {
  let service: DashboardPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
