import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-clarity-grid',
  templateUrl: './clarity-grid.component.html',
  styleUrls: ['./clarity-grid.component.scss']
})
export class ClarityGridComponent implements OnInit {

  users = [];
  currentPage: number = 1;
  pageSize: number = 100;
  
  constructor(private service: UsersService) {
    this.users = service.users;
  }

  ngOnInit() {
  }

}
