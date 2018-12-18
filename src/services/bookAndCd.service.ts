import { Book } from '../models/Book';
import { CD }   from '../models/CD';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot  = firebase.database.DataSnapshot;
import { Storage } from '@ionic/storage';

@Injectable()
export class BookAndCdService {
	
	//Subjects
	books$ = new Subject<Book[]>();
	cds$   = new Subject<CD[]>();
	
	//Will be retrieved locally
	booksList : Book[];
	cdsList   : CD[];
	
	//Default Books
	defaultBooksList: Book[] = [
    {
      name: 'Devenir',
      author : 'Michelle Obama',
	  year   : 2018,
      isLend: true,
	  owner : 'Some Book Lover n°1'
    },
    {
      name: 'Je te promet la liberté',
      author : 'Laurent Gounelle',
	  year   : 2018,
      isLend: true ,
	  owner : 'Some Book Lover n°2'
    },
    {
      name: 'Le Misanthrope',
      author : 'Molière',
	  year   : 1666,
      isLend: false,
	  owner : ''
    }
  ];
  
  //Default CDs
  defaultCdsList: CD[] = [
    {
      name: 'Mon pays c\'est l\'amour',
      author : 'Johnny Hallyday',
	  year   : 2018,
      isLend: true,
	  owner : 'Some Music Lover n°1'
    },
    {
      name: 'Phoenix',
      author : 'Soprano',
	  year   : 2018,
      isLend: false,
	  owner : ''
    },
    {
      name: 'Queen Greatest Hits I,II & III',
      author : 'Queen',
	  year   : 2018,
      isLend: false,
	  owner : ''
    }
  ];
  
  constructor(private storage: Storage) {
	  //Fetch local books
	  this.fetchBooksDataLocal();
	  if(!this.booksList || this.booksList.length == 0){
			console.log("No Books on local device, taking default");
			this.booksList = this.defaultBooksList;
			this.emitBooks();
			this.saveBooksDataLocal();
	  }
	  //Fetch local cds
	  this.fetchCdsDataLocal();
	  if(!this.cdsList || this.cdsList.length == 0){
			console.log("No CDs on local device, taking default");
			this.cdsList = this.defaultCdsList;
			this.emitCds();
			this.saveBooksDataLocal();
	  }
  }
  
  emitBooks(){
	  this.books$.next(this.booksList.slice());
  }
  
  emitCds(){
	  this.cds$.next(this.cdsList.slice());
  }
  
  //Local save Books
  saveBooksDataLocal(){
	 this.storage.set('books',this.booksList);
  }
  
  //Local load Books
  fetchBooksDataLocal() {
    this.storage.get('books').then(
      (list) => {
        if (list && list.length) {
          this.booksList = list.slice();
        }
        this.emitBooks();
      }
    );
  }
  
  //Local save CD
  saveCdsDataLocal(){
	 this.storage.set('cds',this.booksList);
  }
  
  //Local load CD
  fetchCdsDataLocal() {
    this.storage.get('cds').then(
      (list) => {
        if (list && list.length) {
          this.cdsList = list.slice();
        }
        this.emitCds();
      }
    );
  }
  
  //Firebase save 
  saveBooksData(){
	  return new Promise(
		(resolve,reject) => {
				firebase.database().ref('/ionic-books').set(this.booksList).then(
					(data : DataSnapshot) => {
							resolve(data);
					}
				).catch(
					(error) => {
							reject(error);
					}
				);
				
		}
	  );
  }
  
  //Firebase save
  saveCdsData(){
	  return new Promise(
		(resolve,reject) => {
				firebase.database().ref('/ionic-cds').set(this.cdsList).then(
					(data : DataSnapshot) => {
							resolve(data);
					}
				).catch(
					(error) => {
							reject(error);
					}
				);
				
		}
	  );
  }
  
  //Firebase load
  retrieveBooksData(){
	  return new Promise(
		(resolve,reject) => {
				firebase.database().ref('/ionic-books').once('value').then(
					(data : DataSnapshot) => {
							this.booksList = data.val();
							this.saveBooksDataLocal();
							this.emitBooks();
							resolve("Livres récupérés avec succès (et chargés en local)");
					}
				).catch(
					(error) => {
							reject(error);
					}
				);
				
		}
	  );
  }
  
  //Firebase load
   retrieveCdsData(){
	  return new Promise(
		(resolve,reject) => {
				firebase.database().ref('/ionic-cds').once('value').then(
					(data : DataSnapshot) => {
							this.cdsList = data.val();
							this.saveCdsDataLocal();
							this.emitCds();
							resolve("CDs récupérés avec succès (et chargés en local)");
					}
				).catch(
					(error) => {
							reject(error);
					}
				);
				
		}
	  );
  }
  
  
  changeBookOwner(bookIndex: number, owner: string){
	  let b = this.booksList[bookIndex];
	  b.isLend = true;
	  b.owner = owner;
	  this.saveBooksDataLocal();
	  this.emitBooks();
  }
  
  removeBookOwner(bookIndex: number){
	  let c = this.booksList[bookIndex];
	  c.isLend = false; 
	  c.owner='';
	  this.saveBooksDataLocal();
	  this.emitBooks();
  }
  
  changeCDOwner(cdIndex: number, owner: string){
	  let c = this.cdsList[cdIndex];
	  c.isLend = true;
	  c.owner  = owner;
	  this.saveCdsDataLocal();
	  this.emitCds();
  }
  
   removeCDOwner(cdIndex: number){
	  let b = this.cdsList[cdIndex];
	  b.isLend = false; 
	  b.owner='';
	  this.saveCdsDataLocal();
	  this.emitCds();
  }
  
		
}