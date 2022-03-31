import { TestBed } from '@angular/core/testing';

import { PersonalDetailsPresenterService } from './personal-details-presenter.service';

describe('PersonalDetailsPresenterService', () => {
  let service: PersonalDetailsPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalDetailsPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
