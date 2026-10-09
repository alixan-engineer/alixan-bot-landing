<script setup lang="ts">
import darkAnalytics1 from '~/assets/img/dark/analytics/1.webp';
import darkAnalytics2 from '~/assets/img/dark/analytics/2.webp';
import darkAnalytics3 from '~/assets/img/dark/analytics/3.webp';
import darkAnalytics4 from '~/assets/img/dark/analytics/4.webp';
import darkAnalytics5 from '~/assets/img/dark/analytics/5.webp';
import darkAnalytics6 from '~/assets/img/dark/analytics/6.webp';
import lightAnalytics1 from '~/assets/img/light/analytics/1.webp';
import lightAnalytics2 from '~/assets/img/light/analytics/2.webp';
import lightAnalytics3 from '~/assets/img/light/analytics/3.webp';
import lightAnalytics4 from '~/assets/img/light/analytics/4.webp';
import lightAnalytics5 from '~/assets/img/light/analytics/5.webp';
import lightAnalytics6 from '~/assets/img/light/analytics/6.webp';

usePageMeta({
	title: 'featurePages.analytics.seo.title',
	description: 'featurePages.analytics.seo.description',
});

const images = {
	light: [
		lightAnalytics6,
		lightAnalytics1,
		lightAnalytics2,
		lightAnalytics3,
		lightAnalytics4,
		lightAnalytics5,
	],
	dark: [
		darkAnalytics6,
		darkAnalytics1,
		darkAnalytics2,
		darkAnalytics3,
		darkAnalytics4,
		darkAnalytics5,
	],
};

const topics = [
	{ key: 'orders' },
	{ key: 'months' },
	{ key: 'weekdays' },
	{ key: 'hours' },
	{ key: 'popularProducts' },
];
</script>

<template>
	<FeatureLandingPage
		translation-key="featurePages.analytics"
		:images="images"
		:topics="topics"
	/>
</template>
