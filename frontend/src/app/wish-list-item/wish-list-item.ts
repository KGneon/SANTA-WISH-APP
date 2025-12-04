import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import events from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: false,
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() wish! : WishItem;

  @Input() fullfilled! : boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    return {'strikeout text-muted': this.fullfilled};
  }

  constructor() {}

  ngOnInit(): void {
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFullFilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}