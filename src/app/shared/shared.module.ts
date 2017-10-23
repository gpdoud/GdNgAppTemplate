import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { System } from '../shared/models/system';
import { SystemService } from '../shared/services/system.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  providers: [SystemService]
})
export class SharedModule { }
