import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListItem } from './wish-list-item';

describe('WishListItem', () => {
  let component: WishListItem;
  let fixture: ComponentFixture<WishListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
