import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownOption } from './components/dropdown/interfaces/dropdown-option.interface';
import { CommonModule } from '@angular/common';
import { Dropdown } from './components/dropdown/dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Dropdown],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'estudy-components';
  dropdownOptions: DropdownOption[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3', disabled: true },
    { value: 4, label: 'Option 4' },
  ];

  selectedValue: any = null;

  onValueChange(value: any) {
    this.selectedValue = value;
  }
}
