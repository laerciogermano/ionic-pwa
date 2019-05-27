import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Config } from 'src/constants/Config';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  async canActivate() {
    try {
      const isAuthenticated = !!localStorage.getItem(Config.KEY_ACCESS_TOKEN);
      if(isAuthenticated) {
        this.router.navigateByUrl('/home');
        return false;
      }

      return true;
    } catch (e) {
      this.router.navigateByUrl('/home');
    }

  }
}