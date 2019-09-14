import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSaveComponent } from './employee-save.component';

describe('EmployeeSaveComponent', () => {
  let component: EmployeeSaveComponent;
  let fixture: ComponentFixture<EmployeeSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
