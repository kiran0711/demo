import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { productList } from '../productData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartList : any ;
  @Output() getResponse = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cartList);   
  }


cartListDetails(){
  this.getResponse.emit();
  console.log(this.cartList)
}
}

