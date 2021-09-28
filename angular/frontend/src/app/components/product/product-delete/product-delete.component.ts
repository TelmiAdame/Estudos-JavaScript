import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from '../produts.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null!
  }

  constructor( 
    private productService: ProductService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const id = '1'
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void{
    
  }

  cancel(){

  }

}
