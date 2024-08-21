import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}
  getUserName(): string | undefined {
    return this.authService.getUser()?.username;
  }
  getID(): string | undefined {
    return this.authService.getUser()?.id;
  }
  logout(): void {
    this.authService.logout();
  }
  isAuthorized(): boolean {
    return this.authService.isAuthenticated();
  }
}
