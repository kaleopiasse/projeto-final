import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfFeedbackComponent } from './self-feedback.component';

describe('SelfFeedbackComponent', () => {
  let component: SelfFeedbackComponent;
  let fixture: ComponentFixture<SelfFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
