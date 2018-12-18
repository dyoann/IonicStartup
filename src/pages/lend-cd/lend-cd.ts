import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';
import { CD } from '../../models/CD';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: CD;

  ownerForm: FormGroup;
  
  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bookAndCdService: BookAndCdService,
			  private formBuilder: FormBuilder
			  ) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd  = this.bookAndCdService.cdsList[this.index];
	this.initForm();
  }
  
  initForm(){
		this.ownerForm = this.formBuilder.group(
		{
			owner : [ '',Validators.required],
		}
		);
	}

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  saveOwner(){
	  const owner = this.ownerForm.get('owner').value;
	  this.bookAndCdService.changeCDOwner(this.index,owner);
  }
  removeOwner(){
	  this.bookAndCdService.removeCDOwner(this.index);
  }

}
