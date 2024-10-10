import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AirTableService {
  private httpClient = inject(HttpClient);
  email = signal('');

  saveEmail() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', `Bearer ${environment.airtTableAccessToken}`);
    console.log(this.email());

    const payload = {
      fields: { Email: this.email() },
    };

    return this.httpClient.post(
      `${environment.airTableBaseUrl}/appNY20zEn6CT3roK/email_storage`,
      payload,
      { headers: headers }
    );
  }

  emailValue(mail: string) {
    this.email.set(mail);
  }
}
