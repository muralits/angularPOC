import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenutoolComponent } from './menutool/menutool.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'',component:MenutoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
