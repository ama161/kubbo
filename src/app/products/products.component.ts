import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  dataSource: Product[];
  columnsToDisplay = ['name', 'sku', 'barcode', 'enabled'];
  focusedElement: Product;

  constructor(
    private router: Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private productService: ProductService
  ) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Icon_add_w.svg'))
  }


  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.dataSource = data;
    })
  }

  onFocusedProduct(element) {
    this.focusedElement = this.focusedElement === element ? null : element;
    this.router.navigateByUrl("/product/" + element.id);
  }

}
