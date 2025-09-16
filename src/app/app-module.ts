import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contador } from './contador/contador';
import { Boton } from './components/boton/boton';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    App,
    Contador,
    Boton,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
