import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'product/:id', component: ProductItemDetailComponent},
  { path: 'cart', component: CartComponent },
  { path: 'confirm/:clientName/:total', component: ConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
