import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
  standalone: false, // Add this line
})
export class AllProductsComponent implements OnInit {
  amProducts: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.amProducts = this.productService.amGetAllProducts();
  }

  amViewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}

