import { Action } from '@app/models';

export enum ActionTypes {
  IssuesRequest = '[Redmine Core] Issues Request',
  IssuesFail = '[Redmine Core] Issues Fail',
  IssuesLocalSuccess = '[Redmine Core] Issues Local Success'
}

export class  IssuesRequest implements Action {
  readonly type = ActionTypes.IssuesRequest;

  constructor(public payload: number[]) { }
}

export class IssuesFail implements Action {
  readonly type = ActionTypes.IssuesFail;

  constructor(public payload: any) { }
}

export class IssuesLocalSuccess implements Action {
  readonly type = ActionTypes.IssuesLocalSuccess;

  constructor(public payload: any) { }
}

export type Actions
  = IssuesRequest
  | IssuesFail
  | IssuesLocalSuccess;
