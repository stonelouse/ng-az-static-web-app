import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  constructor(private readonly http: HttpClient) {  }

  validateEmail(emailForm: {email: string}): Observable<boolean> {
    const host: string = `${environment.apiHost}api/emailvalidation`;
    console.log('#05#', {host});
    return this.http.post<{valid: boolean}>(host, emailForm).pipe(
      map((resp: {valid: boolean}) => {
        console.log('#04#', resp);
        return resp.valid;
      })
    )
  }
}
