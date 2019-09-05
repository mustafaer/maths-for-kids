import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyEvaluationComponent } from './multiply-evaluation.component';

describe('MultiplyEvaluationComponent', () => {
  let component: MultiplyEvaluationComponent;
  let fixture: ComponentFixture<MultiplyEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplyEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
