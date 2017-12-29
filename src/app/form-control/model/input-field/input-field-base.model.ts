export enum InputType
{
	TEXT = 'text',
	PASSWORD = 'password',
	CHECKBOX = 'checkbox',
	RADIO = 'radio',
	SELECT = 'select',
	DATE = 'date',
	HIDDEN = 'hidden',
	FILE = 'file',
	CANVAS = 'canvas'
}

export class InputFieldBase<T>
{
	public name: string;
	public type: InputType;
	public label: string;
	public value: string;
	public required: boolean;
	public readOnly: boolean;
	public dataSource: string;
	public pattern: string;
	public isGrouped: boolean;

	constructor(options: {
		name?: string,
		type?: InputType,
		label?: string,
		value?: string,
		required?: boolean,
		readOnly?: boolean,
		dataSource?: string,
		isGrouped?: boolean,
		pattern?: string,
	} = {})
	{
		this.name = options.name;
		this.type = options.type;
		this.label = options.label || '';
		this.value = options.value || '';
		this.required = !!options.required;
		this.readOnly = !!options.readOnly;
		this.dataSource = options.dataSource;
		this.pattern = options.pattern;
		this.isGrouped = options.isGrouped;
	}
}
