import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusEvaluationComponent } from './plus-evaluation.component';

describe('PlusEvaluationComponent', () => {
  let component: PlusEvaluationComponent;
  let fixture: ComponentFixture<PlusEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
