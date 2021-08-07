import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidationService } from './validation-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  
  private readonly initialValue: string = 'russ.c@eplan.de';

  readonly emailForm = new FormGroup({
    email: new FormControl(this.initialValue, Validators.required)
  });
  validationState: "init" | "valid" | "invalid" = "init";

  constructor(private readonly validation: EmailValidationService) {
    this.emailForm.get('email').valueChanges.subscribe((value: string) => console.log('#01', value));
   }

  ngOnInit(): void {
  }

  onInit(): void {
    this.emailForm.get('email').setValue(this.initialValue);
  }

  onSubmit(): void {
    console.log('#02', {form: this.emailForm.value});
    this.validation.validateEmail(this.emailForm.value).subscribe(
      (valid: boolean) => this.validationState = valid ? "valid" : "invalid"
    );
  }
}
