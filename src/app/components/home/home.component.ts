import { Component, inject, NgModule } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
import { Product } from '../../../types/product';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SearchComponent,HeaderComponent,FormsModule,AddProductComponent,MatButtonModule, MatInputModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products:Product[]=[]
  filteredProduct:Product[]=[];
  productService=inject(ProductService);
  router=inject(Router);
  name: any;

ngOnInit(){
 this.productService.getProduct().subscribe((result)=>{
 console.log(result);
 this.products=result;
 this.filteredProduct=this.products;
 })

}
onViewProduct(event:any){
  console.log("onViewProduct");
  this.router.navigateByUrl("/product/"+event)
}

onSearch(search:string){
  // search=this.name
  console.log("home",search)
  if(search){
    this.products=this.products.filter(x=>x['name'].toLowerCase().includes(search.toLowerCase()))
  }else{
    this.products=this.products;
  }
}

}
