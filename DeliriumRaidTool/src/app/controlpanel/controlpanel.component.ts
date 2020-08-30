import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ControlpanelComponent implements OnInit {

  selectedSite: string;

  constructor() { }

  ngOnInit(): void {
    console.log(location.pathname);
    this.selectedSite = location.pathname;
  }

  getLocation(): string {
    return location.pathname;
  }

}
