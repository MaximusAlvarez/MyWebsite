import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'my-website';
  innerWidth: number;

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
