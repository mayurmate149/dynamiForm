import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {FormModel} from './model/form.model';
import 'rxjs/add/operator/map';

@Injectable()
export class FormService
{
	getFormDefinitionUrl = '/teampilot/forms/{id}';

	constructor(private http: Http)
	{

	}


	getAllForms()
	{

	}

	getForm(id: string): Observable<FormModel>
	{
		//noinspection TypeScriptValidateTypes
		return this.http.get('../../assets/forms.json')
			.map(
				(res) =>
				{
					res = res.json();
					return res;
				});
	}

	submitForm(form: any)
	{
		return this.http.post('',form);


	}

}
