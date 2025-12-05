import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: false,
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList  implements OnInit {
  @Input() wishes : WishItem[] = [];

  constructor() {}

  ngOnInit(): void{
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log("clicked item", item);
  }
}
