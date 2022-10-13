import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartList : any ;
  output:any
  @Output() getResponse = new EventEmitter;
  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    console.log(this.cartList); 
    //this.cartListDetails();  
  }


cartListDetails(prod:any){
  this.getResponse.emit(prod);
  console.log(this.cartList)
}

deleteProducts(){
this.productService.deleteProducts().subscribe(data =>{
  console.log('data deleted successfully')
})
}

}

