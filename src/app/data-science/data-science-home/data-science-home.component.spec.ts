import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceHomeComponent } from './data-science-home.component';

describe('DataScienceHomeComponent', () => {
  let component: DataScienceHomeComponent;
  let fixture: ComponentFixture<DataScienceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataScienceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
