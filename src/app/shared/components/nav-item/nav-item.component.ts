import { Component, Input } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

interface NavItem {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements NavItem {
  @Input() icon: string;
  @Input() title: string;
  isHovered = this.sidebarService.isHovered;

  constructor(private sidebarService: SidebarService) {}
}
