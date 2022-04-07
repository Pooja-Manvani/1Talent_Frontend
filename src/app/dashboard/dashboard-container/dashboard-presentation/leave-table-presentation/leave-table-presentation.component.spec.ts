import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTablePresentationComponent } from './leave-table-presentation.component';

describe('LeaveTablePresentationComponent', () => {
  let component: LeaveTablePresentationComponent;
  let fixture: ComponentFixture<LeaveTablePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTablePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTablePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
