import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private appService: AppService) { }

  messages: any[] = []

  ngOnInit() {
    this.appService.messages$.subscribe((data:any) => {
      this.messages = data;
    })
  }

  delete(delId: number) {
    this.appService.deleteMessage(delId);
  }

}
