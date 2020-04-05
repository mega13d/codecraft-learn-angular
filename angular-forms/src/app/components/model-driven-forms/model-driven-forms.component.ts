import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(`Form Submitted!`);
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }

  private createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("c-[A-Za-z]+@[a-z.]+"),
      this.emailDomainValidator
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
  }

  private createForm() {
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  private emailDomainValidator(control: FormControl) {
    const emailValue = control.value;
    if (emailValue && emailValue.indexOf("@") !== -1) {
      const [_, domain] = emailValue.split("@");
      if (domain !== "edifecs.com") {
        return {
          emailDomain: {
            parsedDomain: domain
          }
        };
      }
    }
    return null;
  }
}
