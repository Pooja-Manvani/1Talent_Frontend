import { TestBed } from '@angular/core/testing';

import { ProfilePresenterService } from './profile-presenter.service';

describe('ProfilePresenterService', () => {
  let service: ProfilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
