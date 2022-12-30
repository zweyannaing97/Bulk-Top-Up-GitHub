import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTopUpDetailsComponent } from './single-top-up-details.component';

describe('SingleTopUpDetailsComponent', () => {
  let component: SingleTopUpDetailsComponent;
  let fixture: ComponentFixture<SingleTopUpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTopUpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTopUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
