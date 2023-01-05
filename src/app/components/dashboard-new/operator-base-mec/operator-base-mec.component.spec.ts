import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseMecComponent } from './operator-base-mec.component';

describe('OperatorBaseMecComponent', () => {
  let component: OperatorBaseMecComponent;
  let fixture: ComponentFixture<OperatorBaseMecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseMecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseMecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
