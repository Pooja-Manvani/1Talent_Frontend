import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStatusPresentationComponent } from './leave-status-presentation.component';

describe('LeaveStatusPresentationComponent', () => {
  let component: LeaveStatusPresentationComponent;
  let fixture: ComponentFixture<LeaveStatusPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveStatusPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveStatusPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
