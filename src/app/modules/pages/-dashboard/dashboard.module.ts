import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutesModule } from './dashboard.routes';

@NgModule({
  declarations: [ DashboardPage ],
  imports: [
    RouterModule,
    DashboardRoutesModule
  ]
})
export class DashboardModule {

}
