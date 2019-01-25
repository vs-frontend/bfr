import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllIssues } from '@app/core/redmine-core';
import { AppState } from '@app/models';

@Component({
  selector: 'bfr-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ]
})
export class DashboardPage {
  data$ = this._store.pipe(select(selectAllIssues));

  constructor(private _store: Store<AppState>) { }
}
