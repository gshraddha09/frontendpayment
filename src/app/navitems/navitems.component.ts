import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent implements OnInit {
navitems:Array<any>;
  constructor() {
    this.navitems=[
      { link:'login'
      },
      {
      link:'dashboard',
   },
    {
      link:"transaction",
      

    },
  {
    link:"history",
    
  },
  {
    link:"logout"
  }
 

     ] };

  ngOnInit(): void {
  }

}
