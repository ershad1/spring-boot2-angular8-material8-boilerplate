import {NgModule} from '@angular/core';

import * as Material from '@angular/material';

@NgModule({
  exports: [
    Material.MatButtonModule,
    Material.MatMenuModule,
    Material.MatToolbarModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatProgressSpinnerModule,
    Material.MatSnackBarModule,
    Material.MatGridListModule,
    Material.MatTabsModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatCheckboxModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
  ]
})
export class MaterialModule {
}
