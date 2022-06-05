import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ChildItemsRoutingModule } from './child-items-routing.module';
import { ChildItemsComponent } from './child-items.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';


@NgModule({
  declarations: [
    ChildItemsComponent
  ],
  imports: [
    CommonModule,
    ChildItemsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    ChildItemsComponent
  ]
})
export class ChildItemsModule { }
