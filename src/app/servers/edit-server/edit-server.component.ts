import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  QuerySubscription: Subscription
  serverId!: number | null;
  isAllowEdit = false;
  changesSaved = false;
  constructor(private serversService: ServersService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    let serverId = this.route.snapshot.params['id']
    this.serverId = Number.parseInt(serverId);
    if (Number.isNaN(this.serverId)) {
      console.log(this.route.snapshot.queryParams, this.serverId); this.serverId = 1
    }
    this.route.queryParams.subscribe((Param) => {
      this.isAllowEdit = Param['allowEdit'] === '1';
      if (this.isAllowEdit) {
        this.loadServer();
      }
      else {
        alert("Not allowed to Edit")
      }

    });

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

  LoadServer3() {
    this.router.navigate(['/servers', 3, 'edit'], { queryParams: { allowEdit: 3 }, fragment: 'loading' })

  }
  loadServer() {
    this.server = this.serversService.getServer(this.serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

  }

}
