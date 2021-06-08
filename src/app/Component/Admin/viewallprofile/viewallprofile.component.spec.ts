import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallprofileComponent } from './viewallprofile.component';

describe('ViewallprofileComponent', () => {
  let component: ViewallprofileComponent;
  let fixture: ComponentFixture<ViewallprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
