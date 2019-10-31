import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'info-detail',
  templateUrl: './info-detail.component.html',
})
export class InfoDetailComponent implements OnInit {
  @Input() customerSlug: string;
  public customerData: any;
  showDetailFlag: boolean;
  // customerSlug: string = ""; // slug instance variable of InfoComponent
  customers = {
    'ux-trendz': [
      { f_name: "Anup", l_name: "Kumar", company: 'UXTrendz', cat: 'a' },
      { f_name: "Mumtaz", l_name: "Ahmad", company: 'UI Dev', cat: 'a' }
    ],
    'michael-platini': [
      { f_name: "Michael", l_name: "Platini", company: 'Czecha', cat: 'a' },
      { f_name: "Himanshu", l_name: "Das", company: 'Bac Dev', cat: 'b' }
    ],
    'louis-figo': [
      { f_name: "Louis", l_name: "Figo", company: 'Reala Madrida', cat: 'b' },
      { f_name: "Abhishek", l_name: "Kumar", company: 'Dev', cat: 'a' }
    ],
    'cristiana-ronaldinho': [
      { f_name: "Cristiana", l_name: "Ronaldinho", company: 'Portugalia', cat: 'a' },
      { f_name: "Santa", l_name: "Das", company: 'UI Dev', cat: 'a' }
    ],
    'leonardo-messiah': [
      { f_name: "Leonardo", l_name: "Messiah", company: 'Barceloja', cat: 'a' },
      { f_name: "Kanta", l_name: "Mishra", company: 'UI Dev', cat: 'a' }
    ]
  }

  constructor() {
  }
  ngOnInit() {
    //this.showDetailFlag = false;
    this.showDetails('ux-trendz');
  }
  ngOnChanges(changes: SimpleChanges) {
    this.showDetails(changes.customerSlug.currentValue);
  }
  public showDetails(slug) {
    console.log('sss : ', slug)
    this.showDetailFlag = true;
    this.customerData = this.customers[slug];
  }
}
