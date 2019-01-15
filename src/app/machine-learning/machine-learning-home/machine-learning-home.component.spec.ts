import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningHomeComponent } from './machine-learning-home.component';

describe('MachineLearningHomeComponent', () => {
  let component: MachineLearningHomeComponent;
  let fixture: ComponentFixture<MachineLearningHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineLearningHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineLearningHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
