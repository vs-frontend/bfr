import { createEntityAdapter } from '@ngrx/entity';
import { Issue } from './redmine-core.model';

export const adapter = createEntityAdapter<Issue>({
  selectId: (issue: Issue) => issue.id
});
