import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { LoginService } from './services/loginservice';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerDetailsComponent,
    TransactionComponent,
    HistoryComponent,
    HeaderComponent,
    NavitemsComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
    path:"login",component:LoginComponent
      },
      {
      path:"dashboard",component:CustomerDetailsComponent  
    },
    {
      path:'transaction', component:TransactionComponent
    },
    {
      path:"history",component:HistoryComponent
    },
    {
path:"logout",component:LoginComponent
    },
   
   
    {
      path:"",component:LoginComponent
    }
  
  ])
    
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
