import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './views/home/home.module#HomePageModule' },
  { path: 'search', loadChildren: './views/search/search.module#SearchPageModule' },
  { path: 'register', loadChildren: './views/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './views/login/login.module#LoginPageModule' },
  { path: 'product/list/:id', loadChildren: './views/product-list/product-list.module#ProductListPageModule' },
  { path: 'product/detail/:id', loadChildren: './views/product-detail/product-detail.module#ProductDetailPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
