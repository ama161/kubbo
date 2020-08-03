import {Product} from '../model/product';
import {Inventario} from '../model/inventario';
import {Warehouse} from '../model/warehouse';
import {Stock} from '../model/stock';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

const products: Product[] = 
[{
    id: 0,
    name: 'Té',
    sku: 'SKUUU',
    barcode: '0998986',
    image: 'image',
    price: 'pricee',
    enabled: false
  },
  {
    id: 1,
    name: 'Cuchara',
    sku: 'SKUUU',
    barcode: '2123234',
    image: 'image',
    price: 'pricee',
    enabled: true
}];

const stock: Stock[] = 
[{
    id: 0,
    quantity: 250,
    status: '',
    id_warehouse: 0
  },
  {
    id: 1,
    quantity: 100,
    status: '',
    id_warehouse: 0
  },
  {
    id: 0,
    quantity: 100,
    status: '',
    id_warehouse: 1
  },{
    id: 1,
    quantity: 150,
    status: '',
    id_warehouse: 1
}];

const warehouse: Warehouse[] = 
[{
    id: 0,
    city: 'Barcelona',
    name: 'Almacén BCN'
  },
  {
    id: 1,
    city: 'Sabadell',
    name: 'Almacén Sabadell'
}];

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(products);
  }

  getProductById(id: number): Observable<Product> {
    return of(products.find(product => product.id == id));
  }

  getInventarioById(id: number): Observable<Inventario[]> {
    const stockById = stock.filter(stock => stock.id == id);

    let inventario = stockById.map(stock => {
      let warehouseByStock = warehouse.find(warehouse => warehouse.id == stock.id_warehouse);
      return {
        ciudad: warehouseByStock.city,
        pais: '',
        almacen: warehouseByStock.name,
        stock: stock.quantity
      };
    })
    return of(inventario);
  }
}
