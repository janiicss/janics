import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {

  users = [
    {name: 'Melboy', age:22, position: 'backend'},
    {name: 'Janica', age:22, position: 'frontend'},
    {name: 'Ceddie', age:22, position: 'master'}
  ]

  
}
