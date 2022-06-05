import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { MenuBarRoutingModule } from './menu-bar-routing.module';
import { MenuBarComponent } from './menu-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MenuBarRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    MenuBarComponent
  ]
})
export class MenuBarModule { }
