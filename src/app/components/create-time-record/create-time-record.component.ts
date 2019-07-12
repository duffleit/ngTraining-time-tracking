import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimeRecord } from '../../models/time-record.model';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { hoursValidator } from './hours.validatorfn';

@Component({
  selector: 'app-create-time-record',
  templateUrl: './create-time-record.component.html',
  styleUrls: ['./create-time-record.component.scss']
})
export class CreateTimeRecordComponent implements OnInit {
  @Output()
  public create: EventEmitter<TimeRecord> = new EventEmitter<TimeRecord>();
  public form: FormGroup;

  public ngOnInit(): void {
    this.form = new FormGroup({
      hours: new FormControl('', [Validators.required, hoursValidator()]),
      description: new FormControl('', [Validators.required, Validators.maxLength(120)]),
    }, [CreateTimeRecordComponent.formValidator]);

    this.form.valueChanges.subscribe(values => {
      console.log(values);
    });
  }

  public get hours(): FormControl {
    return this.form.controls['hours'] as FormControl;
  }

  public get description(): FormControl {
    return this.form.controls['description'] as FormControl;
  }

  private static get formValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const formGroup = control as FormGroup;
      const hoursControl = formGroup.controls['hours'];
      const descriptionControl = formGroup.controls['description'];

      if (hoursControl.pristine && hoursControl.invalid && descriptionControl.pristine) { return {}; }

      const descriptionLength = descriptionControl.value
        ? (descriptionControl.value as string).length : 0;

      const minutes = CreateTimeRecordComponent.getMinutes(hoursControl.value);

      return minutes > 10 && descriptionLength < 10
        ? { descriptionMinutesError: true } : {};
    }
  }

  public static getMinutes(hoursString: string): number {
    if (!hoursString) { return 0; }

    const splittedHours = hoursString.split(':');
    const hours = parseInt(splittedHours[0], 10);
    return hours * 60 + parseInt(splittedHours[1], 10);
  }


  public clickedButton(): void {
    /*
    const splittedHours = this.hours.split(':');
    const hours = parseInt(splittedHours[0], 10);
    const minutes = hours * 60 + parseInt(splittedHours[1], 10);

    const newTimeRecord = { description: this.description, minutes };
    this.create.emit(newTimeRecord);
    */
  }
}
