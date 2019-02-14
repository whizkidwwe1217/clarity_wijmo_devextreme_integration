import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any[] = [];

  constructor() {

    for(let i = 0; i < 150; i++) {
      this.users.push({
        id: i,
        name: `Users - ${i.toString()}`,
        creation: new Date(),
        color: 'red'
      });
    }
   }
}
