import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit{
  ngOnInit(): void {
    this.getValue();
  }
  constructor(private servicioComunicacion: ContadorService,private router: Router){}
  @Input() books:Book[]=[];
  @Input() child:Book[]=[];
  @Input() avent:Book[]=[];
  valueToPay:number=0;
  getValue(){
    this.books.forEach(book=>{
      this.valueToPay+= book.price;
    });

    this.child.forEach(book=>{
      this.valueToPay+= book.price;
    });

    this.avent.forEach(book=>{
      this.valueToPay+= book.price;
    });
  }

  pagar(){
    this.servicioComunicacion.resetBooks();
    this.servicioComunicacion.resetChild();
    this.servicioComunicacion.resetAvent();
    this.router.navigateByUrl("/")
  }

}
