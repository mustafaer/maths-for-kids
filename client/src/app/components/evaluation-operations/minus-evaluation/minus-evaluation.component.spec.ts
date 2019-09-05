import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusEvaluationComponent } from './minus-evaluation.component';

describe('MinusEvaluationComponent', () => {
  let component: MinusEvaluationComponent;
  let fixture: ComponentFixture<MinusEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinusEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
