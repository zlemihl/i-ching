import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HashbrownComponent } from './hashbrown/hashbrown.component';

@NgModule({
  declarations: [
    AppComponent,
    HashbrownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
