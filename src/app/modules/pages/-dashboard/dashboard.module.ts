import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutesModule } from './dashboard.routes';

@NgModule({
  declarations: [ DashboardPage ],
  imports: [
    RouterModule,
    MatButtonModule,
    DashboardRoutesModule
  ]
})
export class DashboardModule {

}
