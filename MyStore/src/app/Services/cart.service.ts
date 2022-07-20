import { Injectable } from '@angular/core';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { }

  addToCart(item: Product): void {
    if(item.quantity==undefined)
    {
      item.quantity=1;
    item.amount = item.price * item.quantity; 
    this.items.push(JSON.parse(JSON.stringify(item)));
    alert('Item added to cart!')
    }
    else{
    item.amount = item.price * item.quantity;   
    this.items.push(JSON.parse(JSON.stringify(item)));
    alert('Item added to cart!')
}
}
getItems(): Product[] {
  return this.items;
}
clearCart(): Product[] {
  this.items = [];
  return this.items;
}
getTotal(): number {
  let total: number = 0;
  let len = this.items.length;
  for (let i = 0; i < len; i++)
   {
    total = total + this.items[i].amount;
   }
  return total;
}


}
