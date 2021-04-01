import { Injectable } from '@angular/core';
import { Product } from 'src/shared/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = 'http://localhost:3000/';
  dataProduct: Product[] = [];

  constructor(private http: HttpClient) {}

  public getProduct() {
    return this.http.get<Product[]>(this.apiURL);
  }
}
