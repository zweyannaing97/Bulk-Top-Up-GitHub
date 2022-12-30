import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeBaseAmountComponent } from './service-type-base-amount.component';

describe('ServiceTypeBaseAmountComponent', () => {
  let component: ServiceTypeBaseAmountComponent;
  let fixture: ComponentFixture<ServiceTypeBaseAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeBaseAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeBaseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
