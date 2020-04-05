import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModelDrivenFormsComponent} from './components/model-driven-forms/model-driven-forms.component';
import {CrossFieldValidationComponent} from './components/cross-field-validation/cross-field-validation/cross-field-validation.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'model-driven-forms'},
  {path: 'model-driven-forms', component: ModelDrivenFormsComponent},
  {path: 'cross-validation', component: CrossFieldValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
