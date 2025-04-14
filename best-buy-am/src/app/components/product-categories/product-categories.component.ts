import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css'],
  standalone: false, 
})
export class ProductCategoriesComponent implements OnInit {
  amCategory: string = '';
  amProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.amCategory = params['category'];
      this.amLoadProducts();
    });
  }

  amLoadProducts(): void {
    if (this.amCategory) {
      this.amProducts = this.productService.amGetProductsByCategory(this.amCategory);
    }
  }

  amViewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}