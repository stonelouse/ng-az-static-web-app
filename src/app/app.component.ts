import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: `<div>{{value}}</div>`,
})
export class AppComponent {
  value = 'World';

  constructor(private readonly http: HttpClient) {
    this.http.get('api/message?name=ng').subscribe((resp: any) => {
      console.log('#01', {resp});
      return this.value = resp.text;
    });
  }
}
