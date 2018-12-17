import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';
import { CD } from '../../models/CD';
import { ModalController } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdsList : CD[];

 constructor(private modalCtrl: ModalController,
              private bookAndCdService: BookAndCdService,
			  private menuCtrl: MenuController
			  ) {}

  ionViewWillEnter() {
     this.cdsList = this.bookAndCdService.cdsList.slice();
  }
  
  onLoadCD(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }
  
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
