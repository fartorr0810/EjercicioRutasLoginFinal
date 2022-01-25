import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RouterModule } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { AuthGuard } from '../auth-guard.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServerComponent,
    ServersComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ServerComponent,
    ServersComponent
  ],providers:[AuthGuard]
})
export class ServersModule { }
