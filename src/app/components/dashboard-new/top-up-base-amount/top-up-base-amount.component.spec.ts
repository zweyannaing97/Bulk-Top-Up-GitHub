import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpBaseAmountComponent } from './top-up-base-amount.component';

describe('TopUpBaseAmountComponent', () => {
  let component: TopUpBaseAmountComponent;
  let fixture: ComponentFixture<TopUpBaseAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUpBaseAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUpBaseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
