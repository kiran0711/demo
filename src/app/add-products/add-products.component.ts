import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  productsForm : FormGroup;
  validPattern = "^[a-zA-Z0-9]{10}$";
  constructor(private productService :ProductService) {
    this.productsForm = new FormGroup({
      static_data_type: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern(this.validPattern)]),
      description:new FormControl('', [Validators.required]),
      });
   }

  ngOnInit(): void {}

  onSubmit(){
    this.productService.addProducts(this.productsForm.value).subscribe(data =>{
      alert('data is created successfully')
      console.log('ProductData',data);
    })
  }  
  
  
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
