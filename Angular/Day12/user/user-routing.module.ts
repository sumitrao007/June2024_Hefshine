import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

const routes: Routes = [
    {
      path:"",component:UserComponent
    },
    {
      path:"addUser",component:AdduserComponent
    },
    {
      path:"updateUser",component:UpdateuserComponent
    },
    {
      path:"deleteUser",component:DeleteuserComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
