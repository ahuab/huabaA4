import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented."); 
  }
  stuStudent: huab  =
    { snum: 991544521, sname: 'Ashley Huab',
       slogin: 'huaba',scampus: 'Davis',sassititle: 'huaba-A4'
    }; 
    stoStudent: menuInfo =
    {  bfname: 'pancake',bfpri:12,bfcal:200,

       lunchname: 'chicken sandwich',lunchpri: 20,lunchcal:175,

       dinnername:'steak',dinnerpri:47,dinnercal:250
    }; 

}
