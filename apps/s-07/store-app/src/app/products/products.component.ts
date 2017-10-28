import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  product: Product = new Product();

  constructor() {
    this.products = [
      {
        name: 'Learning javaScript data Structures and Algorithms',
        description:
          'Understand common data structures and the associated algorithms, as well as the context in which they are used.',
        isAvailable: true,
        price: 898
      },
      {
        name: 'LG 7.0 kg Semi-Automatic Top Loading Washing Machine ',
        description: 'Semi-automatic top-loading washing machine',
        isAvailable: true,
        price: 12500
      },
      {
        name: 'Yonex Voltric 7DG Badminton Racquet',
        description:
          'The stiff racquet structure at the top of the frame allows the head to bend in a very controlled way and hold shuttles on the string bed for longer',
        isAvailable: false,
        price: 4190
      }
    ];
  }

  ngOnInit() {}

  onSave() {
    let newProduct = new Product();
    newProduct.name = this.product.name;
    newProduct.description = this.product.description;
    newProduct.isAvailable = this.product.isAvailable;
    newProduct.price = this.product.price;

    this.products.unshift(newProduct);

    this.product = new Product();
  }
}
