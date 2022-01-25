import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserI} from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string = environment.url;
  constructor(private http:HttpClient) { }

  getUsers(){
    let token = JSON.parse(<string>localStorage.getItem('arl')).access_token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    const options = {
      headers: headers
    }
    const url = environment.url+"/users";
    return this.http.get<UserI[]>(url,options);
  }
}
