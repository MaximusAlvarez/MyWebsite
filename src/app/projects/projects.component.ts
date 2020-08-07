import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProjectInfoComponent } from '../project-info/project-info.component';
import {ThemeService} from '../services/theme.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private themeService: ThemeService, private bottomSheet: MatBottomSheet) {
  }

  isDarkTheme: Observable<boolean>;

  openProject(name: string) {
    this.bottomSheet.open(ProjectInfoComponent, {
      data: { projectName: name },
      panelClass: 'bottomSheet'
    });
  }

  ngOnInit(): void {
    AOS.init();
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

}
