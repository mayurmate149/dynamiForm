import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormDefinitionComponent } from './form-definition/form-definition.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormDefinitionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
