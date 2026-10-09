<script setup lang="ts">
import darkMultiStore1 from '~/assets/img/dark/multi-store/1.webp';
import darkMultiStore2 from '~/assets/img/dark/multi-store/2.webp';
import darkMultiStore3 from '~/assets/img/dark/multi-store/3.webp';
import lightMultiStore1 from '~/assets/img/light/multi-stores/1.webp';
import lightMultiStore2 from '~/assets/img/light/multi-stores/2.webp';
import lightMultiStore3 from '~/assets/img/light/multi-stores/3.webp';

usePageMeta({
	title: 'featurePages.multiStore.seo.title',
	description: 'featurePages.multiStore.seo.description',
});

const images = {
	light: [lightMultiStore1, lightMultiStore2, lightMultiStore3],
	dark: [darkMultiStore1, darkMultiStore2, darkMultiStore3],
};

const topics = [
	{ key: 'onePanel' },
	{ key: 'sharedProducts' },
	{ key: 'mainStore' },
	{ key: 'storeControl' },
	{ key: 'connectionStatus' },
];
</script>

<template>
	<FeatureLandingPage
		translation-key="featurePages.multiStore"
		:images="images"
		:topics="topics"
	/>
</template>
