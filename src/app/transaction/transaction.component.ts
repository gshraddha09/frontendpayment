import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/loginservice';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent  {
  message:any;
  transferProfile:any;
  messageCodeList:Array<any>;
  messageCodeDropdownSchema :any;
  transferTypeList:Array<any>;
  TransferTypeDropdownSchema:any;
  // codes=[
  //   "B-Bank to Bank Tranfer",
  //   "C-Customer to Customer Transfer"
  // ]
 
  

  constructor(private router: Router,private datasvc:LoginService,private http:HttpClient ) {
    this.transferProfile={
      "receiveraccountholdernumber": '',
      "receiveraccountholdername": '',  
      "receiverBIC":
                    {  "bic":''},
      
      "inramount": '',
      "customerid": 
                    {  "customerid": localStorage.getItem('customerid') },
       
      "messagecode": {
          "messagecode": ''
          },
     "transfertypecode":{
          "transfertypecode":''
          }
     };

    this.messageCodeList = this.datasvc.getmessageCodeList();
    this.transferTypeList=this.datasvc.gettransferTypeList();
  }  
    onSubmit() {  
        this.router.navigate(['/dashboard'])  
    }  
    messagecodeSelected(data:any){
      // console.log(data);
      this.transferProfile.messagecode.messagecode=data;
    }

    transfertypeSelected(data:any){
      this.transferProfile.transfertypecode.transfertypecode=data;
    }

  ngOnInit(): void {
    this.datasvc.getDataFromApi('http://localhost:8080/message')
      .subscribe((result: any) => {
        this.messageCodeList = result.map((item: any) => {
          return { name: item.messagecode, code: item.instruction };
        });
        this.messageCodeDropdownSchema={
          labelName:"",
          selectedValue:"",
          controlName:"messagecode",
          options:this.messageCodeList,
          defaultLabel:"Select messagecode"
        }
      }, err => {
        console.log(err);
      })


  }
  apiResult={
    success:false,
    error:false
  }

  handleTransfer() {
    let url = 'http://localhost:8080/transaction'
    let payLoad = {
      "receiveraccountholdernumber": this.transferProfile.receiveraccountholdernumber,
      "receiveraccountholdername": this.transferProfile.receiveraccountholdername,  
  
      "inramount": this.transferProfile.inramount,
      "customerid": 
                    {  "customerid":this.datasvc.commoncustomer },
       
      
     "transfertypecode":{
          "transfertypecode":this.transferProfile.transfertypecode.transfertypecode
          }
     }
    
    
     this.http.post(url, payLoad).subscribe( result => {
      this.message=result;
      console.log(result);
      
    }, err => {
      if(err.status==200){
      // this.apiResult.success=true;
      // this.apiResult.error =false;
      localStorage.setItem("receiver",this.transferProfile.receiveraccountholdername);
      localStorage.setItem("amount",this.transferProfile.inramount);
      this.router.navigate(['/success']) 
    }
      else{
      this.apiResult.success=false;
      this.apiResult.error =true;
      }
    }
    )
    
    
  }
  myurl:any;
invalidname:any;
bankname:any;
 
  getbankbybic()
  {
    this.myurl="http://localhost:8080/bank/"+this.transferProfile.receiverBIC.bic;
     let response= this.http .get(this.myurl);
     response.subscribe((data)=>this.bankname=data);
     
     console.log(this.bankname);
  }
 

}
