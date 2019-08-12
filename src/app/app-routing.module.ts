import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'page-a', loadChildren: './page-a/page-a.module#PageAPageModule' },
  { path: 'page-b', loadChildren: './page-b/page-b.module#PageBPageModule' },
  { path: 'page-c', loadChildren: './page-c/page-c.module#PageCPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
