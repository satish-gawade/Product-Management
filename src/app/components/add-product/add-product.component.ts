import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router'; // Updated import for Angular Router

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButton, FormsModule, MatInputModule, RouterModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Updated from `styleUrl` to `styleUrls`
})
export class AddProductComponent {
  product: Product = {
    name: "",
    brand: "",
    image: "",
    currentPrice: 0,
    standarPrice: 0,
    discount: 0
  };

  constructor(
    private productService: ProductService, // Constructor injection
    private router: Router                 // Constructor injection
  ) {}

  addProduct() {
    console.log("Form Submitted", this.product);
    this.productService.addProduct(this.product).subscribe({
      next: (result) => {
        alert("Product Saved");
        this.router.navigateByUrl("/");
      },
      error: (err) => {
        console.error("Error saving product", err);
      }
    });
  }
}
