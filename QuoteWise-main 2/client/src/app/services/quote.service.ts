import { Injectable } from '@angular/core';
import { environment } from '../../../environment.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  generateQuote(userPrompt: string, token: string): any {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(
      `${this.apiUrl}/api/quotes/generate`,
      { userPrompt: userPrompt },
      { headers }
    );
  }
  uploadQuote(quote: string, token: string, userPrompt: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(
      `${this.apiUrl}/api/quotes`,
      { content: quote, userPrompt: userPrompt },
      { headers }
    );
  }
  getAllQuotes() {
    return this.http.get(`${this.apiUrl}/api/quotes`);
  }
  likeQuote(quoteId: string, token: string) {
    // console.log('Liked Quote');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/api/quotes/${quoteId}/like`, {}, {headers});
  }
  addToFavorite(quoteId: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/api/quotes/${quoteId}/favorite`, {}, {headers});
  }
  getQuote(id: string) {
    return this.http.get(`${this.apiUrl}/api/quotes/${id}`);
  }
  deleteQuote(id: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/api/quotes/${id}`, { headers });
  }
}
