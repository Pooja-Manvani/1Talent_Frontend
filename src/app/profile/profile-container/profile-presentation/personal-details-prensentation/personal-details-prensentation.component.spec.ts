import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsPrensentationComponent } from './personal-details-prensentation.component';

describe('PersonalDetailsPrensentationComponent', () => {
  let component: PersonalDetailsPrensentationComponent;
  let fixture: ComponentFixture<PersonalDetailsPrensentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsPrensentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsPrensentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
