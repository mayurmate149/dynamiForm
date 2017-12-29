import {Component, OnInit} from '@angular/core';
import {FormService} from "./form.service";
import {FormModel} from "./model/form.model";

@Component({
	selector: 'dynamic-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit
{

	form: FormModel;

	constructor(private formService: FormService)
	{
		// TODO get ID
		const id = '';
		this.getForm(id);
	}

	ngOnInit(): void
	{
	}




	private getForm(id: string)
	{
		this.formService.getForm(id).subscribe((form: FormModel) =>
			{
				this.form = form;
			}
			, (error => console.log(error) ));
	}

}
