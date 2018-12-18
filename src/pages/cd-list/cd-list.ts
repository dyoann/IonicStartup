import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';
import { CD } from '../../models/CD';
import { ModalController } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';

import { Subscription } from 'rxjs';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
 
  cdsList : CD[];
  cdsSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private bookAndCdService: BookAndCdService,
			  private menuCtrl: MenuController
			  ) {}
  
  ngOnInit() {
	this.cdsSubscription = this.bookAndCdService.cds$.subscribe(
		(cds : CD[]) => {
			this.cdsList = cds;		
		},
		(error) => {
			console.log(error);
		}
	);
    this.bookAndCdService.emitCds();
  }
  
  onToggleMenu() {
    this.menuCtrl.open();
  }
  
  onLoadCD(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

}
