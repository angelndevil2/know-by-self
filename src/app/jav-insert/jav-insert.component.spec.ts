import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavInsertComponent } from './jav-insert.component';

describe('JavInsertComponent', () => {
  let component: JavInsertComponent;
  let fixture: ComponentFixture<JavInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
