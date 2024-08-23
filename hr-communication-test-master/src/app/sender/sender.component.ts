import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(private appService: AppService) { }

  message: string;

  messages: [{id?: number, message?: string}] = [{}];

  onSend() {
      if(undefined !== this.message && '' !== this.message) {
        this.appService.setMessage(this.message);
        this.message = '';
      }
  }

  ngOnInit() {
    this.appService.messages$.subscribe((data:any) => {
      this.messages = data;
    })
  }

}
