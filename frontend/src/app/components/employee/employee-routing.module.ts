import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeSaveComponent} from './employee-save/employee-save.component';
import {EmployeeComponent} from './employee.component';

const routes: Routes = [
  {
    path: '', component: EmployeeComponent,
    children: [
      {path: '', redirectTo: 'employee-list', pathMatch: 'full'},
      {path: 'employee-list', component: EmployeeListComponent},
      {path: 'employee-save', component: EmployeeSaveComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
