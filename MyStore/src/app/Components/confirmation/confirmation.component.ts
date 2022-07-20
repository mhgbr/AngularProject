import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  clientName: string = '';
  totalPrice: number = 0;
  constructor(public cart: CartService,private route: Router,private activatedRoute: ActivatedRoute) {
   
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.clientName  = (params.get('clientName'))?.toString()!;
      this.totalPrice = Number(params.get('total'));
    });
   }

  ngOnInit(): void {
    this.cart.clearCart()
  }

}
