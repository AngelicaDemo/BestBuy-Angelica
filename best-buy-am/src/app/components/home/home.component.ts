import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false, 
})
export class HomeComponent implements OnInit {
  amCategories: string[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.amCategories = this.productService.amGetCategories();
  }

  amNavigateToCategory(category: string): void {
    this.router.navigate(['/product-categories', category]);
  }

  amGetCategoryImage(category: string): string {
    switch(category) {
      case 'Computers':
        return 'assets/img/laptops.png';
      case 'TVs':
        return 'assets/img/tvs.png';
      case 'Appliances':
        return 'assets/img/appliances.png';
      default:
        return 'assets/img/default.png';
    }
  }
}