import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../productData';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //@Input() title : any;
  message:any;
  products : any;
  groupList:any = [];
  //data: any[] = [];
  constructor(private router: Router,private productService :ProductService) { }

  ngOnInit(): void {
  this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe((data: any) =>{
    this.products = data['result'];
      console.log('data',this.products);
    })
  }

  addToCart(prod:any){
    this.groupList.push(prod);
  }


  getResponse(event:any){
    this.groupList.forEach((element:any,index:any)=>{
      if(element.productId == event.productId) this.groupList.splice(index,1);
   }); 
  }

  editToCart(prod:any){
    this.router.navigate(['/add-products']);
    console.log(prod)
  }






}
