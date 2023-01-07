import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  isAllowEdit: boolean;

  constructor(private serversService: ServersService
    , private router: Router
    , private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.route.queryParams.subscribe((Param) => {
      debugger
      this.isAllowEdit = Param['allowEdit'] === '1';
      if (this.isAllowEdit) {
      }
      else {
        this.isAllowEdit = false;
      }

    });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route ,queryParamsHandling:'merge'})
  }
}
