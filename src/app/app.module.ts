import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {RequestsService} from "./requests.service"
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserReposComponent } from './user-repos/user-repos.component';
import { TimecountPipe } from './timecount.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    UserReposComponent,
    TimecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
