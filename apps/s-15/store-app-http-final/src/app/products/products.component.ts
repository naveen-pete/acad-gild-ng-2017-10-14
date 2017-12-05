import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error: AppError) => {
        console.log('error:', error);
      }
    );
  }

  onDelete(productId) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        (product: Product) => {
          const index = this.products.findIndex(
            product => product.id === productId
          );

          if (index >= 0) {
            this.products.splice(index, 1);
          }

          console.log('Product deleted successfully!');
        },
        (error: AppError) => {
          console.log('error:', error);
        }
      );
    }
  }
}
