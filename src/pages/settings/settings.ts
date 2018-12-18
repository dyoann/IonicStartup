import { Component } from '@angular/core';
import { MenuController, ToastController, LoadingController } from 'ionic-angular';
import { BookAndCdService } from '../../services/bookAndCd.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
  private menuCtrl: MenuController,
  private bookAndCdService: BookAndCdService,
  private toastCtrl: ToastController,
  private loadingCtrl: LoadingController
  ) {
  }
  
  onToggleMenu() {
    this.menuCtrl.open();
  }
  
  onSaveBooksList(){
		let loader = this.loadingCtrl.create({
				content: 'Sauvegarde des Livres en cours...'
		});
		loader.present();
		this.bookAndCdService.saveBooksData().then(
			() => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: 'Livres sauvegardés',
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		).catch(
			(error) => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: error.message,
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		);
  }
  
  onSaveCDsList(){
		let loader = this.loadingCtrl.create({
				content: 'Sauvegarde des CDs en cours...'
		});
		loader.present();
		this.bookAndCdService.saveCdsData().then(
			() => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: 'CDs sauvegardés',
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		).catch(
			(error) => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: error.message,
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		);
  }
  
  onSaveList(){
	this.onSaveBooksList();
	this.onSaveCDsList();
  }
  
  onFetchBooksList(){
	  let loader = this.loadingCtrl.create({
				content: 'Chargement des Livres en cours...'
		});
		loader.present();
		this.bookAndCdService.retrieveBooksData().then(
			() => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: 'Livres chargés',
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		).catch(
			(error) => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: error,
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		);
  }
  
  onFetchCdsList(){
	  let loader = this.loadingCtrl.create({
				content: 'Chargement des CDs en cours...'
		});
		loader.present();
		this.bookAndCdService.retrieveCdsData().then(
			() => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: 'CDs chargés',
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		).catch(
			(error) => {
				loader.dismiss();
				this.toastCtrl.create(
				{
					message: error,
					duration: 1000,
					position: 'bottom'
				}
				).present();
			}
		);
  }
  
  onFetchList(){
	  this.onFetchBooksList();
	  this.onFetchCdsList();
  }
  

}
