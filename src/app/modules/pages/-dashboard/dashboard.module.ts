import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemCardModule } from '@app/common/item-card';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutesModule } from './dashboard.routes';

@NgModule({
  declarations: [ DashboardPage ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutesModule,
    ItemCardModule
  ]
})
export class DashboardModule {

}
