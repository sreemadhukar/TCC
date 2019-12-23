import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalPoFormComponent } from './internal-po-form.component';

describe('InternalPoFormComponent', () => {
  let component: InternalPoFormComponent;
  let fixture: ComponentFixture<InternalPoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalPoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalPoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
