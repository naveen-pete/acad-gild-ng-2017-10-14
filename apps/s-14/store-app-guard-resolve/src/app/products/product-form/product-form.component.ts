import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';
import { CanComponentDeactivate } from '../../services/can-deactivate-guard.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
  id: number;
  product: Product = new Product();
  originalProduct: Product = new Product();
  addNew = false;
  changesSaved = false;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.id = +params['id']));

    const product = this.productsService.getProduct(this.id);

    if (product) {
      Object.assign(this.product, product);
    } else {
      this.addNew = true;
    }

    Object.assign(this.originalProduct, this.product);
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');
    if (this.addNew) {
      this.productsService.addProduct(this.product);
      this.router.navigate(['/products']);
    } else {
      this.productsService.updateProduct(this.id, this.product);
      this.router.navigate(['/products', this.id]);
    }
    this.changesSaved = true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('ProductFormComponent.canDeactivate() invoked.');
    if (
      (this.product.name !== this.originalProduct.name ||
        this.product.description !== this.originalProduct.description ||
        this.product.price !== this.originalProduct.price ||
        this.product.isAvailable !== this.originalProduct.isAvailable) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
