import { Component } from '@angular/core';
import { CommentType } from '../../types/comment.type';
import { QuoteType } from '../../types/quote.type';
import { FormsModule } from '@angular/forms';
import {
  faBookmark,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { QuoteService } from '../../services/quote.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-view-quote',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, RouterLink],
  templateUrl: './view-quote.component.html',
  styleUrl: './view-quote.component.css',
})
export class ViewQuoteComponent {
  constructor(
    private router: ActivatedRoute,
    private authService: AuthService,
    private quoteService: QuoteService,
    private commentService: CommentService
  ) {}
  commentIcon = faComment;
  heartIcon = faHeart;
  bookmarkIcon = faBookmark;
  newComment: string = '';
  quote: QuoteType = {
    _id: '',
    content: '',
    userPrompt: '',
    author: {
      id: '',
      username: '',
      email: '',
    },
    likes: [],
    favorites: [],
    comments: [],
    createdAt: '',
    updatedAt: '',
  };
  comments: CommentType[] = [];
  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id') as string;
    this.quoteService.getQuote(id).subscribe((res: any) => {
      if (res.success) {
        this.quote = res.data;
      }
    });
    const token = this.authService.getUser()?.token as string;
    this.commentService.getComments(id, token).subscribe((res: any) => {
      if (res.success) {
        this.comments = res.data;
      }
    });
  }

  addComment() {
    if (this.newComment === '') {
      alert('Comment cannot be empty');
      return;
    }
    this.commentService
      .addComment(
        this.quote._id,
        this.newComment,
        this.authService.getUser()?.token as string
      )
      .subscribe((res: any) => {
        if (res.success) {
          this.comments.push(res.data);
          this.newComment = '';
        }
      });
  }

  isFavourited(quote: QuoteType) {
    if (quote.favorites.includes(this.authService.getUser()?.id as string)) {
      return 'favorited-button';
    } else {
      return 'favorite-button';
    }
  }

  isLiked(quote: QuoteType) {
    if (quote.likes.includes(this.authService.getUser()?.id as string)) {
      return 'liked-button';
    } else {
      return 'like-button';
    }
  }

  likePost(id: string) {
    this.quoteService
      .likeQuote(id, this.authService.getUser()?.token as string)
      .subscribe((res: any) => {
        if (res.success) {
          if (res.message === 'Quote liked successfully') {
            this.quote.likes.push(this.authService.getUser()?.id as string);
          } else {
            this.quote.likes = this.quote.likes.filter(
              (like) => like !== this.authService.getUser()?.id
            );
          }
        }
      });
  }

  addToFavorite(id: string) {
    this.quoteService
      .addToFavorite(id, this.authService.getUser()?.token as string)
      .subscribe((res: any) => {
        if (res.success) {
          if (res.message === 'Quote added to favorites') {
            this.quote.favorites.push(this.authService.getUser()?.id as string);
          } else {
            this.quote.favorites = this.quote.favorites.filter(
              (favorite) => favorite !== this.authService.getUser()?.id
            );
          }
        }
      });
  }
  isCommentAuthor(id: string) {
    if (id === this.authService.getUser()?.id) {
      return true;
    } else {
      return false;
    }
  }
  deleteComment(id: string) {
    this.commentService
      .deleteComment(id, this.authService.getUser()?.token as string)
      .subscribe((res: any) => {
        if (res.success) {
          this.comments = this.comments.filter((comment) => comment._id !== id);
          alert(res.message);
        }
      });
  }
}
