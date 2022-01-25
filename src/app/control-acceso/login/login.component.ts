import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  email!:string;
  password!:string;
  constructor(private router:Router,private serviciologin:LoginService) { }

  ngOnInit(): void {
  }
  login(){
    this.serviciologin.login(this.email,this.password).subscribe(data=>{
      localStorage.setItem("arl",JSON.stringify(data));
      this.router.navigateByUrl('servers');
    },wrog=>{
      Swal.fire({
      icon: 'error',
      title: 'Fallo de logueo',
      text: 'Usuario o password incorrecto',
      confirmButtonText:'Salir'
      })
    });
  }
}
