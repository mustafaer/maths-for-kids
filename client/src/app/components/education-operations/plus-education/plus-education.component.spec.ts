import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusEducationComponent } from './plus-education.component';

describe('PlusEducationComponent', () => {
  let component: PlusEducationComponent;
  let fixture: ComponentFixture<PlusEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
