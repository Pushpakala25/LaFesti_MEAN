import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { HurrayComponent } from './hurray/hurray.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TrackingComponent } from './tracking/tracking.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { LoginareaComponent } from './loginarea/loginarea.component';
import { SignareaComponent } from './signarea/signarea.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UserProfileComponent,
    EditProfileComponent,
    CartComponent,
    PaymentComponent,
    HurrayComponent,
    RestaurantsComponent,
    TrackingComponent,
    LoginheaderComponent,
    LoginareaComponent,
    SignareaComponent,
    ForgotpasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
