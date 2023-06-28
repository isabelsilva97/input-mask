import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-mask';

  /**
   * Date input
   */
  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    },
  });

  dateFC = new FormControl('');

  /**
   * Currency input
   */
  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
  });
  currencyFC = new FormControl('');

  /**
   * License Plate input
   */
  licenseInputMask = createMask('[9-]AAA-999');
  licenseFC = new FormControl('');

  /**
   * Email input
   */
  emailInputMask = createMask({ alias: 'email' });
  emailFC = new FormControl('');

  /**
   * Custom input
   */
  customComponentInputMask = createMask('0000-0000-0000-0000-0000-0');
  customFC = new FormControl('');
}
