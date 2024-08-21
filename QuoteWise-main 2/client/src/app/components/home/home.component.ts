import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuoteType } from '../../types/quote.type';
import { QuoteService } from '../../services/quote.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBookmark,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private quoteService: QuoteService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  commentIcon = faComment;
  heartIcon = faHeart;
  bookmarkIcon = faBookmark;
  quotes: QuoteType[] = [];

  ngOnInit() {
    this.quoteService.getAllQuotes().subscribe((res: any) => {
      this.quotes = res.data;
    });
  }

  isLogin() {
    return this.authService.isAuthenticated();
  }

  isLiked(quote: QuoteType) {
    if(quote.likes.includes(this.authService.getUser()?.id as string)){
      return "liked-button";
    }else{
      return "like-button";
    }
  }
  
  likePost(id:string) {
    this.quoteService.likeQuote(
      id,
      this.authService.getUser()?.token as string
    ).subscribe((res:any) => {
      if(res.success){
        if(res.message === "Quote liked successfully"){
          this.quotes = this.quotes.map((quote) => {
            if(quote._id === id){
              quote.likes.push(this.authService.getUser()?.id as string);
            }
            return quote;
          });
        }else{
          this.quotes = this.quotes.map((quote) => {
            if(quote._id === id){
              quote.likes = quote.likes.filter((like) => like !== this.authService.getUser()?.id);
            }
            return quote;
          });
        }
      }
    });
  }
  addToFavorite(id:string) {
    this.quoteService.addToFavorite(
      id,
      this.authService.getUser()?.token as string
    ).subscribe((res:any) => {
      // console.log(res);
      if(res.success){
        if(res.message === "Quote added to favorites"){
          this.quotes = this.quotes.map((quote) => {
            if(quote._id === id){
              quote.favorites.push(this.authService.getUser()?.id as string);
            }
            return quote;
          });
        }else{
          this.quotes = this.quotes.map((quote) => {
            if(quote._id === id){
              quote.favorites = quote.favorites.filter((favorite) => favorite !== this.authService.getUser()?.id);
            }
            return quote;
          });
        }
      }
    });
  }
  isFavourited(quote: QuoteType) {
    if(quote.favorites.includes(this.authService.getUser()?.id as string)){
      return "favorited-button";
    }else{
      return "favorite-button";
    }
  }
}
