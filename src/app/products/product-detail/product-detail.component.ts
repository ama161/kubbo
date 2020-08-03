import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Inventario } from 'src/app/model/inventario';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  inventario: Inventario[];
  columnsToDisplay = ['ciudad', 'pais', 'almacen', 'stock'];

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private location: Location,
    private activatedRouter: ActivatedRoute,
    private productService: ProductService
  ) {
    iconRegistry.addSvgIcon(
      'back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Icon_back_w.svg'));
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Icon_edit_w.svg'))
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.productService.getProductById(params.id).subscribe(product => {
        console.log(product);
        this.product = product;
      })
      this.productService.getInventarioById(params.id).subscribe(inventario => {
        console.log(inventario);
        this.inventario = inventario;
      })
    })
  }

  back() {
    this.location.back();
  }

}
