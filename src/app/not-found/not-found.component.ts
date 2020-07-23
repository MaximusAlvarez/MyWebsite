import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) {
    this.checkIfBlog();
  }

  blog: boolean;
  faWarning = faExclamationTriangle;
  faNewsPaper = faNewspaper;

  checkIfBlog() {
    const urlSplit = this.router.url.split('/');
    this.blog = urlSplit[1] === 'blog';
  }

  ngOnInit(): void {
  }

}
