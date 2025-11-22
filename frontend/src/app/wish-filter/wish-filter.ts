import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: false,
  templateUrl: './wish-filter.html',
  styleUrl: './wish-filter.css',
})
export class WishFilter {
  @Output() filter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.filter.emit(filters[0])
  }

  listFilter : any = '0';

  changeFilter(value : any) {
    this.filter.emit(filters[value])
  }
}
