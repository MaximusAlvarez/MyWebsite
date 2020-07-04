import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ProjectInfoComponent } from '../project-info/project-info.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {
  }

  openProject(name: string) {
    this._bottomSheet.open(ProjectInfoComponent, {
      data: { projectName: name },
      panelClass: 'bottomSheet'
    });
  }

  ngOnInit(): void {
    AOS.init();
  }

}
