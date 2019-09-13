import { Observable } from 'rxjs/observable'
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
 
  cart$: Observable<ShoppingCart>;
  
  constructor(
    private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  } 

}
