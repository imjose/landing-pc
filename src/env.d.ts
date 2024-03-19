/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly STORYBLOK_TOKEN: string;
	readonly STAGE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
