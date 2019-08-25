import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationOperationsComponent } from './education-operations.component';

describe('EducationOperationsComponent', () => {
  let component: EducationOperationsComponent;
  let fixture: ComponentFixture<EducationOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
