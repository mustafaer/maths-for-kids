import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusEducationComponent } from './minus-education.component';

describe('MinusEducationComponent', () => {
  let component: MinusEducationComponent;
  let fixture: ComponentFixture<MinusEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinusEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
