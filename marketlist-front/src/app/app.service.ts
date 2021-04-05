import { Injectable } from '@angular/core';
import { Product } from 'src/shared/products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = 'http://localhost:4200/api/';
  dataProduct: Product[] = [];

  constructor(private http: HttpClient) {}

  public getProduct() {
    return this.http.get<Product[]>(this.apiURL);
  }
  public postProduct(newProduct: Product) {
    const headers = {
      'content-type': 'application/json',
    };
    const body = JSON.stringify(newProduct);
    console.log(body);
    return this.http.post<Product[]>(this.apiURL, body, { headers });
  }
}
