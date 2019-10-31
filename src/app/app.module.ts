import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { InfoDetailComponent } from './info-detail/info-detail.component';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoTableComponent,
    InfoDetailComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
