import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { productList } from '../productData';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() title : any;
  message:any;
  @Output() productList = new EventEmitter();
  products = productList;
  groupList:any = [];
  constructor() { }

  ngOnInit(): void {
    this.title = 'Products';
    //console.log(this.products);
   // console.log(this.groupList)
  }

  addToCart(prod:any){
  
    this.groupList.push(prod);
    //console.log(this.groupList) 

  }


  getResponse(event:any){
    this.message = event;


  }

}
