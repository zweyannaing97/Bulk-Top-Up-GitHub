import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPswrdComponent } from './new-pswrd.component';

describe('NewPswrdComponent', () => {
  let component: NewPswrdComponent;
  let fixture: ComponentFixture<NewPswrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPswrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPswrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
