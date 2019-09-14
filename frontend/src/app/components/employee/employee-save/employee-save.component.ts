import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../shared/service/notification.service';
import {DepartmentService} from '../service/department.service';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-employee-save',
  templateUrl: './employee-save.component.html',
  styleUrls: ['./employee-save.component.scss']
})
export class EmployeeSaveComponent implements OnInit {

  constructor(private service: EmployeeService,
              private departmentService: DepartmentService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.service.getEntities();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializedFromGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEntity(this.service.form.value);
      this.onClear();
      this.notificationService.success(':: Submitted successfully');
    }
  }
}
