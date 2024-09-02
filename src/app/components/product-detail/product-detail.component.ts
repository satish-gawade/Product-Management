import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule,RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product!:Product;
  productService =inject(ProductService);
  activatedRoute=inject(ActivatedRoute)
  ngOnInit(){
    let productId=this.activatedRoute.snapshot.params["id"];
this.productService.getProductById(productId).subscribe(result=>{
  this.product=result;
})
  }
}
