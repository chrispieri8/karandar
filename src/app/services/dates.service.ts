import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDate } from '../models/date.model';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatesService {
  constructor(private http: HttpClient) {}

  readonly dates = this.getDates().pipe(shareReplay(1));

  createDate(date: IDate): Observable<void> {
    return this.http.post<void>('http://localhost:3000/date', date);
  }

  getDates(): Observable<IDate[]> {
    return this.http.get<IDate[]>('http://localhost:3000/dates');
  }
}
