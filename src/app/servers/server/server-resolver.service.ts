import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';
import { server } from './server.model';

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<server> {
  constructor(private serviceService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<server> | Promise<server> | server {
    var data= this.serviceService.getServer(+route.params['id']);
    console.log(data);
    return data;

    // return new Promise((resolveData, reject) => {
    //   return resolveData( this.serviceService.getServer(+route.params['id']));
    // });
  }
}
