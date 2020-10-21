import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { laptops } from 'src/app/laptops';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  laptop;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart1(laptop) {
      this.cartService.addToCart1(laptop);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit(){
    
  this.route.paramMap.subscribe(params => {
    this.laptop = laptops[+params.get('laptopId')];
  });

  }
  back(){
    this.router.navigateByUrl('/products/laptop-list');
   }

}
