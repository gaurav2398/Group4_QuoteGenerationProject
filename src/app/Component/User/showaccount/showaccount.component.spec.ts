import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaccountComponent } from './showaccount.component';

describe('ShowaccountComponent', () => {
  let component: ShowaccountComponent;
  let fixture: ComponentFixture<ShowaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
