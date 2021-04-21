import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Subscription } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    private subscription: Subscription;
    topicname: any;
    msg: any;
    isConnected: boolean = false;
    public progressBar = false;
    constructor(
        private homeService: HomeService,
        private mqttService: MqttService
    ) { }

    ngOnInit() {
        // this.getBookList(0, 6);
        this.topicname = 'landt/mqtt/start';
        // this.msg = '';
        this.subscribeTopic();
    }

    subscribeTopic() {
        console.log('subscribe topic');
        this.subscription = this.mqttService.observe(this.topicname).subscribe((message: IMqttMessage) => {
            this.msg = message;
            console.log('msg: ', message);
            console.log('Message: ' + message.payload.toString() + '<br> for topic: ' + message.topic);
          });
          console.log('subscribed to topic: ' + this.topicname);
    }

    public getBookList(skip, limit, bookName = null) {
        this.progressBar = true;
        let body = {};
        if(bookName == null) {
            body = {
                skipValue: skip,
                limitValue: limit
            }
        } else {
            body = {
                skipValue: skip,
                limitValue: limit,
                bookName: bookName
            }
        }
        this.homeService.getAllBook(body).subscribe((result) => {
            console.log(result);
            this.progressBar = false;
        }, (err) => {
            this.progressBar = false;
            console.log(err.stausText);
        }, () => {
            this.progressBar = false;
            console.log('Complete Observable of getBookList');
        });
    }
}
