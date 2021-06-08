import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateagentadminaccountComponent } from './createagentadminaccount.component';

describe('CreateagentadminaccountComponent', () => {
  let component: CreateagentadminaccountComponent;
  let fixture: ComponentFixture<CreateagentadminaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateagentadminaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateagentadminaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
