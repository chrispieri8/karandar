import { Component, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarApi, CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import { DatesService } from 'src/app/services/dates.service';
import { Observable, map } from 'rxjs';

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

  events: Observable<EventInput> = this.dateService.getDates().pipe(
    map((dates) => {
      return dates.map((date) => ({
        start: new Date(date.date),
        title: date.title,
        allDay: true,
        backgroundColor: 'rgb(59, 130, 246)',
      }));
    }),
  );

  constructor(private dateService: DatesService) {}

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
