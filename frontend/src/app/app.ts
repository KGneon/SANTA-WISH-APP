import { Component, signal } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

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

  filter: any = () => {};
}
