import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

export const AUTH_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  //{ path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}
];

export const AuthRouter: ModuleWithProviders = RouterModule.forChild(AUTH_ROUTES);
