import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebarVisible = false;

  constructor(private sidebarService: SidebarService) {}

  visibleChange(value: boolean) {
    if (value) {
      this.sidebarService.hover();
    } else {
      this.sidebarService.unhover();
    }
  }
}
