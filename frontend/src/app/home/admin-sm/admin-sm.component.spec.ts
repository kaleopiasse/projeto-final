import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSmComponent } from './admin-sm.component';

describe('AdminSmComponent', () => {
  let component: AdminSmComponent;
  let fixture: ComponentFixture<AdminSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
