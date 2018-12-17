import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';
import { Book } from '../../models/Book';
import { ModalController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
 
  booksList : Book[];

  constructor(private modalCtrl: ModalController,
              private bookAndCdService: BookAndCdService,
			  private menuCtrl: MenuController
			  ) {}
  
  ionViewWillEnter() {
     this.booksList = this.bookAndCdService.booksList.slice();
  }
  
  onToggleMenu() {
    this.menuCtrl.open();
  }
  
  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

}
