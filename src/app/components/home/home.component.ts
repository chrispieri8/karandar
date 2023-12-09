import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, FullCalendarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: '100%',
    plugins: [dayGridPlugin],
  };
}
