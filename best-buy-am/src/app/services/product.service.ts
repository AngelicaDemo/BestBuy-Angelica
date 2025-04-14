import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private amProducts: Product[] = [
    {
      amId: 1,
      amName: 'Bosch 30" 3.7 Cu. Ft. True Convection 5-Burner Stove',
      amDescription: 'High-efficiency stove with true convection technology for even cooking results.',
      amPrice: 399,
      amPhoto: 'assets/img/stove.jpeg',
      amCategory: 'Appliances'
    },
    {
      amId: 2,
      amName: 'Bosch 36" 21 Cu. Ft. Counter-Depth 4-Door French Door Refrigerator',
      amDescription: 'Keep your food fresh and close at hand with this 4-door Bosch refrigerator. The fridge\'s 21 cu ft. capacity provides plenty of room for all your groceries, while the FarmFresh system keeps the contents perfectly chilled. Its HomeConnect system connects to your home network for integration with Nest, Alexa, Fitbit, and more.',
      amPrice: 3000,
      amPhoto: 'assets/img/fridge.jpeg',
      amCategory: 'Appliances'
    },
    {
      amId: 3,
      amName: 'Apple MacBook Air 13.3" w/ Touch ID',
      amDescription: 'Lightweight and powerful laptop with Touch ID for enhanced security.',
      amPrice: 999,
      amPhoto: 'assets/img/macbook.jpeg',
      amCategory: 'Computers'
    },
    {
      amId: 4,
      amName: 'Lenovo IdeaPad Flex 5 13.3" Touchscreen 2-in-1 Chromebook',
      amDescription: 'Versatile 2-in-1 Chromebook with touchscreen functionality.',
      amPrice: 399,
      amPhoto: 'assets/img/tablet.jpeg',
      amCategory: 'Computers'
    },
    {
      amId: 5,
      amName: 'LG 50" 4K UHD HDR LED webOS Smart TV',
      amDescription: 'Immersive viewing experience with 4K resolution and smart features.',
      amPrice: 499,
      amPhoto: 'assets/img/lgtv.jpeg',
      amCategory: 'TVs'
    },
    {
      amId: 6,
      amName: 'Amazon Fire TV Stick 4K Max Media Streamer with Alexa Voice Remote',
      amDescription: 'Stream your favorite content in 4K with voice control capabilities.',
      amPrice: 49.99,
      amPhoto: 'assets/img/firestick.jpeg',
      amCategory: 'TVs'
    }
  ];

  constructor() { }

  // Método para obtener todos los productos
  amGetAllProducts(): Product[] {
    return this.amProducts;
  }

  // Método para buscar un producto por ID
  amGetProductById(id: number): Product | undefined {
    return this.amProducts.find(product => product.amId === id);
  }

  // Método para obtener productos por categoría
  amGetProductsByCategory(category: string): Product[] {
    return this.amProducts.filter(product => product.amCategory === category);
  }

  // Método para obtener todas las categorías únicas
  amGetCategories(): string[] {
    const amCategories = this.amProducts.map(product => product.amCategory);
    return [...new Set(amCategories)]; // Elimina duplicados
  }
}