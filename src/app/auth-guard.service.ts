import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './control-acceso/service/login.service';
import { Token } from '@angular/compiler/src/ml_parser/tokens';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private baseUrl: string = environment.url;
  private estado:boolean = false;

  constructor(private loginService:LoginService, private router: Router, private http:HttpClient) {}



  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loginService.getToken() != null){
      let token:Token = this.loginService.getToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      const options = {
        headers: headers
      }
      const url = `${this.baseUrl}/tokenCheck`;
      this.http.get(url,options).subscribe(data =>{
        this.estado = true;
      }, err => {
        console.log(err.message);
        this.estado = false;
      });
      return this.estado;
    }else{
      this.router.navigate(['']);
      return this.estado;
    }

  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return this.canActivate(route, state);
  }
}
