import { Component, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarApi, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, FullCalendarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  calendarApi: CalendarApi;
  calendarOptions: CalendarOptions = {
    initialView: 'multiMonthYear',
    height: '100%',
    plugins: [dayGridPlugin, multiMonthPlugin],
    multiMonthMaxColumns: 1, // force a single column
    headerToolbar: {
      end: 'today prevYear,prev,next,nextYear',
    },
  };

  // references the #calendar in the template
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  switchView() {
    this.calendarComponent.getApi().changeView('dayGridMonth');
    // console.log(this.calendarApi);
  }
}
