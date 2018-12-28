import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirestoreComponent } from './angular-firestore.component';

describe('AngularFirestoreComponent', () => {
  let component: AngularFirestoreComponent;
  let fixture: ComponentFixture<AngularFirestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFirestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
