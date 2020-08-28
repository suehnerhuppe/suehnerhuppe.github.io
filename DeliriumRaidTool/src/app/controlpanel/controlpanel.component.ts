import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  selectedSite: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedSite = 'ENCOUNTERS';
  }

  onClick(site: string): void {
    this.selectedSite = site;
  }

}
