import {NgModule} from '@angular/core';
import {NgxPermissionsModule} from 'ngx-permissions';
import {SharedModule} from '../../shared/shared.module';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {SearchCustomerComponent} from './search-customer/search-customer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    SearchCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent],
  imports: [
    SharedModule,
    NgxPermissionsModule.forChild(),
    CustomerRoutingModule
  ]
})

export class CustomerModule {
}
