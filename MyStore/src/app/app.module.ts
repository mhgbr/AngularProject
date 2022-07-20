import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
