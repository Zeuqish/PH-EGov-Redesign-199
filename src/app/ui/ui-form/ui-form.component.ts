import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'ui-form',
  template: `
  <form name={{profileForm}} (ngSubmit)="onSubmit()">
    <h2 class="form-title">Form Title</h2>
    <!-- [formGroup] not working -->
    <div class="form-container">
    <div class = "label-input">
      <label for="firstName">First Name: </label>
      <input type="text" formControlName="firstName" id="firstName" placeholder="Enter your first name" required>
    </div>

    <div class = "label-input">
      <label for="lastName">Last Name: </label>
      <input type="text" formControlName="lastName" id="firstName" placeholder="Enter your last name" required>
    </div>

    <div formGroupName="address">
      <h5>Address</h5>

      <div class = "label-input">
        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street">
      </div>

      <div class = "label-input">
        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city">
      </div>

      <div class = "label-input">
        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state">
      </div>

      <div class = "label-input">
        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip">
      </div>
    </div>

    </div>
    <button type="submit" [disabled]="!profileForm.valid">Submit</button>
  </form>
  `,
  styleUrls: ['./ui-form.component.scss'],
})
export class UIFormComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  onSubmit(){
    console.warn(this.profileForm.value);
  }
  constructor(private fb: FormBuilder) { }
}
