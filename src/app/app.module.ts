import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { HeaderComponent } from 'src/common-components/header/header.component';
import { FooterComponent } from 'src/common-components/footer/footer.component';
import { SidenavComponent } from 'src/common-components/sidenav/sidenav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
