import {ReleaseInformation} from './release-information.model';
import {FormConfiguration} from './form-configuration.model';
import {Page} from './page.model';
export class FormModel
{
	public id: string;
	public name: string;
	public baseUrl: string;
	public release: ReleaseInformation;
	public config: FormConfiguration;
	public pages: Array<Page>;

	constructor(
	){}
}