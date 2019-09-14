import {NgModule} from '@angular/core';
import {NgxPermissionsModule} from 'ngx-permissions';
import {SharedModule} from '../../shared/shared.module';

import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import { EmployeeSaveComponent } from './employee-save/employee-save.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeSaveComponent, EmployeeListComponent],
  imports: [
    SharedModule,
    NgxPermissionsModule.forChild(),
    EmployeeRoutingModule
  ]
})
export class EmployeeModule {
}
