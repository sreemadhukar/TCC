import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRegistrationComponent } from './job-registration.component';

describe('JobRegistrationComponent', () => {
  let component: JobRegistrationComponent;
  let fixture: ComponentFixture<JobRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
