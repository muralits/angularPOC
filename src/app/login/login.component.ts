import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CrudService } from '../crud.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public books: any;
  public status: any;
  formGroup:FormGroup | any;
  constructor(
    private authService:AuthService,
    private crud:CrudService,
    private _route:Router
    ) { }

  ngOnInit() {
    this.initform();
  }
  initform(){
  this.formGroup= new FormGroup({
    Username : new FormControl ('',[Validators.required]),
    Password : new FormControl ('',[Validators.required])
  });
}
  loginProcess(){
    if(this.formGroup.valid){
        this.authService.login(this.formGroup.value).subscribe(result=>{
          if(result!=null){
            console.log(result);
            this._route.navigate(['/menu']);
          }else {
            console.log(result);
          }
        })
      }
    }
   public publicData(){
    this.crud.getpublicdata().subscribe(result=>{
        this.books = result;
        alert(this.books);
        console.log(result)
      })
    }
}
