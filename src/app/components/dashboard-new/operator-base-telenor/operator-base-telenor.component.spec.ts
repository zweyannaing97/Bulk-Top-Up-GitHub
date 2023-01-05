import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseTelenorComponent } from './operator-base-telenor.component';

describe('OperatorBaseTelenorComponent', () => {
  let component: OperatorBaseTelenorComponent;
  let fixture: ComponentFixture<OperatorBaseTelenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseTelenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseTelenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
