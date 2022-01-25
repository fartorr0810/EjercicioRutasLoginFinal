import { Component, OnInit } from '@angular/core';
import { ServerI } from '../interfaces/server.interface';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {
  server!: ServerI;

  constructor(private serversService: ServersService, private route: ActivatedRoute,
    private router:Router) {

    }

    ngOnInit() {
      this.route.data.subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      )

    }

    onEdit(){
      this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

    }
}
