import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socket: Socket;
  constructor(@Inject(PLATFORM_ID) private platform_id, private injector: Injector) {
    if (isPlatformBrowser(this.platform_id)) {
      this.socket = this.injector.get<Socket>(Socket);
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform_id)) {
      this.socket.on('connect', () => {
        console.log('hello')
      });
    }

  }

  send() {
    if (isPlatformBrowser(this.platform_id)) {
      this.socket.emit('sendMsg')
    }
  }


}
