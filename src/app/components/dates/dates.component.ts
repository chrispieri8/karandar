import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDate } from 'src/app/models/date.model';
import { DatesService } from 'src/app/services/dates.service';

interface DateForm {
  title: FormControl<string | null>;
  description: FormControl<string>;
  date: FormControl<string>;
}

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent {
  showModal = false;
  dates: Observable<IDate[]> = this.dateService.dates;

  form = new FormGroup<DateForm>({
    title: new FormControl<string | null>(null),
    description: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    date: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
  });

  constructor(private dateService: DatesService) {}

  openModal() {
    this.showModal = true;
    this.form.reset();
  }

  submit() {
    if (this.form.invalid) return;
    console.log(this.form.getRawValue());
    this.dateService.createDate(this.form.getRawValue()).subscribe((res) => {
      console.log(res);
    });
    this.showModal = false;
  }
}
