import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOption } from './interfaces/dropdown-option.interface';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() selectedValue: any = null;
  @Output() selectedValueChange = new EventEmitter<any>();

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onToggle(details: HTMLDetailsElement) {
    this.isOpen = details.open;
  }

  onSummaryClick(e: Event) {
    e.stopPropagation();
  }

  selectOption(option: DropdownOption, details: HTMLDetailsElement) {
    if (option.disabled) return;

    this.selectedValue = option.value;
    this.selectedValueChange.emit(option.value);
    this.isOpen = false;
    details.open = false;
  }

  get selectedLabel(): string {
    const selectedOption = this.options.find(
      (opt) => opt.value === this.selectedValue
    );
    return selectedOption ? selectedOption.label : this.placeholder;
  }
}
