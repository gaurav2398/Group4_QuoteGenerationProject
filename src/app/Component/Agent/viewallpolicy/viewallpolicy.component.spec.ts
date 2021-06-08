import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallpolicyComponent } from './viewallpolicy.component';

describe('ViewallpolicyComponent', () => {
  let component: ViewallpolicyComponent;
  let fixture: ComponentFixture<ViewallpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
