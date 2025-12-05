import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: false,
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() wish! : WishItem;

  get cssClasses() {
    return {'strikeout text-muted': this.wish.isComplete };
  }

  constructor(private events: EventService) {}

  ngOnInit(): void {
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullFilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}