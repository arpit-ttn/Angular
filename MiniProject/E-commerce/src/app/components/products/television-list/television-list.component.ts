import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { televisions } from 'src/app/televisions';
import { CartService } from 'src/app/services/cart.service';
  
@Component({
  selector: 'app-television-list',
  templateUrl: './television-list.component.html',
  styleUrls: ['./television-list.component.css']
})
export class TelevisionListComponent implements OnInit {
  
  televisions = televisions;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  onSelect(television){
   this.router.navigate(['products/television-list', television.id]);
   }

   addToCart2(television) {
     this.cartService.addToCart(television);
     window.alert('Your product has been added to the cart!');
   }
   goback(){
    this.router.navigateByUrl('/products');
   }

}
