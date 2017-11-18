import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  id: number;
  isNew: boolean = true;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== 'new') {
        this.id = +params.id;
        this.product = this.productsService.getProduct(this.id);
        this.isNew = false;
      } else {
        this.product = new Product();
        this.isNew = true;
      }
    });
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');

    if (this.isNew) {
      this.productsService.addProduct(this.product);
    } else {
      this.productsService.updateProduct(this.id, this.product);
    }

    this.router.navigate(['/products']);
  }
}
