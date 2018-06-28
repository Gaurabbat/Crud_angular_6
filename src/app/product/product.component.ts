import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private http : HttpClient) { }

  productObj : Object = [];
  confirmation : String = "Product added successfully";
  isAdded : boolean = false;

  addNewProduct= function(product){
    this.productObj= {
      "name" : product.name,
      "color" : product.color
    }
    this.http.post("http://localhost:5555/products",this.productObj).subscribe(
       (res : Response) => {
         this.isAdded = true;
       }
    )
  }


  ngOnInit() {
  }

}
