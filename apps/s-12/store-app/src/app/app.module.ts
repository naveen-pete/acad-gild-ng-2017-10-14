import { ProductsService } from './services/products-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { LoggerService } from './services/logger-service';

import { ShortenPipe } from './pipes/shorten-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ShortenPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoggerService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
