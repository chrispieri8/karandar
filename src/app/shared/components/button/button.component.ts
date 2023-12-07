import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Button {
  label: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements Button {
  @Input() label: string;
  @Input() disabled = false;
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
