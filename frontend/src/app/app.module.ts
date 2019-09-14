import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgxPermissionsModule} from 'ngx-permissions';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TemplateComponent} from './components/template/template.component';
import {TemplateService} from './components/template/template.service';
import {AuthService} from './security/auth/auth.service';
import {AuthInterceptor} from './shared/service/auth.interceptor';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    AuthService,
    TemplateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
