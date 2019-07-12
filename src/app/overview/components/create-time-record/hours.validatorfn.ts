import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const hoursValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors => {
        return (/^[0-9]{2}:[0-5]{1}[0-9]{1}$/.test(control.value))
            ? {}
            : { hours: true };

    }
}