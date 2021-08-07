import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  
  private readonly initialValue: string = 'russ.c@eplan.de';
  // readonly emailControl: FormControl = new FormControl(this.initialValue);
  readonly emailForm = new FormGroup({
    email: new FormControl(this.initialValue)
  });

  constructor() {
    this.emailForm.get('email').valueChanges.subscribe((value: string) => console.log('#01', value));
   }

  ngOnInit(): void {
  }

  onInit(): void {
    this.emailForm.get('email').setValue(this.initialValue);
  }

  onSubmit(): void {
    console.log('#02', {form: this.emailForm.value});
  }
}
