import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css',
})
export class ViewProfileComponent {
  user: any = {};
  selectedSection = 'userQuotes';
  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private quoteService: QuoteService
  ) {}
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id') as string;
    this.authService.getUserById(id).then((res) => {
      res.json().then((data) => {
        if (data.success) {
          this.user = data.data;
        }
      });
    });
  }
  isQuoteAuthor(quote: any) {
    if (quote.author == this.authService.getUser()?.id) {
      return true;
    } else {
      return false;
    }
  }
  isProfileAuthor() {
    const id = this.router.snapshot.paramMap.get('id') as string;
    if (id == this.authService.getUser()?.id) {
      return true;
    } else {
      return false;
    }
  }
  deleteQuote(_id: string) {
    console.log('delete quote');
    const response: boolean | null = confirm(
      'Are you sure you want to delete this quote?'
    );
    if (response) {
      this.quoteService
        .deleteQuote(_id, this.authService.getUser()?.token as string)
        .subscribe((res: any) => {
          if (res.success) {
            console.log('Quote Deleted');
            this.user.quotes = this.user.quotes.filter(
              (quote: any) => quote._id !== _id
            );
          }
        });
    }
  }
  unLike(id: string) {
    this.quoteService
      .likeQuote(id, this.authService.getUser()?.token as string)
      .subscribe((res: any) => {
        if (res.success) {
          console.log('unlike');
          this.user.likedQuotes = this.user.likedQuotes.filter(
            (quote: any) => quote._id !== id
          );
        }
      });
  }
  unFavorite(id: string) {
    this.quoteService
      .addToFavorite(id, this.authService.getUser()?.token as string)
      .subscribe((res: any) => {
        if (res.success) {
          console.log('unfavorite');
          this.user.favoriteQuotes = this.user.favoriteQuotes.filter(
            (quote: any) => quote._id !== id
          );
        }
      });
    console.log('unfavorite');
  }
}
