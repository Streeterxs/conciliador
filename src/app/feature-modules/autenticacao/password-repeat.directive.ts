import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordRepeatValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const passwordRepeat: string = control.get('passwordRepeat').value; // get password from our confirmPassword form control
    let passwordRepeatErrors = {
        ...control.get('passwordRepeat').errors
    }
    // compare is the password math
    if (password !== passwordRepeat) {
        // if they don't match, set an error in our confirmPassword form control
        control.get('passwordRepeat').setErrors({ noPassswordMatch: true });
    } else {
        delete passwordRepeatErrors.noPassswordMatch;
        if ( Object.keys(passwordRepeatErrors).length > 0)
            control.get('passwordRepeat').setErrors({ ...passwordRepeatErrors });
        else {
            control.get('passwordRepeat').setErrors(null);
        }
      }
    return null
  }
