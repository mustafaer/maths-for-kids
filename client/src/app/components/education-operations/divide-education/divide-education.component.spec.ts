import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideEducationComponent } from './divide-education.component';

describe('DivideEducationComponent', () => {
  let component: DivideEducationComponent;
  let fixture: ComponentFixture<DivideEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivideEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
