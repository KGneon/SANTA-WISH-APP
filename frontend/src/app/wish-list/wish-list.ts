import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: false,
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList  implements OnInit {
  @Input() wishText! : string;
  @Input() fullfilled! : boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    return {'strikeout text-muted': this.fullfilled};
  }

  constructor() {

  }

  ngOnInit(): void{

  }

  checkOrUncheck(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log("clicked item", item);
  }
}
