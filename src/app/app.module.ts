import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { LowerCaseUrlSerializer } from './UrlCaseInsensitive/LowerCaseUrlSerializer';

const appRoutes:Routes=[
{path:'',component:HomeComponent},// localhost:4200/users
{path:'users',component:UsersComponent},
{path:'users/:id/:name',component:UserComponent}, //id with colon literally meaning id
{path:'servers',component:ServersComponent},
{path:'servers/:id/edit',component:EditServerComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [
    ServersService,
    {
      provide:UrlSerializer,
      useClass:LowerCaseUrlSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
