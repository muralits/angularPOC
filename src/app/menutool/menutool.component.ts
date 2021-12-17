import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { EmplregService } from '../emplreg.service';
import { RoledetailsService } from '../roledetails.service';

@Component({
  selector: 'app-menutool',
  templateUrl: './menutool.component.html',
  styleUrls: ['./menutool.component.css']
})
export class MenutoolComponent implements OnInit {
  formGroup:FormGroup | any;
  constructor(
    private _route:Router,
    private empreg:EmplregService,
    private roledetails:RoledetailsService
    ) { }

  ngOnInit(): void {
    this.initform();
  }
  initform(){
    this.formGroup= new FormGroup({
      Name : new FormControl (''),
      About : new FormControl (''),
      Place : new FormControl (''),
      City : new FormControl (''),
      State : new FormControl (''),
      Country : new FormControl ('')
    });
  }
  public regProcess(){
      this.empreg.regProcess(this.formGroup.value).subscribe(result=>{
        if(result!=null){
          console.log(result);
          alert ("Employee Added");
        }else {
          console.log(result);
        }
      })
  }
  
  public publicRole(){
    this.roledetails.publicRole().subscribe(result=>{
      if(result!=null){
        console.log(result);
        alert ( result);
      }else {
        console.log(result);
      }
    })
  }
  public adminRole(){
    this.roledetails.adminRole().subscribe(result=>{
      if(result!=null){
        console.log(result);
        alert (result);
      }else {
        console.log(result);
        alert (result);
      }
    })
  }
  public developerRole(){
    this.roledetails.developerRole().subscribe(result=>{
      if(result!=null){
        console.log(result);
        alert (result);
      }else {
        console.log(result);
        alert (result);
      }
    })
  }
  public admindevRole(){
    this.roledetails.admindevRole().subscribe(result=>{
      if(result!=null){
        console.log(result);
        alert ( result);
      }else {
        console.log(result);
        alert (result);
      }
    })
  }
}
