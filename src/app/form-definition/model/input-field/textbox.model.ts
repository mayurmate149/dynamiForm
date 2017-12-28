import { InputFieldBase } from './input-field-base.model';

export class Textbox extends InputFieldBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
