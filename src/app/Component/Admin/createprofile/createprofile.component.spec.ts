import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprofileComponent } from './createprofile.component';

describe('CreateprofileComponent', () => {
  let component: CreateprofileComponent;
  let fixture: ComponentFixture<CreateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
