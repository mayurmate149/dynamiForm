import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputFieldBase} from '../form-control/model/input-field/input-field-base.model';

@Injectable()
export class FormGroupService
{
	constructor()
	{
	}

	toFormGroup(questions: InputFieldBase<any>[])
	{
		let group: any = {};

		questions.forEach(inputField =>
		{
			group[inputField.name] = inputField.required ? new FormControl(inputField.value || '', Validators.required)
				: new FormControl(inputField.value || '');
		});
		return new FormGroup(group);
	}
}
