import { Injectable, NgModule } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {

    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: environment.apiEndpoint + request.url.replace('/api', ''),
        setHeaders: {
          'X-Redmine-API-Key': 'be5788214e882262f822883bedc329b873ddd24e'
        }
      });

      return next.handle(request).pipe(
        catchError((response: HttpErrorResponse) => {
          return throwError(response.error);
        })
      );
    }

    return next.handle(request);

  }
}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }]
})
export class ApiInterceptorModule {

}
