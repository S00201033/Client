import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { Test1Component } from './test1/test1.component';

import { PlayerListComponent } from './book2/player-list/player-list.component';
import { PlayerRowComponent } from './book2/player-row/player-row.component';
import { PlayerDetailsComponent } from './book2/player-details/player-details.component';
import { SampleFormComponent } from './book2/sample-form/sample-form.component';
import { PlayerFormCompenent } from './book2/player-form/player-form.component';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    PlayerListComponent,
    PlayerRowComponent,
    PlayerDetailsComponent,
    SampleFormComponent,
    PlayerFormCompenent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
