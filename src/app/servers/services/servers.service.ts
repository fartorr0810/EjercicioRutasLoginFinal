
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/control-acceso/service/login.service';
import { ServerI } from '../interfaces/server.interface';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private baseUrl: string = environment.url;
  constructor(private http:HttpClient) { }

  getServers(){
    let token = JSON.parse(<string>localStorage.getItem('arl')).access_token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    const options = {
      headers: headers
    }

    const url = environment.url+"/servers";
    return this.http.get<ServerI[]>(url,options);
  }
}
