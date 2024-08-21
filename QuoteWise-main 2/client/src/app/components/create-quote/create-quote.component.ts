import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuoteService } from '../../services/quote.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-quote.component.html',
  styleUrl: './create-quote.component.css',
})
export class CreateQuoteComponent {
  userPrompt = 'This is default prompt';
  quote = 'Enter prompt and click on generate quote button';
  constructor(
    private quoteService: QuoteService,
    private router: Router,
    private authService: AuthService
  ) {}
  generateQuote() {
    if (!this.authService.isAuthenticated()) {
      alert('not authenticated');
      this.router.navigate(['/login']);
    } else {
      const token = this.authService.getUser()?.token as string;
      this.quote = 'Generating...';
      this.quoteService.generateQuote(this.userPrompt, token).subscribe(
        (res: any) => {
          console.log(res.data);
          this.quote = res.data;
        },
        (err: any) => {
          this.quote = 'Failed to generate quote';
        }
      );
    }
  }
  uploadQuote() {
    const token = this.authService.getUser()?.token as string;
    this.quoteService
      .uploadQuote(this.quote, token, this.userPrompt)
      .subscribe({
        next: (res: any) => {
          if (res.success) {
            alert('Quote uploaded successfully');
            this.router.navigate(['/']);
          } else {
            alert(res.message);
          }
        },
        error: (err: any) => {
          alert('Failed to upload quote');
        },
      });
  }
}
