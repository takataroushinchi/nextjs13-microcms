declare namespace NodeJS {
	interface ProcessEnv {
		readonly MICROCMS_SERVICE_DOMAIN: string;
		readonly MICROCMS_API_KEY: string;
	}
}