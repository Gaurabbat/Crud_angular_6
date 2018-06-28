import { Component, OnInit } from '@angular/core';
import {Response,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor(private http : HttpClient) { }

  id:number; 
  private headers = new Headers({'content-type' : 'application/json'});
   
  products = [];
  fetchData = function(){
    this.http.get("http://localhost:5555/products").subscribe(
      (res : Response) => {
        this.products = res;
      }
    )
    
  }

  deleteProduct = function(id){
    if(confirm("Are you sure?")){
      const url = "http://localhost:5555/products/"+id;
      return this.http.delete(url).subscribe(
        (val) => {
          this.fetchData();
        }
      )
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}
