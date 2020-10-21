import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {

  product;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart(product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit(){

  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });

  }
  back(){
    this.router.navigateByUrl('/products/mobile-list');
   }

}

