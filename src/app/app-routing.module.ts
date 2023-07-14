import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './pages/offer-list/offer-list.component';
import { OfferFormComponent } from './pages/offer-form/offer-form.component';

const routes: Routes = [
  { path: 'ofertas', component: OfferListComponent },
  { path: 'ofertar', component: OfferFormComponent },
  { path: '**', redirectTo: 'ofertas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
