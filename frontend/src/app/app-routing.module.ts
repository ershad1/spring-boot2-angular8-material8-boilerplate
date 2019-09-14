import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {TemplateComponent} from './components/template/template.component';
import {AuthGuard} from './security/auth.guard';

export const routes: Routes = [
  {
    path: '', component: TemplateComponent, canActivate: [AuthGuard], children: [
      {
        path: 'customers',
        data: {
          redirectTo: '/auth/login'
        },
        canLoad: [NgxPermissionsGuard],
        loadChildren: () => import('./components/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'employees',
        data: {
          redirectTo: '/auth/login'
        },
        canLoad: [NgxPermissionsGuard],
        loadChildren: () => import('./components/employee/employee.module').then(m => m.EmployeeModule)
      }
    ]
  },
  {path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
