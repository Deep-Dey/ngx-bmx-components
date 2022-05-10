export class RequestMapper {

	public static readonly BASE_RELATIVE_URL: string = '';
	public static readonly ROOT_URL: string = '/';
	public static readonly DEMO_URL: string = 'demo';

	private constructor() {
	}

	public static getAbsoluteUrl(url: string): string {
		return RequestMapper.ROOT_URL + url;
	}
}
