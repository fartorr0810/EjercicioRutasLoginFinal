
import { Component, OnInit } from '@angular/core';
import { UserI } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  public users: UserI[] = [];

  constructor(private userService:UsersService) {

  }
  ngOnInit(): void {

    this.userService.getUsers().subscribe(resp =>{
      this.users=resp;
    });

  }


}
