import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationOperationsComponent } from './evaluation-operations.component';

describe('EvaluationOperationsComponent', () => {
  let component: EvaluationOperationsComponent;
  let fixture: ComponentFixture<EvaluationOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
