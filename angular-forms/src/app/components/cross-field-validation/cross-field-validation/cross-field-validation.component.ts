import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {identityRevealedValidator} from '../identity-revealed.directive';

@Component({
  selector: 'app-cross-field-validation',
  templateUrl: './cross-field-validation.component.html',
  styleUrls: ['./cross-field-validation.component.css']
})
export class CrossFieldValidationComponent implements OnInit {
  password = new FormControl();
  confirmPassword = new FormControl();
  heroForm = new FormGroup({
    password: this.password,
    confirmPassword: this.confirmPassword,
  }, { validators: identityRevealedValidator });

  constructor() { }

  ngOnInit() {
  }

}
