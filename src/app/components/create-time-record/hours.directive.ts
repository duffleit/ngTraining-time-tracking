import { Directive, Inject } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, FormControl, FormGroup } from '@angular/forms';

@Directive({
    selector: 'input[hours]',
    providers: [
        { provide: NG_VALIDATORS, useClass: HoursDirective, multi: true }
    ]
})
export class HoursDirective implements Validator {
    public validate(control: AbstractControl): ValidationErrors {
        return (/^[0-9]{2}:[0-5]{1}[0-9]{1}$/.test(control.value))
            ? {}
            : { hours: true };

    }
}