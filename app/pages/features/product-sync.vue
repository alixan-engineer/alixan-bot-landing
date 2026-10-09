<script setup lang="ts">
import darkSync1 from '~/assets/img/dark/sync-products/1.webp';
import darkSync2 from '~/assets/img/dark/sync-products/2.webp';
import darkSync3 from '~/assets/img/dark/sync-products/3.webp';
import lightSync1 from '~/assets/img/light/sync-products/1.webp';
import lightSync2 from '~/assets/img/light/sync-products/2.webp';
import lightSync3 from '~/assets/img/light/sync-products/3.webp';

usePageMeta({
	title: 'featurePages.productSync.seo.title',
	description: 'featurePages.productSync.seo.description',
});

const images = {
	light: [lightSync1, lightSync2, lightSync3],
	dark: [darkSync1, darkSync2, darkSync3],
};

const topics = [
	{ key: 'purpose' },
	{ key: 'requirements' },
	{ key: 'safeRun' },
	{ key: 'progress' },
	{ key: 'manualControl' },
];
</script>

<template>
	<FeatureLandingPage
		translation-key="featurePages.productSync"
		:images="images"
		:topics="topics"
	/>
</template>
