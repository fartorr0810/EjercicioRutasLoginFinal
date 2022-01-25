
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../control-acceso/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private servicioLogin:LoginService) { }

  ngOnInit(): void {
  }

  onlogin() {
    this.router.navigateByUrl('login');
  }

  onlogout() {
    this.servicioLogin.logout();
  }

  onLoadServer(id:number) {
    this.router.navigate(['/servers',id,'edit'],
    { queryParams: { allowEdit: '8' }, fragment: 'loading' });
  }



}
