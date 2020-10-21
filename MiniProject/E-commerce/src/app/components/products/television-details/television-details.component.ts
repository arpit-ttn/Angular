import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { televisions } from 'src/app/televisions';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-television-details',
  templateUrl: './television-details.component.html',
  styleUrls: ['./television-details.component.css']
})
export class TelevisionDetailsComponent implements OnInit {

  television;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart2(television) {
      this.cartService.addToCart2(television);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit(){

  this.route.paramMap.subscribe(params => {
    this.television = televisions[+params.get('televisionId')];
  });

  }
  back(){
    this.router.navigateByUrl('/products/television-list');
   }
}
