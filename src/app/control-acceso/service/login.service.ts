import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Token } from "@angular/compiler/src/ml_parser/tokens";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.url;

  constructor(private http: HttpClient) {

  }
  login(email:string ,password:string){
    const url = this.baseUrl+"/auth/login";
    const body = {
      "email": email,
      "password": password
    }
    return this.http.post<Token>(url, body);
  }

  getToken(){
    return JSON.parse(<string>localStorage.getItem("arl"));
  }
  logout(){
    localStorage.removeItem("arl");
  }

}




