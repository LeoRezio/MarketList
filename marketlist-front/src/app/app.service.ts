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
    return this.http.post<Product[]>(this.apiURL, body, { headers });
  }
  public putProduct(newProduct: Product) {
    const headers = {
      'content-type': 'application/json',
    };
    const body = JSON.stringify(newProduct);
    const url: any = this.apiURL + newProduct._id;
    return this.http.put<Product[]>(url, body, { headers });
  }
  public deleteProduct(newProduct: Product) {
    const url: any = this.apiURL + newProduct._id;
    console.log(url);
    return this.http.delete(url).subscribe((data) => {
      console.log(data);
    });
  }
}
