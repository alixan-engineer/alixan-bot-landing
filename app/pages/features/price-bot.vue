<script setup lang="ts">
import darkDumping1 from '~/assets/img/dark/dumping/1.webp';
import darkDumping2 from '~/assets/img/dark/dumping/2.webp';
import darkDumping3 from '~/assets/img/dark/dumping/3.webp';
import darkDumping4 from '~/assets/img/dark/dumping/4.webp';
import darkDumping5 from '~/assets/img/dark/dumping/5.webp';
import darkDumping6 from '~/assets/img/dark/dumping/6.webp';
import lightDumping1 from '~/assets/img/light/dumping/1.webp';
import lightDumping2 from '~/assets/img/light/dumping/2.webp';
import lightDumping3 from '~/assets/img/light/dumping/3.webp';
import lightDumping4 from '~/assets/img/light/dumping/4.webp';
import lightDumping5 from '~/assets/img/light/dumping/5.webp';
import lightDumping6 from '~/assets/img/light/dumping/6.webp';

usePageMeta({
	title: 'featurePages.priceBot.seo.title',
	description: 'featurePages.priceBot.seo.description',
});

const images = {
	light: [
		lightDumping1,
		lightDumping2,
		lightDumping3,
		lightDumping4,
		lightDumping5,
		lightDumping6,
	],
	dark: [
		darkDumping1,
		darkDumping2,
		darkDumping3,
		darkDumping4,
		darkDumping5,
		darkDumping6,
	],
};

const topics = [
	{ key: 'howItWorks' },
	{ key: 'priceRange' },
	{ key: 'limit' },
	{ key: 'productControl' },
	{
		key: 'filters',
		items: [
			'all',
			'favorite',
			'active',
			'disabled',
			'draft',
			'problem',
			'belowMin',
			'atMin',
		],
	},
];
</script>

<template>
	<FeatureLandingPage
		translation-key="featurePages.priceBot"
		:images="images"
		:topics="topics"
	/>
</template>
