import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-wijmo-component',
  templateUrl: './wijmo-component.component.html',
  styleUrls: ['./wijmo-component.component.scss']
})
export class WijmoComponentComponent implements OnInit {
  users = [];

  constructor(private service: UsersService) {
    this.users = [
      {
        id: 1,
        name: 'Test'
      },
      {
        id: 2,
        name: 'Test 2'
      },
      {
        id: 3,
        name: 'Test 3'
      }
    ]
   }

  ngOnInit() {
  }

}
