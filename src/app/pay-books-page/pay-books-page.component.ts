import { Component, OnInit} from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-pay-books-page',
  templateUrl: './pay-books-page.component.html',
  styleUrls: ['./pay-books-page.component.css']
})
export class PayBooksPageComponent implements OnInit {
  
  
 // navigation: any;
  //booksQueryParams: any;
  books: Book[] = [];
  child: Book[] = [];
  avent: Book[] = [];

  constructor(private servicioComunicacion:ContadorService) { 
    this.books= this.servicioComunicacion.getBooks();
    this.child= this.servicioComunicacion.getChild();
    this.avent= this.servicioComunicacion.getAvent();
    }

    ngOnInit(): void {
       //this.books= this.servicioComunicacion.getBooks();
      //console.log(this.books)
    }
    eliminar(id:number){
      this.servicioComunicacion.eliminarLibro(id);
      console.log(id);
    }
  };
  


