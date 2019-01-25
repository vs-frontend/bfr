import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectIssuesMapByState } from '@app/core/redmine-core';
import { AppState } from '@app/models';

@Component({
  selector: 'bfr-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ]
})
export class DashboardPage {
  dataMap$ = this._store.pipe(select(selectIssuesMapByState));

  constructor(private _store: Store<AppState>) {
    this.dataMap$.subscribe(console.log);
  }
}
