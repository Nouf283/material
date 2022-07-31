import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { MenuBarModule } from '../menu-bar/menu-bar.module';
import {MatDividerModule} from '@angular/material/divider';
import { ChildItemsModule } from '../child-items/child-items.module';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { AuthService } from '../shared/auth/auth.service';
import { AuthGuard } from '../shared/auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../shared/auth/jwt.interceptor';
import { ErrorInterceptor } from '../shared/auth/error.interceptor';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MenuBarModule,
    MatCardModule,
    MatDividerModule,
    ChildItemsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
 

})
export class ItemsModule { }
