import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from './logger-service';

@Injectable()
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: 'Learning javaScript data Structures and Algorithms',
      description:
        'Understand common data structures and the associated algorithms, as well as the context in which they are used.',
      isAvailable: true,
      price: 898
    },
    {
      id: 2,
      name: 'LG 7.0 kg Semi-Automatic Top Loading Washing Machine ',
      description: 'Semi-automatic top-loading washing machine',
      isAvailable: true,
      price: 12500
    },
    {
      id: 3,
      name: 'Yonex Voltric 7DG Badminton Racquet',
      description:
        'The stiff racquet structure at the top of the frame allows the head to bend in a very controlled way and hold shuttles on the string bed for longer',
      isAvailable: false,
      price: 4190
    }
  ];

  constructor(private loggerService: LoggerService) {}

  getProducts(): Product[] {
    this.loggerService.log(
      'ProductsService.getProducts() => Product list retrieved successfully!'
    );
    return this.products;
  }

  createProduct(newProduct: Product) {
    this.products.unshift(newProduct);
    this.loggerService.log(
      'ProductsService.createProduct() => New product created successfully!'
    );
  }
}
