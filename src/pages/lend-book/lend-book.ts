import { Component } from '@angular/core';
import {  NavParams, ViewController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';
import { Book } from '../../models/Book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Book;

  ownerForm: FormGroup;
  
  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bookAndCdService: BookAndCdService,
			  private formBuilder: FormBuilder
			  ) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book  = this.bookAndCdService.booksList[this.index];
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
	  this.bookAndCdService.changeBookOwner(this.index,owner);
  }
  removeOwner(){
	  this.bookAndCdService.removeBookOwner(this.index);
  }

}
