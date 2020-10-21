import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { washingMachines } from 'src/app/washingMachines';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-washing-machine-details',
  templateUrl: './washing-machine-details.component.html',
  styleUrls: ['./washing-machine-details.component.css']
})
export class WashingMachineDetailsComponent implements OnInit {

  washingMachine;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart3(washingMachine) {
      this.cartService.addToCart3(washingMachine);
      window.alert('Your product has been added to the cart!');
    }

  ngOnInit(){

  this.route.paramMap.subscribe(params => {
    this.washingMachine = washingMachines[+params.get('washingMachineId')];
  });

  }
  back(){
    this.router.navigateByUrl('/products/washingMachine-list');
   }

}
