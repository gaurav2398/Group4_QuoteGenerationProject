import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpolicyComponent } from './viewpolicy.component';

describe('ViewpolicyComponent', () => {
  let component: ViewpolicyComponent;
  let fixture: ComponentFixture<ViewpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
