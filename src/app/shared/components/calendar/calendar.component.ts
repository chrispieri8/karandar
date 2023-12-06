import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  days: number[];
  month: string;
  year: number;
  selectedDate: Date;

  constructor() {}

  ngOnInit(): void {
    this.days = [1, 2, 3, 4, 5, 6, 7];
    this.month = 'January';
    this.year = 2023;
    // this.selectedDate = null;
  }

  prevMonth(): void {
    const date = new Date(this.year, this.getMonthIndex(this.month) - 1, 1);
    date.setMonth(date.getMonth() - 1);
    this.month = this.getMonthName(date.getMonth());
    this.year = date.getFullYear();
  }

  nextMonth(): void {
    const date = new Date(this.year, this.getMonthIndex(this.month) - 1, 1);
    date.setMonth(date.getMonth() + 1);
    this.month = this.getMonthName(date.getMonth());
    this.year = date.getFullYear();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  private getMonthIndex(monthName: string): number {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months.indexOf(monthName);
  }

  private getMonthName(monthIndex: number): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthIndex];
  }
}
