import { Injectable } from '@angular/core';
import { environment } from '../../../environment.dev';
import { User } from '../types/user.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  private user: User | null = this.getUserFromLocalStorage();
  constructor(private router: Router) {}

  getUser() {
    return this.user;
  }

  private getUserFromLocalStorage() {
    if (typeof localStorage === 'undefined') {
      return null;
    } else {
      const id = localStorage.getItem('id');
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('name');
      if (id && token && username) {
        return { id, token, username };
      } else {
        return null;
      }
    }
  }

  isAuthenticated() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }

  login(data: { email: string; password: string }) {
    fetch(`${this.apiUrl}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          if (data.data.token && data.data._id && data.data.username) {
            if (localStorage === undefined) {
              return;
            } else {
              localStorage.setItem('id', data.data._id);
              localStorage.setItem('token', data.data.token);
              localStorage.setItem('name', data.data.username);
              this.user = data.data;
              alert(data.message);
              this.router.navigate(['/']);
            }
          }
        } else {
          alert(data.message);
        }
      });
  }
  signup(data: { username: string; email: string; password: string }) {
    fetch(`${this.apiUrl}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          this.router.navigate(['/login']);
        } else {
          alert(data.message);
        }
      });
  }

  getUserById(id: string) {
    return fetch(`${this.apiUrl}/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${this.user?.token}`,
      },
    });
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.user = null;
    alert('Logged out successfully');
  }
}
