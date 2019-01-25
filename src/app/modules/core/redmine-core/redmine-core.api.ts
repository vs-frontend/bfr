import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from './redmine-core.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RedmineCoreApi {
  constructor(private _http: HttpClient) { }

  issues$() {
    return this._http
      .get<{ issues: Issue[]; }>(`/assets/issues.json`)
      .pipe((map((o) => o.issues)));
  }

}
