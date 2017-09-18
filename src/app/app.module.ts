import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrameworkModule } from '../framework/framework.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
