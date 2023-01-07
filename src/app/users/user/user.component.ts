import { Component, OnInit, DoCheck, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
  user: { id: number, name: string };
  paramsSubScriptions: Subscription
  constructor(private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
    this.paramsSubScriptions = this.route.params.subscribe((user) => {
      this.user = {
        id: user['id'],
        name: user['name']
      }
    })
  }
  ngOnChanges() {

  }

  ngDoCheck(): void {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubScriptions.unsubscribe();
  }


}
