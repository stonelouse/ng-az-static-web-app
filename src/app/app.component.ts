import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `
  <h1>Email Validator</h1>
  <app-email></app-email>
  `,
})
export class AppComponent {
}
