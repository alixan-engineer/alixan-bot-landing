<script setup lang="ts">
import darkTelegram1 from '~/assets/img/dark/tg/1.webp';
import darkTelegram2 from '~/assets/img/dark/tg/2.webp';
import darkTelegram3 from '~/assets/img/dark/tg/3.webp';
import lightTelegram1 from '~/assets/img/light/tg/1.webp';
import lightTelegram2 from '~/assets/img/light/tg/2.webp';
import lightTelegram3 from '~/assets/img/light/tg/3.webp';

usePageMeta({
	title: 'featurePages.telegramOrders.seo.title',
	description: 'featurePages.telegramOrders.seo.description',
});

const images = {
	light: [lightTelegram1, lightTelegram2, lightTelegram3],
	dark: [darkTelegram1, darkTelegram2, darkTelegram3],
};

const topics = [
	{ key: 'notifications' },
	{ key: 'orderDetails' },
	{ key: 'channels' },
	{ key: 'teamwork' },
	{ key: 'reliability' },
];
</script>

<template>
	<FeatureLandingPage
		translation-key="featurePages.telegramOrders"
		:images="images"
		:topics="topics"
	/>
</template>
