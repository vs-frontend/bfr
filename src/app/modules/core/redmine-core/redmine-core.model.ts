import { EntityState } from '@ngrx/entity';

export interface RedmineCoreState extends EntityState<Issue> { }

export interface Project {
  id: number;
  name: string;
}

export interface Tracker {
  id: number;
  name: string;
}

export interface Status {
  id: number;
  name: string;
}

export interface Priority {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  name: string;
}

export interface CustomField {
  id: number;
  name: string;
  value: string;
}

export interface AssignedTo {
  id: number;
  name: string;
}

export interface Parent {
  id: number;
}

export interface FixedVersion {
  id: number;
  name: string;
}

export interface Issue {
  id: number;
  project: Project;
  tracker: Tracker;
  status: Status;
  priority: Priority;
  author: Author;
  subject: string;
  description: string;
  done_ratio: number;
  custom_fields: CustomField[];
  created_on: Date;
  updated_on: Date;
  assigned_to: AssignedTo;
  parent: Parent;
  estimated_hours?: number;
  fixed_version: FixedVersion;
}

export interface RootObject {
  issues: Issue[];
  total_count: number;
  offset: number;
  limit: number;
}
