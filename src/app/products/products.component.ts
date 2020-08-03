import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  dataSource: Product[] = [
    {
      id: 0,
      name: 'Name',
      sku: 'SKUUU',
      barcode: '0998986',
      image: 'image',
      price: 'pricee',
      enabled: false
    },
    {
      id: 1,
      name: 'Name 1',
      sku: 'SKUUU',
      barcode: '2123234',
      image: 'image',
      price: 'pricee',
      enabled: true
    }
  ];
  columnsToDisplay = ['name', 'sku', 'barcode', 'enabled'];
  focusedElement: Product;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onFocusedProduct(element) {
    this.focusedElement = this.focusedElement === element ? null : element;
    this.router.navigateByUrl("/product/" + element.id);
  }

}
