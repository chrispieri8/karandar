import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDate, IDateFormData } from '../models/date.model';
import { BehaviorSubject, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatesService {
  constructor(private http: HttpClient) {}
  private loadDates = new BehaviorSubject<boolean>(true);
  readonly dates = this.loadDates.pipe(
    switchMap(() => this.getDates()),
    shareReplay(1),
  );

  getDates(): Observable<IDate[]> {
    return this.http.get<IDate[]>(`${environment.apiUrl}/dates`);
  }

  createDate(date: IDateFormData): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/date`, date).pipe(tap(() => this.loadDates.next(true)));
  }

  updateDate(date: IDateFormData, id: string): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/date/${id}`, date).pipe(tap(() => this.loadDates.next(true)));
  }

  deleteDate(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/date/${id}`).pipe(tap(() => this.loadDates.next(true)));
  }
}
