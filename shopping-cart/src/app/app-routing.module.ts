import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
// { path: 'menu-bar', loadChildren: () => import('./menu-bar/menu-bar.module').then(m => m.MenuBarModule) }, 
{ path: 'login', loadChildren: () => import('./login/login.module').then(m=>m.LoginModule)},
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{ path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule),canActivate:[AuthGuard] },
  // { path: 'childItems', loadChildren: () => import('./child-items/child-items.module').then(m => m.ChildItemsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
