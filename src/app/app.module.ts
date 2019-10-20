import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StashComponent } from './stash/stash.component';
import { HeaderComponent } from './header/header.component';
import { StashTabsComponent } from './stash-tabs/stash-tabs.component';
import { StashTabContentComponent } from './stash-tab-content/stash-tab-content.component';
import { CharactersComponent } from './characters/characters.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StashComponent,
    HeaderComponent,
    StashTabsComponent,
    StashTabContentComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
