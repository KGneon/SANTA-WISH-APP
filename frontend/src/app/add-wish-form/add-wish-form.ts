import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  standalone: false,
  templateUrl: './add-wish-form.html',
  styleUrl: './add-wish-form.css',
})
export class AddWishForm {
  @Output() addWish = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  newWishText = '';

  addNewWish(){
    //this.items.push(new WishItem(this.newWishText, false));
    this.addWish.emit(new WishItem(this.newWishText, false));
    this.newWishText = '';
  }

}
