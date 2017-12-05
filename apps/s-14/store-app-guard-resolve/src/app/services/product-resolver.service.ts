import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductsService } from './products.service';
import { Product } from '../models/product';

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(private productsService: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product | Observable<Product> | Promise<Product> {
    console.log('ProductResolver.resolve() invoked.');

    const id = +route.params['id'];
    return this.productsService.getProduct(id);
  }
}
