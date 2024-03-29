/**
 * Created by madhuranga on 1/26/17.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }   from './app.component';
import { UserComponent }   from './components/user.component';
import { AboutComponent }   from './components/about.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [AppComponent,UserComponent,AboutComponent],
  imports:      [BrowserModule,routing,FormsModule,HttpModule],
  bootstrap:    [AppComponent],
})
export class AppModule {}
