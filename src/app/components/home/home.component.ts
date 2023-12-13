import { Component, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarApi, CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import { DatesService } from 'src/app/services/dates.service';
import { Observable, find, map } from 'rxjs';
import interactionPlugin from '@fullcalendar/interaction';
import { IDate } from 'src/app/models/date.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, FullCalendarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  sidebarVisible = false;
  calendarApi: CalendarApi;
  calendarOptions: CalendarOptions = {
    initialView: 'multiMonthYear',
    height: '100%',
    plugins: [dayGridPlugin, multiMonthPlugin, interactionPlugin],
    multiMonthMaxColumns: 1, // force a single column
    headerToolbar: false,
    businessHours: true,
    eventColor: 'rgb(59, 130, 246)',
    multiMonthTitleFormat: { month: 'long', year: 'numeric' },
    // dateClick: this.clickEvent.bind(this),
    eventClick: this.clickEvent.bind(this),
    viewDidMount: this.viewDidMount.bind(this),
  };

  dates = this.dateService.getDates();
  selectedDate: Observable<IDate | undefined>;
  events: Observable<EventInput> = this.dates.pipe(
    map((dates) => {
      return dates.map((date) => ({
        id: date._id,
        start: new Date(date.date),
        title: date.title,
        allDay: true,
      }));
    }),
  );

  constructor(private dateService: DatesService) {}

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  clickEvent(clickE: EventClickArg) {
    this.selectedDate = this.dates.pipe(map((dates) => dates.find((e) => e._id === clickE.event.id)));
    this.sidebarVisible = true;
  }

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
