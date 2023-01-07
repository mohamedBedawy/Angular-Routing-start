import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, DoCheck, OnChanges {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
    this.route.params.subscribe((user)=>{
      this.user={
        id:user['id'],
        name:user['name']
      }
    })
  }
  ngOnChanges() {

  }

  ngDoCheck(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
  }


}
