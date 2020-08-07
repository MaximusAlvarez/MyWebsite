import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService) {
    this.onResize();
  }

  isDarkTheme: Observable<boolean>;
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
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
