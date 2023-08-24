import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
userid:any;
username:any;
  ngOnInit(): void {
this.userid=localStorage.getItem("userid");
this.setFlag();

  }
  setFlag(){
    var x=this.studata.findIndex(x=>x.email==this.userid)
    ;
    var y=this.studata.find(x=>x.email==this.userid)
    this.username=y?.name
    this.studata[x].flag=false;
    if(this.userid=="admin@gmail.com"){
      this.studata.forEach(x => {
        x.flag=false;
        
      });
    }

  }
  
  logout(){
    var x=this.studata.findIndex(x=>x.email==this.userid);
    this.studata[x].flag=false;
   
    localStorage.clear();
    this.router.navigate(["/login"])
  }

  studata = [{
    email:"admin@gmail.com",
    password:"123456",
    name: 'Admin',
    phonenumber:"9876543120",
    street:"65 A anna nagar",
    city:"Chennai",
    postalcode:"602276"
    ,flag:true

    },
    {
      email:"dinesh@gmail.com",
      password:"dinesh",
      name: 'dinesh',
      phonenumber:"9876543822",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
      ,flag:true
    },{
      email:"karthick@gmail.com",
      password:"123456",
      name: 'karthick',
      phonenumber:"9876543611",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
      ,flag:true
    },
    {
      email:"subashini@gmail.com",
      password:"123456",
      name: 'subashini',
      phonenumber:"9876543553",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
      ,flag:true
    },
    {
      email:"preethi@gmail.com",
      password:"123456",
      name: 'preethi',
      phonenumber:"987654372",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
      ,flag:true
    },
  
    {
      email:"soundharya@gmail.com",
      password:"123456",
      name: 'soundharya',
      phonenumber:"987654312",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
      ,flag:true
    }
    ];
}
