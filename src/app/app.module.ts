import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZonevizComponent } from './zoneviz/zoneviz.component';

@NgModule({
  declarations: [
    AppComponent,
    ZonevizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
