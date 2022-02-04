import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UnverifiedListComponent } from './unverified-list/unverified-list.component';
import { VerifiedListComponent } from './verified-list/verified-list.component';
import { SavedListComponent } from './saved-list/saved-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UnverifiedListComponent,
    VerifiedListComponent,
    SavedListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
