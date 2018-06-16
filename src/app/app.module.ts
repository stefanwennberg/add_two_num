import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddtwonumComponent } from './addtwonum/addtwonum.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtwonumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
