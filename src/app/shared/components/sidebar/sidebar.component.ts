import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  enter() {
    this.sidebarService.hover();
  }

  leave() {
    this.sidebarService.unhover();
  }
}
