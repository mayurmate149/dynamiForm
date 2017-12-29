import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputFieldBase} from "../form-control/model/input-field/input-field-base.model";
import {FormGroup} from "@angular/forms";
import {FormGroupService} from "./form-group.service";
import {Page} from "./page.model";

@Component({
	selector: 'form-definition',
	templateUrl: './forms-definition.component.html',
	styleUrls: ['./form-definition.component.css']
})
export class FormDefinitionComponent implements OnInit
{
	@Input() page: Page;
	@Output() onSubmit = new EventEmitter<Page>();
	private inputFields: InputFieldBase<any>[] = [];
	form: FormGroup;

	constructor(private formGroupService: FormGroupService)
	{

	}

	ngOnInit()
	{
		this.inputFields = this.page.fields;
		this.form = this.formGroupService.toFormGroup(this.inputFields);
	}

	submitPage()
	{
		let submitPage = <Page>{
			id: this.page.id,
			title: this.page.title,
			fieldValues: this.form.value,
		};
		this.onSubmit.emit(submitPage);
	}


}
