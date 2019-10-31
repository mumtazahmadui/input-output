import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  count: number = 0;

  @Output() textInput = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  creatUser(usr) {
    if (usr.value) {
      this.count = this.count + 1;
      this.textInput.emit(usr.value);
    }
  }
  createAdmin(adm) {
    if (adm.value) {
      this.count = this.count + 1;
      this.textInput.emit(adm.value);
    }
  }

}
