import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppState } from '@app/models';
import { IssuesRequest } from './redmine-core.action';
import { RedmineCoreEffect } from './redmine-core.effect';
import { RedmineCoreEnum } from './redmine-core.constant';
import { reducer } from './redmine-core.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(
      RedmineCoreEnum.Id,
      reducer
    ),
    EffectsModule.forFeature([ RedmineCoreEffect ])
  ]
})
export class RedmineCoreModule {
  constructor(private _store: Store<AppState>) {
    this._store.dispatch(new IssuesRequest());
  }
}
