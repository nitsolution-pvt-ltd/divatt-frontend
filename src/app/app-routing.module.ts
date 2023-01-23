import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProfileCompleteComponent } from './components/profile-complete/profile-complete.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportComponent } from './components/report/report.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { AuthGuard } from './services/auth/auth.guard';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { 
    path: "", 
    component : LoginComponent,
    pathMatch: 'full'
  },
  { 
    path: "login", 
    component : LoginComponent,
  },
  { 
    path: 'home', 
    component : HomeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: "product/:action/:id", 
    component : AddProductComponent,
  },
  { 
    path: "profile", 
    component : ProfileComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: "register", 
    component : RegisterComponent,
  },
  { 
    path: "forgot-password", 
    component : ForgotPasswordComponent,
  },
  { 
    path: "profile-edit/:designerId", 
    component : ProfileEditComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: "reset-password/:link/:linktime", 
    component : ResetPasswordComponent,
  },
  { 
    path: "product-view/:id", 
    component : ProductViewComponent,
  },
  { 
    path: "order-list", 
    component : OrdersComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: "order-item/:orderId/:productId", 
    component : OrderItemComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: "payments", 
    component : ReportComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: "payment-details/:accountId", 
    component : ReportDetailsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: "profile-complete", 
    component : ProfileCompleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled',preloadingStrategy: PreloadAllModules}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
