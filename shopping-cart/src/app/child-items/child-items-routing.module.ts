import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildItemsComponent } from './child-items.component';

const routes: Routes = [{ path: '', component: ChildItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildItemsRoutingModule { }
