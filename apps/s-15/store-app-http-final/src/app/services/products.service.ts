import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from '../models/product';
import { AppError } from '../common/app-error';

@Injectable()
export class ProductsService {
  private products: Product[];
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: Http) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this.http
      .get(this.apiUrl + '/' + id)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
      .post(this.apiUrl, product)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  updateProduct(id: number, productInfo: Product): Observable<Product> {
    return this.http
      .patch(this.apiUrl + '/' + id, productInfo)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http
      .delete(this.apiUrl + '/' + id)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(new AppError(error));
  }
}
