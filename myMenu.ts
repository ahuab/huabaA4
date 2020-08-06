import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class menuInfo implements OnInit {
  ngOnInit(): void {
      throw new Error("Method not implemented.");
  }
  menu: myMenu =
    { snum: 991544521, sname: 'Ashley Huab',
       slogin: 'huaba',scampus: 'Davis',sassititle: 'huabaA4'
    }; 
