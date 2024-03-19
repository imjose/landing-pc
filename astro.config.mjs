import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';

import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	site: 'https://gofurther.app',
	output: 'static',
	integrations: [
		tailwind(),
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			enableFallbackComponent: true,
			components: {
				// Pages
				page: 'modules/common/Page.sb',

				// Sections
				heroSection: 'modules/home/blocks/HeroSection.sb',
				// featureSection: 'modules/home/blocks/FeatureSection.sb',
				productSelection: 'modules/home/blocks/ProductSelection.sb',
				testimonialsSection: 'modules/home/blocks/TestimonialsSection.sb',

				// Blok
				metric: 'components/Metric.sb',
				highlight: 'components/Highlight.sb',
				// button: '',

				// Layout
				division: 'modules/common/Division.sb',
				grid: 'modules/common/Grid.sb',
				columns: 'modules/common/Columns.sb',
			},
			apiOptions: {
				region: 'us',
			},
		}),
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
