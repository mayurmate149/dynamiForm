import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Page} from "./model/page.model";
import {Form} from "@angular/forms";

@Injectable()
export class FormService
{
	getFormDefinitionUrl = '/teampilot/forms/{id}';

	constructor(private http: Http)
	{

	}

	getForm(id: string): Observable<Form> {
		return this.http.get('/assets/form.json').map((res) => (res.json()));
	}

}