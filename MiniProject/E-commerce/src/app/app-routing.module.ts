import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MobileDetailsComponent } from './components/products/mobile-details/mobile-details.component';
import { MobileListComponent } from './components/products/mobile-list/mobile-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LaptopDetailsComponent } from './components/products/laptop-details/laptop-details.component';
import { LaptopListComponent } from './components/products/laptop-list/laptop-list.component';
import { ProductsComponent } from './components/products/products.component';
import { TelevisionDetailsComponent } from './components/products/television-details/television-details.component';
import { TelevisionListComponent } from './components/products/television-list/television-list.component';
import { WashingMachineDetailsComponent } from './components/products/washing-machine-details/washing-machine-details.component';
import { WashingMachineListComponent } from './components/products/washing-machine-list/washing-machine-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { TopDealsDetailsComponent } from './components/top-deals-details/top-deals-details.component';
import { TopDealsListComponent } from './components/top-deals-list/top-deals-list.component';

const routes: Routes = [

  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'cart',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'login', component: CartComponent },
  { path:'shipping', component: ShippingComponent },
  
  { path:'products',children:[
    {path:'',component:ProductsComponent},
    {path:'mobile-list',component:MobileListComponent},
    {path:'mobile-list/:productId', component: MobileDetailsComponent },
    {path:'laptop-list',component:LaptopListComponent},
    {path:'laptop-list/:laptopId', component: LaptopDetailsComponent},
    {path:'television-list',component:TelevisionListComponent},
    {path:'television-list/:televisionId', component: TelevisionDetailsComponent},
    {path:'washingMachine-list',component:WashingMachineListComponent},
    {path:'washingMachine-list/:washingMachineId', component: WashingMachineDetailsComponent},
    {path:'',component:TopDealsListComponent}

  ] },
  {path:'products/:topDealsId',component:TopDealsDetailsComponent},
  { path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
