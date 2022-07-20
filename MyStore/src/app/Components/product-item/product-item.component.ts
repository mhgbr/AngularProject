import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Output() addCartItemEvent: EventEmitter<Product> = new EventEmitter();
  products: Product[] = [];
  quantities: number[] = [1,2,3,4,5];
  quantity:number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  addItemToCart(prod: Product): void {
    this.addCartItemEvent.emit(prod);
  }
  OnSelect(selectedQuantity: number){
    this.product.quantity = selectedQuantity;
  }
}
