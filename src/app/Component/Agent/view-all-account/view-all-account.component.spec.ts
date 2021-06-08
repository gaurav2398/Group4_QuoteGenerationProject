import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAccountComponent } from './view-all-account.component';

describe('ViewAllAccountComponent', () => {
  let component: ViewAllAccountComponent;
  let fixture: ComponentFixture<ViewAllAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
