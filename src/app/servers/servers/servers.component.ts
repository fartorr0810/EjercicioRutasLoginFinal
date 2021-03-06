import { Component, OnInit } from '@angular/core';
import { ServerI } from '../interfaces/server.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {
  public servers: ServerI[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute,
    private serverService:ServersService) { }

  ngOnInit(): void {
    this.serverService.getServers().subscribe(resp =>{
      this.servers=resp;
    })
  }

  onReload() {
    this.router.navigate(['servers']), { relativeTo: this.route };
  }

}
