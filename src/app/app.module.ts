import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,RouterModule
    ,AppRoutingModule
    ,SharedModule
    ,CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
