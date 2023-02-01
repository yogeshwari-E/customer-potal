import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { DeliveryComponent } from './delivery/delivery.component';
import { SalesComponent } from './sales/sales.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PayageComponent } from './payage/payage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    MainComponent,
    DeliveryComponent,
    SalesComponent,
    CreditComponent,
    DebitComponent,
    InvoiceComponent,
    PayageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
