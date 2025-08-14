export class Quote {
  author: string;
  quote: string;
  tags: Array<string>;

  constructor(author: string, quote: string, tags: Array<string>) {
      this.author = author;
      this.quote = quote;
      this.tags = tags;
  }
}
