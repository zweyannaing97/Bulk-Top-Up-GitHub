import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseAmountComponent } from './operator-base-amount.component';

describe('OperatorBaseAmountComponent', () => {
  let component: OperatorBaseAmountComponent;
  let fixture: ComponentFixture<OperatorBaseAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
