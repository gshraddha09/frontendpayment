import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { LoginService } from '../services/loginservice';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
index=0;
history:any={};
id:any={}

constructor(private router:Router,private http:HttpClient,private service:LoginService)
  {

  }

  ngOnInit(): void {
    let obs= this.http.get('http://localhost:8080/transaction/'+this.service.commoncustomer)
   obs.subscribe((result)=>
   {this.history=result;
     
     console.log(result);
 
   });
   }

}
