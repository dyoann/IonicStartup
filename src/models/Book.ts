export class Book { 
 
 isLend: boolean;
 
 constructor(public name: string,  public author: string, public year: number){
	this.isLend = false; 
 }

}