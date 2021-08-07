import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  constructor(private readonly http: HttpClient) {  }

  validateEmail(emailForm: {email: string}): Observable<unknown> {
    return this.http.post<string>(' http://localhost:7071/api/message', emailForm).pipe(
      map(s => {
        console.log('#04#', s);
        return s;
      })
    )
  }
}
