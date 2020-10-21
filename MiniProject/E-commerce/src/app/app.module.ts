import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LaptopListComponent } from './components/products/laptop-list/laptop-list.component';
import { LaptopDetailsComponent } from './components/products/laptop-details/laptop-details.component';
import { TelevisionListComponent } from './components/products/television-list/television-list.component';
import { TelevisionDetailsComponent } from './components/products/television-details/television-details.component';
import { WashingMachineDetailsComponent } from './components/products/washing-machine-details/washing-machine-details.component';
import { WashingMachineListComponent } from './components/products/washing-machine-list/washing-machine-list.component';
import { TopDealsListComponent } from './components/top-deals-list/top-deals-list.component';
import { TopDealsDetailsComponent } from './components/top-deals-details/top-deals-details.component';
import { RegisterComponent } from './components/register/register.component';
import { MobileListComponent } from './components/products/mobile-list/mobile-list.component';
import { MobileDetailsComponent } from './components/products/mobile-details/mobile-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    CartComponent,
    TopBarComponent,
    ShippingComponent,
    LaptopListComponent,
    LaptopDetailsComponent,
    TelevisionListComponent,
    TelevisionDetailsComponent,
    WashingMachineDetailsComponent,
    WashingMachineListComponent,
    TopDealsListComponent,
    TopDealsDetailsComponent,
    RegisterComponent,
    MobileListComponent,
    MobileDetailsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
