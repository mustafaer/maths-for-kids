import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideEvaluationComponent } from './divide-evaluation.component';

describe('DivideEvaluationComponent', () => {
  let component: DivideEvaluationComponent;
  let fixture: ComponentFixture<DivideEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivideEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
