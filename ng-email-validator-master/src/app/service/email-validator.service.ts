import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService {
  private httpClient = inject(HttpClient);

  emailValidator(emailAddress: string) {
    const headers = new HttpHeaders().set(
      'apikey',
      `${environment.apiLayerKey}`
    );

    return this.httpClient.get(
      `${environment.apiLayerUrl}/email_verification/check?email=${emailAddress}`,
      {
        headers,
      }
    );
  }
}
