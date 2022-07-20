import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { CreditCard } from 'src/app/_models/credit-card';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  total: number=0;

  creditCard: CreditCard={
    clientName:"",
    cardNumber:0  
  }
  constructor(private cart:CartService,private route:Router) { }

  ngOnInit(): void {
    this.items = this.cart.getItems();
    this.total = this.cart.getTotal();
  }
  Submit() {
    this.route.navigate(['/confirm', this.creditCard.clientName, this.total ])
  }
 
}
