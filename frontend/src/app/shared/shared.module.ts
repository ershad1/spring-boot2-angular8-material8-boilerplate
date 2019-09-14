import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ngx-custom-validators';

import {NgxPermissionsModule} from 'ngx-permissions';
import {MaterialModule} from './material.module';

@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxPermissionsModule,
    CustomFormsModule
  ]
})
export class SharedModule {
}
