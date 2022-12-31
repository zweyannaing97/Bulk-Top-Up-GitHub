import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPlanDetailsComponent } from './data-plan-details.component';

describe('DataPlanDetailsComponent', () => {
  let component: DataPlanDetailsComponent;
  let fixture: ComponentFixture<DataPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
