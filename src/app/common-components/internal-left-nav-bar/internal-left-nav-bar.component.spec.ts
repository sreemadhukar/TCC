import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalLeftNavBarComponent } from './internal-left-nav-bar.component';

describe('InternalLeftNavBarComponent', () => {
  let component: InternalLeftNavBarComponent;
  let fixture: ComponentFixture<InternalLeftNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalLeftNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalLeftNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
