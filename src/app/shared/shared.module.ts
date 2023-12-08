import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { RippleDirective } from './directives/ripple.directive';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CalendarComponent,
    SidebarComponent,
    NavItemComponent,
    RippleDirective,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    ConfirmPopupModule,
    MenuModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    CalendarComponent,
    SidebarComponent,
    NavItemComponent,
    RippleDirective,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
    CardModule,
    ConfirmPopupModule,
    MenuModule,
  ],
})
export class SharedModule {}
