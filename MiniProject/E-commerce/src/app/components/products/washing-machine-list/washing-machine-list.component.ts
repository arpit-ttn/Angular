import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { washingMachines } from 'src/app/washingMachines';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-washing-machine-list',
  templateUrl: './washing-machine-list.component.html',
  styleUrls: ['./washing-machine-list.component.css']
})
export class WashingMachineListComponent implements OnInit {

  washingMachines= washingMachines;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  onSelect(washingMachine){
   this.router.navigate(['products/washingMachine-list', washingMachine.id]);
   }

   addToCart3(washingMachine) {
     this.cartService.addToCart3(washingMachine);
     window.alert('Your product has been added to the cart!');
   }
   goback(){
    this.router.navigateByUrl('/products');
   }
}
