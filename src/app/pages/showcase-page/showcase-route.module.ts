import { NgModule } from '@angular/core';
import {
  Route,
  RouterModule
} from '@angular/router';
import { ShowcasePageComponent } from "./showcase-page.component";

const routes: Route[] = [
  { path: '', component: ShowcasePageComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRouteModule { }
