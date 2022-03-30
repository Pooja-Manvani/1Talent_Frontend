import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailsPresentationComponent } from './training-details-presentation.component';

describe('TrainingDetailsPresentationComponent', () => {
  let component: TrainingDetailsPresentationComponent;
  let fixture: ComponentFixture<TrainingDetailsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetailsPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDetailsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
