import { Component, OnInit } from '@angular/core';
import { ServerI } from '../interfaces/server.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate-guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styles: [
  ]
})
export class EditServerComponent implements OnInit {

  server!: ServerI;
  serverName = '';
  serverStatus = '';

  changesSaved = false;

  allowEdit = false;

  constructor(private route: ActivatedRoute,
    private router:Router) { }


  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to exit without saving your changes?');
    } else {
      return true;
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );

    this.route.fragment.subscribe();

    //this.server = this.serversService.getServer(3);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
