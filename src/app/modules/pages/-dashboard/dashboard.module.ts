import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutesModule } from './dashboard.routes';

@NgModule({
  declarations: [ DashboardPage ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    DashboardRoutesModule
  ]
})
export class DashboardModule {

}
