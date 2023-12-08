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
    return this.http.post<void>('https://karandar.deno.dev/date', date);
  }

  getDates(): Observable<IDate[]> {
    return this.http.get<IDate[]>('https://karandar.deno.dev/dates');
  }
}
