import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStatusComponent } from './error-status.component';

describe('ErrorStatusComponent', () => {
  let component: ErrorStatusComponent;
  let fixture: ComponentFixture<ErrorStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorStatusComponent]
    });
    fixture = TestBed.createComponent(ErrorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
