import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RedmineCoreModule } from '@app/core/redmine-core';
import { DashboardModule } from './modules/pages/-dashboard';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { ApiInterceptorModule } from './interceptors/api.interceptor';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ AppEffects ]),
    ApiInterceptorModule,
    AppRoutesModule,
    RedmineCoreModule,
    DashboardModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
