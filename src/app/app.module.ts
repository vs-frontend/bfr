import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssuesModule } from './modules/pages/-issues';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutesModule,
    IssuesModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
