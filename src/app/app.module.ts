import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormDefinitionComponent} from './form-definition/forms-definition.component';
import {FormControlComponent} from './form-control/form-control.component';
import {FormComponent} from './form/form.component';
import {FormService} from "./form/form.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FormGroupService} from "./form-definition/form-group.service";

@NgModule({
	declarations: [
		AppComponent,
		FormDefinitionComponent,
		FormControlComponent,
		FormComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpModule
	],
	providers: [FormService, FormGroupService],
	bootstrap: [AppComponent]
})
export class AppModule
{
}
