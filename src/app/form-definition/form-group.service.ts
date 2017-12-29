import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputFieldBase} from '../form-control/model/input-field/input-field-base.model';

@Injectable()
export class FormGroupService
{
	constructor()
	{
	}

	toFormGroup(inputFields: InputFieldBase<any>[])
	{
		let group: any = {};
		inputFields.forEach(inputField =>
		{
			group[inputField.name] = new FormControl(inputField.value || '');
			if (inputField.required){
				group[inputField.name].setValidators(Validators.required);
			}
			if (inputField.pattern){
				group[inputField.name].setValidators(Validators.pattern);
			}
			/*group[inputField.name] = inputField.required ? new FormControl(inputField.value || '', Validators.required)
				: new FormControl(inputField.value || '');*/
		});
		return new FormGroup(group);
	}
}
