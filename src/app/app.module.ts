import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreLoginHeaderComponent } from './headers/pre-login-header/pre-login-header.component';
import { MemberDashboardComponent } from './headers/member-dashboard/member-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PreLoginHeaderComponent,
    MemberDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
