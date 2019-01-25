import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from './redmine-core.adapter';
import { RedmineCoreState } from './redmine-core.model';
import { RedmineCoreEnum } from './redmine-core.constant';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectState = createFeatureSelector<RedmineCoreState>(RedmineCoreEnum.Id);

export const selectIssuesIds = createSelector(
  selectState,
  selectIds
);

export const selectIssuesEntities = createSelector(
  selectState,
  selectEntities
);

export const selectAllIssues = createSelector(
  selectState,
  selectAll
);

export const selectIssuesTotal = createSelector(
  selectState,
  selectTotal
);

export const selectIssuesMapByState = createSelector(
  selectAllIssues,
  (issues) => issues
    .filter((itm) => itm.tracker.id !== 4)
    .reduce((obj, itm) => {
      if (!obj[itm.status.id]) {
        obj[itm.status.id] = {
          status: itm.status,
          items: []
        };
      }

      obj[itm.status.id].items = [
        ...obj[itm.status.id].items,
        itm
      ];

      return obj;
    }, {})
);
