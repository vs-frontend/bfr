import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { AppState } from '@app/models';
import { environment } from '../../environments/environment';

function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger({
    collapsed: true,
    filter: {
      blacklist: [ '@ngrx/store/update-reducers' ]
    }
  })(reducer);
}

export const reducers: ActionReducerMap<AppState> = {

};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [
    storeFreeze,
    logger
  ]
  : [];
