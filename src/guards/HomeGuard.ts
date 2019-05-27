import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Config } from 'src/constants/Config';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async canActivate() {
    try {
      const isAuthenticated = !!localStorage.getItem(Config.KEY_ACCESS_TOKEN);

      if (!isAuthenticated) {
        this.router.navigateByUrl('/auth/signin');
        return false;
      }

      return true;
    } catch (e) {
      this.router.navigateByUrl('/auth/signin');
    }

  }
}