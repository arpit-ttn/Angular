import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { topDeals } from 'src/app/top-deals';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-top-deals-list',
  templateUrl: './top-deals-list.component.html',
  styleUrls: ['./top-deals-list.component.css']
})
export class TopDealsListComponent implements OnInit {

  topDeals= topDeals;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  onSelect(topDeal){
   this.router.navigate(['/products', topDeal.id]);
   }

   addToCart4(topDeal) {
     this.cartService.addToCart4(topDeal);
     window.alert('Your product has been added to the cart!');
   }
}
