import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-internal-left-nav-bar',
  templateUrl: './internal-left-nav-bar.component.html',
  styleUrls: ['./internal-left-nav-bar.component.css']
})
export class InternalLeftNavBarComponent implements OnInit {
  @Output() flag = new EventEmitter<boolean>();
  flags: any;
  constructor() { }

  ngOnInit() {
    this.flags = { mainBarPoSelected: false, mainBarPoFormSelected: false, mainBarFinanceSelected: false}
    this.flag.emit(this.flags);
  }

  mainBarPo() {
    this.flags.mainBarPoSelected = !this.flags.mainBarPoSelected;
    this.flag.emit(this.flags);
  }
}
