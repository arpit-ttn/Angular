import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { topDeals } from 'src/app/top-deals';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-top-deals-details',
  templateUrl: './top-deals-details.component.html',
  styleUrls: ['./top-deals-details.component.css']
})
export class TopDealsDetailsComponent implements OnInit {

  topDeal;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart4(topDeal) {
      this.cartService.addToCart4(topDeal);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit(){

  this.route.paramMap.subscribe(params => {
    this.topDeal = topDeals[+params.get('topDealId')];
  });

  }
  back(){
    this.router.navigateByUrl('/products');
   }


}
