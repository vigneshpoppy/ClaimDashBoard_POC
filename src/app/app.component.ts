import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestingPracttice';
flag:boolean=true;
  mask(){
this.flag=!this.flag;
  }
}
