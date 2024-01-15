import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { LoginRouteModule } from './login-route.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRouteModule
  ],
  exports: [RouterModule]
})
export class LoginPageModule { }
