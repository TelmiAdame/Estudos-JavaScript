import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Product } from '../produts.model';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null!
  }

  id: string = ''

  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product;
    })
  } 

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
  })
}

  cancel(): void {
    this.router.navigate(['/products'])
  }

}

