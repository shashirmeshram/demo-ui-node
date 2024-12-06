import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ui';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  items: any = [];

  ngOnInit() {
    this.getAllProducts();
    this.getProductById(this.route.snapshot.params['id']);
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.items = res;
    });
  }

  getProductById(id: string): void {
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  additem() {}

  deleteItems() {}
}
