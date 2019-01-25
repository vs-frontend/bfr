import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { IssuesModule } from './modules/pages/-issues';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    IssuesModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
