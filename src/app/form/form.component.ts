import {Component, OnInit} from '@angular/core';
import {FormService} from "./form.service";
import {FormModel} from "./model/form.model";
import {Page} from "../form-definition/page.model";

@Component({
	selector: 'dynamic-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit
{

	form: FormModel;
	submittedFormPages: Array<Page> = [];
	pageCounter: number = 0;

	constructor(private formService: FormService)
	{
		// TODO get Id
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
		}, (error => console.log(error) ));
	}

	private submitForm(formValue: any)
	{
		console.log(formValue);
		/*this.formService.submitForm(formValue).subscribe(
			(res) =>
			{
				console.log(res);
			},
			(error) =>
			{
				console.log(error);
			});*/
	}

	onSubmit(formPage: Page)
	{
		this.submittedFormPages.push(formPage);
		++this.pageCounter;
		if (this.pageCounter === this.form.pages.length)
		{
			let formValue = {};
			this.submittedFormPages.forEach((page) =>
			{
				Object.entries(page.fieldValues).forEach(([key, value]) => {
					formValue[key] = value;
				});
			});
			this.submitForm(formValue);
		}
	}

}
