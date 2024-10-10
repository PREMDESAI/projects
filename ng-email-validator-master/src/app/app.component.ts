import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmailValidatorService } from './service/email-validator.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AirTableService } from './service/air-table.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'email-validator';
  emailValue = signal('');

  private textService = inject(EmailValidatorService);
  private toastr = inject(ToastrService);
  private airTableService = inject(AirTableService);

  validateEmail() {
    console.log(this.emailValue());
    this.airTableService.emailValue(this.emailValue());
    this.textService.emailValidator(this.emailValue()).subscribe({
      next: (res) => {
        let result = res as { score: number }; // Inline type assertion
        console.log(result.score);

        if (result.score > 0.48) {
          console.log('greater');
          this.emailValue.set('');
          this.saveEmailToDataBase();
          this.toastr.success('Email has been saved to the database');
        }

        if (result.score <= 0.48) {
          console.log('lesser');
          this.emailValue.set('');
          this.toastr.error('Email Does not meet criteria');
        }
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  saveEmailToDataBase() {
    this.airTableService.saveEmail().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
