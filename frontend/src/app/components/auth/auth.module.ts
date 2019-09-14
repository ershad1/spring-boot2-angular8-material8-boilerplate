import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AuthService} from '../../security/auth/auth.service';
import {AuthInterceptor} from '../../shared/service/auth.interceptor';

import {SharedModule} from '../../shared/shared.module';
import {AuthRouter} from './auth.routes';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRouter, SharedModule],
  providers: [
    HttpClient,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AuthModule {
}
