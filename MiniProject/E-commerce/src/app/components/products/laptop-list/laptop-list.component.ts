import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { laptops } from 'src/app/laptops';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops = laptops;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  onSelect(laptop){
   this.router.navigate(['products/laptop-list', laptop.id]);
   }

   addToCart1(laptop) {
     this.cartService.addToCart(laptop);
     window.alert('Your product has been added to the cart!');
   }
   goback(){
    this.router.navigateByUrl('/products');
   }

}