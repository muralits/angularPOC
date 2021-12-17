import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-menutool',
  templateUrl: './menutool.component.html',
  styleUrls: ['./menutool.component.css']
})
export class MenutoolComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }
  public EmpRegistration(){
    console.log("hhh");
    
    this._route.navigate(['/employee']);
  }
}
