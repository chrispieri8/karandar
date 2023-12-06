import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { RippleDirective } from './directives/ripple.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CalendarComponent,
    SidebarComponent,
    NavItemComponent,
    RippleDirective,
  ],
  imports: [CommonModule],
  exports: [ButtonComponent, InputComponent, CalendarComponent, SidebarComponent, NavItemComponent, RippleDirective],
})
export class SharedModule {}
