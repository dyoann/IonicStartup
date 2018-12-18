export class Book { 
 
 isLend: boolean;
 
 constructor(public name: string,  public author: string, public year: number, public owner: string){
	this.isLend = false; 
 }

}