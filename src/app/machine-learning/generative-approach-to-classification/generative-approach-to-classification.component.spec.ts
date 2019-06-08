import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeApproachToClassificationComponent } from './generative-approach-to-classification.component';

describe('GenerativeApproachToClassificationComponent', () => {
  let component: GenerativeApproachToClassificationComponent;
  let fixture: ComponentFixture<GenerativeApproachToClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerativeApproachToClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerativeApproachToClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
