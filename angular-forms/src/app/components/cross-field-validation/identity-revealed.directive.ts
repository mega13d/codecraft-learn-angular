/** A hero's name can't match the hero's alter ego */
import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('password');
  const confirmPass = control.get('confirmPassword');
  return pass && confirmPass && pass.value !== confirmPass.value ? { noMatch: true } : null;
};
