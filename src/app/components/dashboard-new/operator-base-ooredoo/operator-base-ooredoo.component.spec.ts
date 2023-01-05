import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseOoredooComponent } from './operator-base-ooredoo.component';

describe('OperatorBaseOoredooComponent', () => {
  let component: OperatorBaseOoredooComponent;
  let fixture: ComponentFixture<OperatorBaseOoredooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseOoredooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseOoredooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
