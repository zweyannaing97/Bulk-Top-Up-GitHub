import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTopUpDetailsComponent } from './multiple-top-up-details.component';

describe('MultipleTopUpDetailsComponent', () => {
  let component: MultipleTopUpDetailsComponent;
  let fixture: ComponentFixture<MultipleTopUpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTopUpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTopUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
