import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { RedmineCoreApi } from './redmine-core.api';
import {
  ActionTypes,
  IssuesRequest,
  IssuesFail,
  IssuesLocalSuccess
} from './redmine-core.action';

@Injectable()
export class RedmineCoreEffect {
  @Effect()
  private _onIssuesRequest$ = this._actions$.pipe(
    ofType<IssuesRequest>(ActionTypes.IssuesRequest),
    switchMap(() => this._api
      .issues$()
      .pipe(
        map((data) => new IssuesLocalSuccess(data)),
        catchError((err) => of(new IssuesFail(err)))
      )
    )
  );

  constructor(
    private _api: RedmineCoreApi,
    private _actions$: Actions
  ) { }
}
