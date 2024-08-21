import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}
  addComment(quoteId: string, comment: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(
      `${this.apiUrl}/api/comments/${quoteId}`,
      { content: comment },
      { headers }
    );
  }
  getComments(quoteId: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/api/comments/${quoteId}`, { headers });
  }
  deleteComment(commentId: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/api/comments/${commentId}`, {
      headers,
    });
  }
}
