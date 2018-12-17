import { Book } from '../models/Book';
import { CD }   from '../models/CD';

export class BookAndCdService {
	
	
	booksList: Book[] = [
    {
      name: 'Devenir',
      author : 'Michelle Obama',
	  year   : 2018,
      isLend: true
    },
    {
      name: 'Je te promet la liberté',
      author : 'Laurent Gounelle',
	  year   : 2018,
      isLend: true
    },
    {
      name: 'Le Misanthrope',
      author : 'Molière',
	  year   : 1666,
      isLend: false
    }
  ];
  
  cdsList: CD[] = [
    {
      name: 'Mon pays c\'est l\'amour',
      author : 'Johnny Hallyday',
	  year   : 2018,
      isLend: true
    },
    {
      name: 'Phoenix',
      author : 'Soprano',
	  year   : 2018,
      isLend: false
    },
    {
      name: 'Queen Greatest Hits I,II & III',
      author : 'Queen',
	  year   : 2018,
      isLend: false
    }
  ];
  
  onToogleBookElement(bookIndex: number){
	  this.booksList[bookIndex].isLend = !this.booksList[bookIndex].isLend;
  }
  
  onToogleCdElement(cdIndex: number){
	  this.cdsList[cdIndex].isLend = !this.cdsList[cdIndex].isLend;
  }
		
}