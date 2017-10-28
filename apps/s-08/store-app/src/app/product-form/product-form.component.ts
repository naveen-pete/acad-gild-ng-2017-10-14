import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();

  product: Product = new Product();
  showMessage: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSave() {
    let newProduct = new Product();
    newProduct.name = this.product.name;
    newProduct.description = this.product.description;
    newProduct.isAvailable = this.product.isAvailable;
    newProduct.price = this.product.price;

    //this.products.unshift(newProduct);
    this.productCreated.emit(newProduct);

    this.product = new Product();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
