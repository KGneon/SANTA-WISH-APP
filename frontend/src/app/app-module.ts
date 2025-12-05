import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishFilter } from './wish-filter/wish-filter';
import { WishListItem } from './wish-list-item/wish-list-item';

import { EventService } from '../shared/services/EventService';

@NgModule({
  declarations: [
    App,
    WishList,
    AddWishForm,
    WishFilter,
    WishListItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    EventService
  ],
  bootstrap: [App]
})
export class AppModule { }
