import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

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

  scrollToElement(): void {
    const element = document.querySelector('#about');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  ngOnInit(): void {
    AOS.init();
  }

}
