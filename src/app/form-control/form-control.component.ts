import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputFieldBase, InputType} from './model/input-field/input-field-base.model';

@Component({
	selector: 'form-control',
	templateUrl: './form-control.component.html',
	styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit
{

	InputType = InputType;
	@Input() inputField: InputFieldBase<any>;
	@Input() form: FormGroup;


	get isValid()
	{
		return this.form.controls[this.inputField.name].valid;
	}

	constructor()
	{
	}

	ngOnInit()
	{
	}

	get formControl(){return this.form.get(this.inputField.name); }


}
