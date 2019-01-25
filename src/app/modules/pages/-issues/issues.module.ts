import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IssuesPage } from './issues.page';
import { IssuesRoutesModule } from './issues.routes';

@NgModule({
  declarations: [ IssuesPage ],
  imports: [
    RouterModule,
    IssuesRoutesModule
  ]
})
export class IssuesModule {

}
