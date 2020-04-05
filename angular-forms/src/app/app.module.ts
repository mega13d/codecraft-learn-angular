import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelDrivenFormsComponent } from './components/model-driven-forms/model-driven-forms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CrossFieldValidationComponent } from './components/cross-field-validation/cross-field-validation/cross-field-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenFormsComponent,
    CrossFieldValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
