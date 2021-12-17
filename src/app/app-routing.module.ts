import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { LoginComponent } from './login/login.component';
import { MenutoolComponent } from './menutool/menutool.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenutoolComponent},
  {path:'employee',component:EmployeedataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
