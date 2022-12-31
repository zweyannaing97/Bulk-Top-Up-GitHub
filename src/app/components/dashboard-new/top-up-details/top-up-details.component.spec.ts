import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpDetailsComponent } from './top-up-details.component';

describe('TopUpDetailsComponent', () => {
  let component: TopUpDetailsComponent;
  let fixture: ComponentFixture<TopUpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
