import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';
import { Book } from '../../models/Book';
import { ModalController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';

import { Subscription } from 'rxjs';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
 
  booksList : Book[];
  booksSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private bookAndCdService: BookAndCdService,
			  private menuCtrl: MenuController
			  ) {}
  
  ngOnInit() {
	this.booksSubscription = this.bookAndCdService.books$.subscribe(
		(books : Book[]) => {
			this.booksList = books;		
		},
		(error) => {
			console.log(error);
		}
	);
    this.bookAndCdService.emitBooks();
  }
  
  onToggleMenu() {
    this.menuCtrl.open();
  }
  
  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

}
