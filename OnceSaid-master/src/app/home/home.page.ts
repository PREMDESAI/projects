import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Quote } from '../../Quote';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Quote: Quote;

  constructor(private http: HTTP) {
    this.http.get('https://quotes.rest/qod', {}, {})
    .then(data => {
      const quoteData = JSON.parse(data.data).contents.quotes[0];
      this.Quote = new Quote(quoteData.author, quoteData.quote, quoteData.tags);
      console.log(this.Quote);
    }).catch(e => console.log("error"));
  }
}