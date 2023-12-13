import { Component, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { Calendar, CalendarApi, CalendarOptions } from '@fullcalendar/core';
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
    headerToolbar: false,
    businessHours: true,
    multiMonthTitleFormat: { month: 'long', year: 'numeric' },
    viewDidMount: this.viewDidMount.bind(this),
  };

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  viewDidMount() {
    this.calendarApi = this.calendarComponent.getApi();
  }

  prev() {
    this.calendarApi.prev();
  }

  next() {
    this.calendarApi.next();
  }

  today() {
    this.calendarApi.today();
  }
}
