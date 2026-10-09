import { siteConfig } from '~/config/site/site';

interface PageMetaOptions {
	title?: string;
	description?: string;
	img?: string;
}

export const usePageMeta = (payload?: PageMetaOptions): void => {
	const { locale, locales, t } = useI18n();
	const route = useRoute();
	const switchLocalePath = useSwitchLocalePath();

	const metaTitle = computed(() => t(payload?.title || siteConfig.title));
	const metaDescription = computed(() =>
		t(payload?.description || siteConfig.description),
	);
	const canonicalUrl = computed(() => new URL(route.path, siteConfig.url).href);
	const metaImage = computed(
		() => new URL(payload?.img || siteConfig.ogImage, siteConfig.url).href,
	);
	const ogLocale = computed(
		() =>
			siteConfig.locales[
				locale.value as keyof typeof siteConfig.locales
			] ||
			siteConfig.locales[siteConfig.defaultLocale],
	);
	const alternateLocales = computed(() =>
		route.meta.i18n === false
			? []
			: locales.value.filter(({ code }) => code !== locale.value),
	);
	const alternateLinks = computed(() => {
		if (route.meta.i18n === false) return [];

		return [
			...locales.value.map(({ code }) => ({
				rel: 'alternate' as const,
				hreflang: code,
				href: new URL(switchLocalePath(code), siteConfig.url).href,
			})),
			{
				rel: 'alternate' as const,
				hreflang: 'x-default',
				href: new URL(
					switchLocalePath(siteConfig.defaultLocale),
					siteConfig.url,
				).href,
			},
		];
	});

	useSeoMeta({
		title: () => metaTitle.value,
		description: () => metaDescription.value,
		ogType: 'website',
		ogSiteName: siteConfig.name,
		ogTitle: () => metaTitle.value,
		ogDescription: () => metaDescription.value,
		ogUrl: () => canonicalUrl.value,
		ogLocale: () => ogLocale.value,
		ogLocaleAlternate: () =>
			alternateLocales.value.map(
				({ code }) =>
					siteConfig.locales[code as keyof typeof siteConfig.locales],
			),
		ogImage: () => metaImage.value,
		ogImageAlt: () => t('seo.ogImageAlt'),
		ogImageWidth: 1200,
		ogImageHeight: 630,
		ogImageType: 'image/png',
		twitterCard: 'summary_large_image',
		twitterTitle: () => metaTitle.value,
		twitterDescription: () => metaDescription.value,
		twitterImage: () => metaImage.value,
		twitterImageAlt: () => t('seo.ogImageAlt'),
	});

	useHead(() => ({
		link: [
			{ rel: 'canonical', href: canonicalUrl.value },
			...alternateLinks.value,
		],
	}));
};
