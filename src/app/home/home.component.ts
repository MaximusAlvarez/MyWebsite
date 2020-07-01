import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
    this.onResize();
  }

  smallScreen = true;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.smallScreen = window.innerWidth <= 800 ? true : false;
  }

  ngOnInit(): void {
  }

}
