import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SalesComponent } from './sales/sales.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PayageComponent } from './payage/payage.component';
const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }
  ,{
    path:'delivery',
    component: DeliveryComponent
  },
  {
    path:'sales',
    component: SalesComponent
  }
  ,
  {
    path:'credit',
    component: CreditComponent
  }
  ,
  {
    path:'debit',
    component: DebitComponent
  }
  ,
  {
    path:'invoice',
    component: InvoiceComponent
  }
  ,
  {
    path:'payage',
    component: PayageComponent
  }
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
