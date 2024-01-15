import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowcasePageComponent } from './showcase-page.component';
import { ShowcaseRouteModule } from './showcase-route.module';

@NgModule({
  declarations: [
    ShowcasePageComponent
  ],
  imports: [
    CommonModule,
    ShowcaseRouteModule
  ],
  exports: [RouterModule]
})
export class ShowcasePageModule { }
