import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RedmineCoreApi {
  constructor(private _http: HttpClient) { }

  issues$() {
    return this._http.get(`https://redmine.vshosting.cz/projects/cml/issues.json`);
  }
}
