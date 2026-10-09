<script setup lang="ts">
import darkStock1 from '~/assets/img/dark/stocks/1.webp';
import darkStock2 from '~/assets/img/dark/stocks/2.webp';
import lightStock1 from '~/assets/img/light/stocks/1.webp';
import lightStock2 from '~/assets/img/light/stocks/2.webp';

usePageMeta({
	title: 'featurePages.stockManagement.seo.title',
	description: 'featurePages.stockManagement.seo.description',
});

const images = {
	light: [lightStock1, lightStock2],
	dark: [darkStock1, darkStock2],
};

const topics = [
	{ key: 'howItWorks' },
	{ key: 'oneSetting' },
	{ key: 'singleProduct' },
	{ key: 'purchaseLimit' },
];
</script>

<template>
	<FeatureLandingPage
		translation-key="featurePages.stockManagement"
		:images="images"
		:topics="topics"
	/>
</template>
