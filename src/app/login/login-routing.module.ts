import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from '../console/console.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'login',
  //       pathMatch:'full'
  //     },
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     },
  //   ]
  // },
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
