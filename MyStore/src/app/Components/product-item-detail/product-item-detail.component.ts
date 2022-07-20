import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: any
  id: number = 0;
  products: Product[] = [];
  quantities: number[] = [1,2,3,4,5];
  quantity: number = 1;
 
   
  constructor( private service: ProductService,private cart:CartService, private activeRouter: ActivatedRoute, private router: Router) {
    this.activeRouter.paramMap.subscribe((params: any) => {
      this.id  = Number(params.get('id'));
    });

   }

  ngOnInit(): void {
    this.service.getProducts().subscribe( (prod) => {
      this.products = prod;
      this.product = this.products!.find(p => p.id === this.id);
    });
  }
  OnSelect(selectedQuantity: number){
   this.product.quantity= selectedQuantity;
  }


  addProduct(prod: Product):void {
    this.cart.addToCart(prod);

  }

}
