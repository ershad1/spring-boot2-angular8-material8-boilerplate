import { Component, OnInit } from '@angular/core';
import {NgxRolesService} from 'ngx-permissions';
import {TemplateService} from '../template/template.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  navLinks = [
    {path: './employee-list', label: 'List'},
    {path: './employee-save', label: 'Save', disabled: true},
  ];

  constructor(
    private templateService: TemplateService,
    private roleService: NgxRolesService
  ) {
  }

  ngOnInit() {
    this.templateService.setTitle(['supervisor_account', 'Employee']);
  }
}
