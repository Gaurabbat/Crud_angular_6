import { Component, OnInit } from '@angular/core';
import {Response,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  id : number;
  data : object = {};
  products =[];
  productObj : object =[];
  private headers = new Headers({'content-type' : 'application/json'});

  constructor(private router : Router, private route : ActivatedRoute, private http : HttpClient) { }

  updateProduct = function(product){
    this.productObj ={
      "name" : product.name,
      "color" : product.color
    };
    const url = "http://localhost:5555/products/"+this.id;
    
    this.http.put(url,this.productObj).subscribe(
      (res: Response) =>{
        this.router.navigate(['/']);
      }
    )
  }

  getdata= function(){
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
    this.http.get("http://localhost:5555/products").subscribe(
      (res : Response) => {
        //res= JSON.parse(res['_body']);
      // this.products = JSON.parse(res['_header']);
      this.products = res;
        console.log(res);
        for(var i =0;i<this.products.length;i++){
          if(parseInt(this.products[i].id)===this.id){
            this.data = this.products[i];
            break;
          }
        }
      }
    )
  }


  ngOnInit() {
    this.getdata();
  }

}
