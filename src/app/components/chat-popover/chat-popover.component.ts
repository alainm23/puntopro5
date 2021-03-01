import { Component, OnInit, Input } from '@angular/core';

// Ionic
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-chat-popover',
  templateUrl: './chat-popover.component.html',
  styleUrls: ['./chat-popover.component.scss'],
})
export class ChatPopoverComponent implements OnInit {
  @Input () type: string;
  constructor (private popoverController: PopoverController,
              // private events: Events) { }
              ) {}

  ngOnInit() {
    console.log ("Type:", this.type);
  }

  close (type: number) {
    // this.events.publish('on-chat-popover', type);
    this.popoverController.dismiss ();
  }
}
