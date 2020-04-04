import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModelDrivenFormsComponent} from './components/model-driven-forms/model-driven-forms.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'model-driven-forms'},
  {path: 'model-driven-forms', component: ModelDrivenFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
