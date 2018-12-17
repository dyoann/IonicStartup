import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: CD;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bookAndCdService: BookAndCdService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.bookAndCdService.cdsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.bookAndCdService.onToogleCdElement(this.index);
  }

}
