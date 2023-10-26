import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [ConsoleComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, ConsoleRoutingModule],
  exports: [ConsoleComponent, HeaderComponent],
})
export class ConsoleModule {}
