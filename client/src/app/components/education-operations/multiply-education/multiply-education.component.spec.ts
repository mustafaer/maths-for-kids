import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyEducationComponent } from './multiply-education.component';

describe('MultiplyEducationComponent', () => {
  let component: MultiplyEducationComponent;
  let fixture: ComponentFixture<MultiplyEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplyEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
