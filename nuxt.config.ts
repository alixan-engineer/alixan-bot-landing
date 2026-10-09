import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './app/config/site/site';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devServer: { port: 5100 },
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/', '/en', '/kk'],
		},
	},
	app: {
		rootId: 'root',
	},
	components: [{ path: '~/components', pathPrefix: false }],
	css: ['~/assets/css/tailwind.css'],
	features: {
		inlineStyles: true,
	},
	vite: {
		plugins: [
			tailwindcss(),
			// ЕЩВЩ
			{
				name: 'i18n-scan-workaround',
				configResolved(config) {
					// Nuxt 4.6.0 adds i18n runtime files directly to Vite's scan.
					const options = config.environments.client?.optimizeDeps;
					if (options && Array.isArray(options.entries)) {
						options.entries = options.entries.filter(
							entry => !entry.replace(/\\/g, '/').includes('/node_modules/@nuxtjs/i18n/'),
						);
					}
				},
			},
		],
		// Work around Nuxt 4.6.0 / Vite 8 scanning i18n's #components import.
		optimizeDeps: {
			exclude: ['@nuxtjs/i18n'],
		},
	},
	modules: [
		'@nuxtjs/sitemap',
		'@nuxtjs/i18n',
		[
			'@nuxtjs/google-fonts',
			{
				download: false,
				useStylesheet: false,
				display: 'swap',
				families: {
					Inter: { wght: '200..900' },
				},
			},
		],
		'@nuxtjs/color-mode',
		'nuxt-lottie',
		'nuxt-swiper',
	],
	site: {
		url: siteConfig.url,
		name: siteConfig.name,
	},
	sitemap: {
		autoLastmod: true,
	},
	i18n: {
		vueI18n: './configs/i18n.config.ts',
		defaultLocale: 'ru',
		strategy: 'prefix_except_default',
		detectBrowserLanguage: false,
		locales: [
			{ code: 'en', name: 'English', file: 'en.json' },
			{ code: 'ru', name: 'Русский', file: 'ru.json' },
			{ code: 'kk', name: 'Қазақша', file: 'kk.json' },
		],
	},
	colorMode: {
		preference: 'system',
		fallback: 'light',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storage: 'cookie',
		storageKey: 'nuxt-color-mode',
	},
	lottie: {
		componentName: 'Lottie',
		lottieFolder: '/assets/lottie',
		autoFolderCreation: true,
	},
});
