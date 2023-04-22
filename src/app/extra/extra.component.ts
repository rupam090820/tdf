import { Component, OnInit } from '@angular/core';
import { userInfo } from '../Model/userInfo';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
public user:any=[];
public missmatch:boolean=false;
public pass2:any='';
  constructor() { 
    
  }

  ngOnInit(): void {
    this.user= new userInfo('','','','');
  }

  //send
  send(extra:any){
    console.log(extra.value);
    extra.reset();
    alert('submit successfully')
  }
  cpassword(pass1:any,pass2:any){
    if(pass1.value == pass2.value){
     this.missmatch=true;
    }
    else{
      this.missmatch=false;
    }
  }

}
