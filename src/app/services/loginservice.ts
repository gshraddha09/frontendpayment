import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
export class LoginService{
    customerid:any;
    private messageCodeList: any;
    id=1;
    transferTypeList:any
    flag:any;
    userid:any
    commoncustomer:any;
    constructor(private http:HttpClient,private router:Router) {
        this.commoncustomer="";
        console.log(this.commoncustomer);
     

      
      }
       getcustomerid()
       {
         return this.customerid;
       }
       httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      };
      getflag()
      {
        return this.flag;
      }
      getDataFromApi(url:string){
        return this.http.get(url);
    } 
      getmessageCodeList(){
        return this.messageCodeList;
    }
    gettransferTypeList(){
      return this.transferTypeList;
  }

}