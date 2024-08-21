import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: ActivatedRoute,
    private navigation: Router
  ) {}
  changePassword() {
    if(this.oldPassword === this.newPassword){
      alert('Old password and new password cannot be the same');
      return;
    }
    if(this.newPassword.length < 6){
      alert('Password must be at least 6 characters');
      return;
    }
    if(this.newPassword.length > 20){
      alert('Password must be at most 20 characters');
      return;
    }
    const id = this.router.snapshot.paramMap.get('id') as string;
    const token = this.authService.getUser()?.token as string;
    this.userService
      .updatePassword(id, token, this.oldPassword, this.newPassword)
      .then((res) => {
        res.json().then((data) => {
          if (data.success) {
            alert(data.message);
            this.navigation.navigate(['/view-profile', id]);
          } else {
            alert(data.message);
            if(data.message.includes('Not Authorized')){
              this.navigation.navigate(['/']);
            }
          }
        });
      });
  }
}
