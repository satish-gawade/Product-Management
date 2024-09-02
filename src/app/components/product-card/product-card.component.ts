import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!:Product;
  @Output() viewProduct=new EventEmitter<number>;
  view(id:any){
    console.log("id" +id );
    this.viewProduct.emit(id);
  }
}
