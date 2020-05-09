import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
//https://github.com/loiane/curso-angular/commit/6125d3845f0e3a32357d18527d589a6e57771cd2

const routes: Routes = [
  {
    path: '', component: UnsubscribePocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubscribeRxjsRoutingModule { }
