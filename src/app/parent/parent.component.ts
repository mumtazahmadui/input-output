import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  users=[];
  admins=[];

  constructor() { }

  ngOnInit() {
    this.users = ['MM', 'aa'];
    this.admins = ['AAA', 'BBB'];
  }
  childUser(data) {
    this.users.splice(0, 0, data)
  }

  removeUser(usr){
    this.users.splice(usr, 1);
  }
  removeAdmins(usr){
    this.admins.splice(usr, 1);
  }

}
