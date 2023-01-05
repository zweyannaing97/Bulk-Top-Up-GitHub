import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBaseMytelComponent } from './operator-base-mytel.component';

describe('OperatorBaseMytelComponent', () => {
  let component: OperatorBaseMytelComponent;
  let fixture: ComponentFixture<OperatorBaseMytelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorBaseMytelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorBaseMytelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
