import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsPdiComponent } from './steps-pdi.component';

describe('StepsPdiComponent', () => {
  let component: StepsPdiComponent;
  let fixture: ComponentFixture<StepsPdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsPdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsPdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
