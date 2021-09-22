import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { LoginService } from '../services/loginservice';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
customersid="1"
clearbalance=120000;
overdraftflag="0";
accountholdername="83454567475688";
customer:any={};
constructor(private router:Router,private http:HttpClient
  ,private service:LoginService) {
   


 }

  ngOnInit(): void {
   let obs= this.http.get('http://localhost:8080/customer/'+this.service.commoncustomer)
  obs.subscribe((result)=>
  {this.customer=result;
    
    console.log(result);

  });
  }

}
