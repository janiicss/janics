import { Component } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html'
})

export class AdduserComponent {

    roles = ["Admin", "User", "HR"];

    onClickSubmit(data:any) {
        alert("Name: " + data.firstName + " " + data.lastName + ", Email Address: " + data.emailAdd + ", Role: " + data.userRole );
     }


}