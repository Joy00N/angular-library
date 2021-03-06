import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuperLibModule } from 'super-lib';
import { YoonLibComponent, YoonLibModule } from '@yoonjo/yoon-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuperLibModule,
    YoonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
