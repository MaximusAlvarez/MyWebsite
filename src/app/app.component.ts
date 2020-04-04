import { Component, HostListener, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({transform: "scale(0)"}),
        animate(300, style({transform: "scale(1)"})) 
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'my-website';
  innerWidth: number;
  tech: boolean = false;
  work: boolean = false;
  edu: boolean = false;

  mouseenter($event){
    if($event.path[0].innerText === "--- Nikhil Rajesh ---")
      $event.path[0].innerText = "--- Batman ---"
    else 
      $event.path[0].innerText = "Shhhh!!"
  }
  mouseleave($event){
    if($event.path[0].innerText === "--- Batman ---")
      $event.path[0].innerText = "--- Nikhil Rajesh ---"
    else 
      $event.path[0].innerText = "Student + Developer"
  }

  @HostListener("window:resize", ['$event'])
  private onResize(event) {
    this.detectScreenSize();
  }
  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
}
