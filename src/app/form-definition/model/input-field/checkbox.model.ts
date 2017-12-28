import { InputFieldBase } from './input-field-base.model';

export class Checkbox extends InputFieldBase<string>{
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
