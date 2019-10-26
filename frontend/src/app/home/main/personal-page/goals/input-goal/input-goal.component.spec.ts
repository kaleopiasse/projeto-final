import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGoalComponent } from './input-goal.component';

describe('InputGoalComponent', () => {
  let component: InputGoalComponent;
  let fixture: ComponentFixture<InputGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
