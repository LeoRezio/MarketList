import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/shared/products.model';
import { ProductService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  product: Product[] = [];
  newProduct = new Product();
  submitted!: boolean;
  productDialog: boolean = false;

  constructor(
    private productservice: ProductService,
    private primengConfig: PrimeNGConfig
  ) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.refreshList();
  }
  title = 'marketlist';

  refreshList() {
    this.productservice.getProduct().subscribe((product) => {
      this.product = product;
      console.log(product);
    });
  }

  editProduct(product: Product) {
    this.newProduct = { ...product };
    this.productDialog = true;
  }

  openNew() {
    this.newProduct = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteProduct() {}

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  //saveProduct() {
  //  this.submitted = true;
  //  this.productservice.postProduct(this.newProduct).subscribe((data) => {
  //    console.log(data);
  //  });
  //  this.newProduct = {};
  //  this.productDialog = false;
  //  this.refreshList();
  //}

  saveProduct() {
    this.submitted = true;
    if (this.newProduct.name?.trim()) {
      if (this.newProduct._id) {
        this.product[this.findIndexById(this.newProduct._id)] = this.newProduct;
        this.productservice.putProduct(this.newProduct).subscribe((data) => {
          console.log(data);
        });
      } else {
        this.productservice.postProduct(this.newProduct).subscribe((data) => {
          console.log(data);
        });
      }
      this.product = [...this.product];
      this.productDialog = false;
      this.newProduct = {};
      this.refreshList();
    }
  }
  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
