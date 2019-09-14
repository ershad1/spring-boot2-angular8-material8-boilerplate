import {Component, OnInit} from '@angular/core';
import {NgxRolesService} from 'ngx-permissions';
import {TemplateService} from '../template/template.service';

@Component({
  selector: 'customer-component',
  templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit {

  PAGE_TITLE = 'CUSTOMER';

  constructor(
    private templateService: TemplateService,
    private roleService: NgxRolesService
  ) {
  }

  ngOnInit() {
    this.templateService.setTitle(['supervisor_account', 'Customer']);
  }
}
