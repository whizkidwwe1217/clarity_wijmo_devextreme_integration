import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClarityGridComponent } from './clarity-grid/clarity-grid.component';
import { WijmoComponentComponent } from './wijmo-component/wijmo-component.component';
import { DevExtremeComponentComponent } from './dev-extreme-component/dev-extreme-component.component';

const routes: Routes = [
  {
    path: 'clarity',
    component: ClarityGridComponent
  },
  {
    path: 'wijmo',
    component: WijmoComponentComponent
  },
  {
    path: 'devextreme',
    component: DevExtremeComponentComponent
  },
  {
    path: "**",
    redirectTo: "clarity",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
