import { Component } from '@angular/core';
import { products } from 'src/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'marketlist';
  product = products;
  editProduct() {}

  deleteProduct() {}
}
