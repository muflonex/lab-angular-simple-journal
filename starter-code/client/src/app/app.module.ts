import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { GetApiListService } from './getApiList.service';
import {  routes } from './my-route.routing';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryDetailComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],  
  providers: [GetApiListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
