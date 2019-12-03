import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePdiComponent } from './create-pdi.component';

describe('CreatePdiComponent', () => {
  let component: CreatePdiComponent;
  let fixture: ComponentFixture<CreatePdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
