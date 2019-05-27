import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/AuthGuard';
import { HomeGuard } from 'src/guards/HomeGuard';

const routes: Routes = [{
  path: '', 
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'auth',
  loadChildren: './auth/auth.module#AuthPageModule',
  canActivate: [
    AuthGuard
  ]
}, {
  path: 'home',
  loadChildren: './home/home.module#HomePageModule',
  canActivate: [
    HomeGuard
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
