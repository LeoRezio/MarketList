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
    //this.productservice.getProduct().subscribe((product) => {
    //  this.product = product;
    //});
    this.primengConfig.ripple = true;
    this.refreshList();
  }
  title = 'marketlist';

  refreshList() {
    this.productservice.getProduct().subscribe((product) => {
      this.product = product;
    });
  }

  editProduct() {}

  openNew() {
    this.newProduct;
    this.submitted = false;
    this.productDialog = true;
  }

  deleteProduct() {}

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    this.productservice.postProduct(this.newProduct).subscribe((data) => {
      console.log(data);
    });
    this.product = [...this.product];
    this.newProduct = {};
    this.productDialog = false;
    this.refreshList();
  }
}
