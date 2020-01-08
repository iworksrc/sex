import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LocalStorageService} from '@shared/services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.localStorageService.getAuthToken();

    if(token) {
      //todo /* здесь нужна проверка валидности токена */
      return true;
    } else {
      this.router.navigate(['auth', 'login']).catch(err => console.log(err));
      return false;
    }
  }
}
