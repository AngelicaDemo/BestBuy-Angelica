import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: false, 
  
})
export class NavigationComponent implements OnInit {
  amCategories: string[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.amCategories = this.productService.amGetCategories();
  }

  amNavigateToCategory(event: any): void {
    const category = event.target.value;
    if (category !== 'Select a Category...') {
      this.router.navigate(['/product-categories', category]);
    }
  }
}