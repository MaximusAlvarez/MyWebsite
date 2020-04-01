import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';
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
}
