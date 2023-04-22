import { Component } from '@angular/core';
//Import User Model :
import { userInfo } from './Model/userInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  public user:any=[];
  public mismatchpassError:boolean=false;
  public show:boolean=false;
  constructor(){
    this.user=new userInfo('','','','');
  }
  OnSubmit(userData:any){
    //Model value :
    // console.log(this.user);
    console.log(userData.value);
  }
   //Checking Password Mismatch 
   checkpass(pas1:any,pas2:any){
    if(pas1.value==pas2.value){
    this.mismatchpassError=false;
    }else{
     this.mismatchpassError=true;
    }
   }
 
   password(){
   this.show=!this.show;
   }
}