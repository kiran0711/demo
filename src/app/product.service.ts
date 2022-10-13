import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProducts(product:any){
 return this.http.post("https://www.zealcoders.com/eligo_api/api/static_data_type_add",product);
  }

  getProducts(){
    return this.http.get("https://www.zealcoders.com/eligo_api/api/static_data_type_list")
  }

  deleteProducts(){
    return this.http.delete("https://www.zealcoders.com/eligo_api/api/static_data_type_delete")
  }
}
