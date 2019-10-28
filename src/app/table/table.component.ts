import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'customer-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Output() eventClicked = new EventEmitter<string>();

  selectedSlug: string = "";
  constructor() { }
  customers = [
    { name: "Anup", slug: 'ux-trendz', cat:'a'},
    { name: "Michael", slug: 'michael-platini', cat:'b'},
    { name: "Louis", slug: 'louis-figo', cat:'c'},
    { name: "Cristiana", slug: 'cristiana-ronaldinho', cat:'b'},
    { name: "Leonardo", slug: 'leonardo-messiah', cat:'gp-1'}  
  ]

  setSlug(slug) {
    console.log('slug :::::: ', slug)
    this.selectedSlug = slug;
    this.eventClicked.emit(this.selectedSlug);
  }

  getSlug() {
    // slug getter function 
    // return "random string";
  }
}
