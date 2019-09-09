import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { ProductService } from './../product.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Product } from '../models/product';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$: FirebaseListObservable<any[]>;
  category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
    categoryService: CategoryService) {
    
    productService
      .getAll()
      .switchMap( (products: Product[]) => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category):
          this.products
      }); 
    this.categories$ = categoryService.getAll();

    
   }

  ngOnInit() {
  }

}
