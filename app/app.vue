<script setup lang="ts">
import { favicon } from './config/site/favicon';
import { siteConfig } from './config/site/site';

const { locale } = useI18n();
const route = useRoute();

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const logoUrl = new URL(siteConfig.logo, siteConfig.url).href;

const structuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'WebSite',
			'@id': websiteId,
			url: `${siteConfig.url}/`,
			name: siteConfig.name,
			alternateName: siteConfig.alternateName,
			publisher: { '@id': organizationId },
			inLanguage: ['ru', 'kk', 'en'],
		},
		{
			'@type': 'Organization',
			'@id': organizationId,
			name: siteConfig.name,
			alternateName: siteConfig.alternateName,
			url: `${siteConfig.url}/`,
			logo: {
				'@type': 'ImageObject',
				url: logoUrl,
				contentUrl: logoUrl,
				width: 512,
				height: 512,
			},
			telephone: siteConfig.organization.telephone,
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: siteConfig.organization.telephone,
				contactType: 'customer support',
				areaServed: 'KZ',
				availableLanguage: ['Russian', 'Kazakh'],
			},
			sameAs: [
				siteConfig.organization.instagram,
				siteConfig.organization.tiktok,
			],
			founder: {
				'@type': 'Person',
				name: siteConfig.organization.founder.name,
				alternateName: siteConfig.organization.founder.alternateName,
				url: siteConfig.organization.founder.url,
			},
		},
	],
};

// Init default meta SEO tags
usePageMeta();

// Init lang and favicon for html
useHead(() => ({
	htmlAttrs: { lang: locale.value },
	link: favicon,
	script:
		route.path === '/'
			? [
					{
						id: 'site-structured-data',
						type: 'application/ld+json',
						innerHTML: JSON.stringify(structuredData),
					},
				]
			: [],
}));
</script>

<template>
	<NuxtLayout />

	<DialogHost />
</template>
