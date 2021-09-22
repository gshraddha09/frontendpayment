import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//navitems:Array<any>;
companyDetails:any;
  constructor() {
    this.companyDetails={
      name:'BANK',
      logo:"https://www.logodesign.net/logo/abstract-arrow-with-pages-5603ld.png"
  }

 

}
}
