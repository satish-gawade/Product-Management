import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { provideToastr, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButton, FormsModule, MatInputModule, RouterModule,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  formBuilder=inject(FormBuilder);
  productService=inject(ProductService);
  activatedRoute=inject(ActivatedRoute);
  router=inject(Router);
  toasterService=inject(ToastrService);
  productForm:FormGroup=this.formBuilder.group({
    id:[''],
    name:['',Validators.required],
    brand:['',Validators.required],
    image:[''],
    currentPrice:[''],
    standarPrice:[''],
    discount:[''],
  })
  ngOnInit(){
    let productId=this.activatedRoute.snapshot.params["id"];
this.productService.getProductById(productId).subscribe(result=>{
  this.productForm.patchValue(result);
})
  }
  editProduct(){
    if(this.productForm.invalid){
      this.toasterService.error("Please provide all the valid input");
      return;
    }
    console.log("Form is edited",this.productForm.value)
    this.productService.updateProduct(this.productForm.value).subscribe(result=>{
      this.toasterService.success("Product Updated");
      this.router.navigateByUrl("/");
    })
  }
}
