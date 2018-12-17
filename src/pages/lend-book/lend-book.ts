import { Component } from '@angular/core';
import {  NavParams, ViewController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Book;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bookAndCdService: BookAndCdService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.bookAndCdService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.bookAndCdService.onToogleBookElement(this.index);
  }

}
