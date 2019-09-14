import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomerComponent} from './customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {SearchCustomerComponent} from './search-customer/search-customer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: CustomerComponent},
      {path: 'search', component: SearchCustomerComponent},
      {path: 'create', component: CreateCustomerComponent},
      {path: 'edit', component: EditCustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
