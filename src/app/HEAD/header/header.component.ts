import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  production = false;
  constructor(private aa: TestService) { }

  ngOnInit() {
  }
test() {
  this.aa.test();
}
}
