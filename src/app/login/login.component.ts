import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup | any
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.initform();
  }
  initform(){
  this.formGroup= new FormGroup({
    //"Username":"ashish","Password":"ashish"
    Username : new FormControl ('',[Validators.required]),
    Password : new FormControl ('',[Validators.required])
  });
}
  loginProcess(){
    if(this.formGroup.valid){
        this.authService.login(this.formGroup.value).subscribe(result=>{
          if(result.success){
            console.log(result);
            alert(result.message);
          }else{
            alert(result.message);
          }
        })
      }
    }
}
