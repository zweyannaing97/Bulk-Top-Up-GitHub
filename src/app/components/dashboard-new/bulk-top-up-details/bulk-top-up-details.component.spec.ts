import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkTopUpDetailsComponent } from './bulk-top-up-details.component';

describe('BulkTopUpDetailsComponent', () => {
  let component: BulkTopUpDetailsComponent;
  let fixture: ComponentFixture<BulkTopUpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkTopUpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkTopUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
