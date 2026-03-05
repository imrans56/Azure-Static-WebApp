import { Component } from '@angular/core';
import { PRODUCTS } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  products = PRODUCTS;

}
