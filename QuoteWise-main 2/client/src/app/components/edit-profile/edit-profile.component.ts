import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  username: string = '';
  email: string = '';
  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private userService: UserService,
    private navigation: Router
  ) {}
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id') as string;
    this.authService.getUserById(id).then((res) => {
      res.json().then((data) => {
        if (data.success) {
          this.username = data.data.username;
          this.email = data.data.email;
        }
      });
    });
  }
  updateProfile() {
    const id = this.router.snapshot.paramMap.get('id') as string;
    const token = this.authService.getUser()?.token as string;
    this.userService
      .updateProfile(id, token, this.username, this.email)
      .then((res) => {
        res.json().then((data) => {
          if (data.success) {
            alert(data.message);
            this.navigation.navigate(['/view-profile', id]);
          }else{
            alert(data.message);
            this.navigation.navigate(['/']);
          }
        });
      });
  }
}
