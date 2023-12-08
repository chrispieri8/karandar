import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { IDate } from 'src/app/models/date.model';
import { DatesService } from 'src/app/services/dates.service';

interface DateForm {
  title: FormControl<string | null>;
  description: FormControl<string>;
  date: FormControl<Date>;
}

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent {
  showModal = false;
  isEdit = false;
  editId = '';
  dates: Observable<IDate[]> = this.dateService.dates;

  form = new FormGroup<DateForm>({
    title: new FormControl(null),
    description: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    date: new FormControl(new Date(), { validators: [Validators.required], nonNullable: true }),
  });

  constructor(private dateService: DatesService, private confirmationService: ConfirmationService) {}

  openModal() {
    this.showModal = true;
    this.form.reset();
    this.isEdit = false;
  }

  edit(date: IDate) {
    this.form.patchValue(date);
    this.editId = date._id;
    this.form.controls.date.patchValue(new Date(date.date));
    this.showModal = true;
    this.isEdit = true;
  }

  submit() {
    if (this.form.invalid) return;

    if (this.isEdit) {
      this.updateDate();
    } else {
      this.createDate();
    }

    this.showModal = false;
  }

  createDate() {
    this.dateService.createDate(this.form.getRawValue()).subscribe((res) => {
      console.log(res);
    });
  }

  updateDate() {
    this.dateService.updateDate(this.form.getRawValue(), this.editId).subscribe((res) => {
      console.log(res);
    });
  }

  deleteDate(event: Event, date: IDate) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dateService.deleteDate(date._id).subscribe((res) => {
          console.log(res);
        });
      },
      reject: () => {
        // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      },
    });
  }
}
