import { Component, signal } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import events from './.../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  items : WishItem[] = [
    new WishItem("A", true),
    new WishItem("B", false),
    new WishItem("C", true),
    new WishItem("D", false)
  ]; 

  constructor() {
    events.listen('removeWish', (wish : any) => {
      //todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }


  filter: any;
}
