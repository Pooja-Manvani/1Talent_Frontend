import { TestBed } from '@angular/core/testing';

import { TrainingDetailsPresenterService } from './training-details-presenter.service';

describe('TrainingDetailsPresenterService', () => {
  let service: TrainingDetailsPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingDetailsPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
