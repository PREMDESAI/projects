import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environment.dev';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private authService: AuthService) {}
  isAuthorized(id: string) {
    if (this.authService.getUser()?._id == id) {
      return true;
    } else {
      return false;
    }
  }
  updateProfile(id: string, token: string, username: string, email: string) {
    return fetch(`${this.apiUrl}/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username, email }),
    });
  }
  updatePassword(id: string, token: string, oldPassword: string,newPassword: string) {
    return fetch(`${this.apiUrl}/api/users/${id}/update-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ oldPassword, newPassword}),
    });
  }
}
