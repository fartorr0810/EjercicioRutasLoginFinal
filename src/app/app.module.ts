import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersModule } from './servers/servers.module';
import { UsersModule } from './users/users.module';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { ServersService } from './servers/services/servers.service';
import { PaginadeerrorComponent } from './paginadeerror/paginadeerror.component';
import { ControlAccesoModule } from './control-acceso/control-acceso.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component'
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginadeerrorComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ServersModule,
    ControlAccesoModule,
    HttpClientModule
  ],
  providers: [ServersService,AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

