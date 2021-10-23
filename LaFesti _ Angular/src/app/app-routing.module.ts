import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { HurrayComponent } from './hurray/hurray.component';
import { LoginareaComponent } from './loginarea/loginarea.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SignareaComponent } from './signarea/signarea.component';
import { TrackingComponent } from './tracking/tracking.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:"",
    component:LoginareaComponent
  },
  {  
    path: 'sign',
    component: SignareaComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
  },
  {
  path:'Home',
  component:HomeComponent
},
{
  path:'Restaurants',
  component:RestaurantsComponent
},
{
  path:'Cart',
  component:CartComponent
},
{
  path:'pay',
  component:PaymentComponent
},
{
  path:'hurray',
  component:HurrayComponent
},
{
  path:'Profile',
  component:UserProfileComponent
},
{
  path:'edit',
  component:EditProfileComponent
},
{
  path:'menu',
  component:MenuComponent
},
{
  path:'track',
  component:TrackingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
