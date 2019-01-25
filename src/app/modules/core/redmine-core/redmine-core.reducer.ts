import { Actions, ActionTypes } from './redmine-core.action';
import { adapter } from './redmine-core.adapter';

const initialState = adapter.getInitialState();

export function reducer(
  state = initialState,
  action: Actions
) {
  switch (action.type) {
    case ActionTypes.IssuesLocalSuccess:
      return adapter.upsertMany(action.payload, state);
  }

  return state;
}
