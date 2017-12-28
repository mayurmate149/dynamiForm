import {Component, Input, OnInit} from '@angular/core';
import {InputFieldBase} from "../form-control/model/input-field/input-field-base.model";
import {FormGroup} from "@angular/forms";
import {FormGroupService} from "./form-group.service";
import {Page} from "../form/model/page.model";

@Component({
	selector: 'form-definition',
	templateUrl: './forms-definition.component.html',
	styleUrls: ['./form-definition.component.css']
})
export class FormDefinitionComponent implements OnInit
{
	@Input() page: Page;
	@Input() inputFields: InputFieldBase<any>[] = [];
	form: FormGroup;
	payLoad = '';

	constructor(private formGroupService: FormGroupService ) {  }

	ngOnInit() {
		this.form = this.formGroupService.toFormGroup(this.inputFields);
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}


}
