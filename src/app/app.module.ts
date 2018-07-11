import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { SwitchComponent } from './components/switch/switch.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    SwitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
