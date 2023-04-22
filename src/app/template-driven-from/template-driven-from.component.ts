import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userInfo } from '../Model/userInfo';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.css']
})
export class TemplateDrivenFromComponent implements OnInit {
  fname: string = '';
  terms: boolean = false;
  cpass:string='';
  show:boolean=false;
  missmatch:boolean=false;
  public user: any = [];
  constructor() { }

  ngOnInit(): void {
    this.user = new userInfo("", "", "", "");
  }
  // send(formValue:NgForm){  // its a one way for collect entires forms , for this pprocess we need to import NgForm
  // // console.log(formValue);  // its mean we get entier form
  // console.log(formValue.value);  
  // }  

  send(formdata: any) {
    console.log(formdata.value); // its a another process for collecting the entiers form, for this process we dont need to import NgForm
    formdata.reset();  // reset button add here
  }
  
  //reset function one process into ts file
  // reset(formdata: any) {
  //   formdata.reset();
  // }

  //reset function 2nd process into ts file
  // reset(formValue:NgForm){
  //   formValue.reset();
  //   }


  //password type button
  password(){
    this.show=!this.show;
  }

  //confirm password
  checkingPassword(pass2:any,cpass2:any){
    if(pass2.value == cpass2.value){
     this.missmatch=false;
    }
    else{
      this.missmatch=true;
    }
  }
}
