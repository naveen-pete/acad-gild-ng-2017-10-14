import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../models/product';
import { LoggerService } from '../services/logger-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [LoggerService]
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  currentDate = new Date();

  constructor(private loggerService: LoggerService) {}

  ngOnInit() {
    // Product details retrieved successfully
    this.loggerService.log(
      'Product details retrieved successfully for product id: ' +
        this.product.name
    );
  }

  getDescriptionStyle() {
    // any logic - simple or complex
    return {
      color: this.product.isAvailable ? 'DEEPPINK' : 'DARKKHAKI'
    };
  }
}
