import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private service:ProductService,private cart:CartService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe( (prod) => {
      this.products = prod;  
    });
  }
  addEmittedProduct(prod: Product): void {
    this.cart.addToCart(prod)
  }
}
