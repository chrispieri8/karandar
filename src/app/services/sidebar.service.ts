import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  readonly isHovered = signal(false);

  hover() {
    this.isHovered.set(true);
  }

  unhover() {
    this.isHovered.set(false);
  }
}
