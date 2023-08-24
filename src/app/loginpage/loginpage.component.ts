import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm: any;
  
 
  email:any="";
  password:any="";
  data:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
   
    if(this.studata.find(x=>x.email==this.email)&&this.studata.find(x=>x.password==this.password)){
      this.router.navigate(["/dashboard"])
      localStorage.setItem("userid",this.email);
    }
      // Perform login logic here
      console.log(this.email );
      console.log(this.password );
    
  }
   studata = [{
    email:"admin@gmail.com",
    password:"123456",
    name: 'Admin',
    phonenumber:"9876543120",
    street:"65 A anna nagar",
    city:"Chennai",
    postalcode:"602276"

    },
    {
      email:"dinesh@gmail.com",
      password:"dinesh",
      name: 'dinesh',
      phonenumber:"9876543822",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
    },{
      email:"karthick@gmail.com",
      password:"123456",
      name: 'karthick',
      phonenumber:"9876543611",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
    },
    {
      email:"subashini@gmail.com",
      password:"123456",
      name: 'subashini',
      phonenumber:"9876543553",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
    },
    {
      email:"preethi@gmail.com",
      password:"123456",
      name: 'preethi',
      phonenumber:"987654372",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
    },
  
    {
      email:"soundharya@gmail.com",
      password:"123456",
      name: 'soundharya',
      phonenumber:"987654312",
      street:"65 A anna nagar",
      city:"Chennai",
      postalcode:"602276"
    }
    ];
}
