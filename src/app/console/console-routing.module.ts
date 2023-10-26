import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';

const routes: Routes = [
  {
    path: '',
    component:ConsoleComponent
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'console',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'console',
    //     component: ConsoleComponent
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
