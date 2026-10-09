<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import darkAnalytics1 from '../../../assets/img/dark/analytics/1.webp';
import darkAnalytics2 from '../../../assets/img/dark/analytics/2.webp';
import darkAnalytics3 from '../../../assets/img/dark/analytics/3.webp';
import darkAnalytics4 from '../../../assets/img/dark/analytics/4.webp';
import darkAnalytics5 from '../../../assets/img/dark/analytics/5.webp';
import darkAnalytics6 from '../../../assets/img/dark/analytics/6.webp';
import darkDumping1 from '../../../assets/img/dark/dumping/1.webp';
import darkDumping2 from '../../../assets/img/dark/dumping/2.webp';
import darkDumping3 from '../../../assets/img/dark/dumping/3.webp';
import darkDumping4 from '../../../assets/img/dark/dumping/4.webp';
import darkDumping5 from '../../../assets/img/dark/dumping/5.webp';
import darkDumping6 from '../../../assets/img/dark/dumping/6.webp';
import darkMultiStore1 from '../../../assets/img/dark/multi-store/1.webp';
import darkMultiStore2 from '../../../assets/img/dark/multi-store/2.webp';
import darkMultiStore3 from '../../../assets/img/dark/multi-store/3.webp';
import darkStocks1 from '../../../assets/img/dark/stocks/1.webp';
import darkStocks2 from '../../../assets/img/dark/stocks/2.webp';
import darkSyncProducts1 from '../../../assets/img/dark/sync-products/1.webp';
import darkSyncProducts2 from '../../../assets/img/dark/sync-products/2.webp';
import darkSyncProducts3 from '../../../assets/img/dark/sync-products/3.webp';
import darkTelegram1 from '../../../assets/img/dark/tg/1.webp';
import darkTelegram2 from '../../../assets/img/dark/tg/2.webp';
import darkTelegram3 from '../../../assets/img/dark/tg/3.webp';
import lightAnalytics1 from '../../../assets/img/light/analytics/1.webp';
import lightAnalytics2 from '../../../assets/img/light/analytics/2.webp';
import lightAnalytics3 from '../../../assets/img/light/analytics/3.webp';
import lightAnalytics4 from '../../../assets/img/light/analytics/4.webp';
import lightAnalytics5 from '../../../assets/img/light/analytics/5.webp';
import lightAnalytics6 from '../../../assets/img/light/analytics/6.webp';
import lightDumping1 from '../../../assets/img/light/dumping/1.webp';
import lightDumping2 from '../../../assets/img/light/dumping/2.webp';
import lightDumping3 from '../../../assets/img/light/dumping/3.webp';
import lightDumping4 from '../../../assets/img/light/dumping/4.webp';
import lightDumping5 from '../../../assets/img/light/dumping/5.webp';
import lightDumping6 from '../../../assets/img/light/dumping/6.webp';
import lightMultiStore1 from '../../../assets/img/light/multi-stores/1.webp';
import lightMultiStore2 from '../../../assets/img/light/multi-stores/2.webp';
import lightMultiStore3 from '../../../assets/img/light/multi-stores/3.webp';
import lightStocks1 from '../../../assets/img/light/stocks/1.webp';
import lightStocks2 from '../../../assets/img/light/stocks/2.webp';
import lightSyncProducts1 from '../../../assets/img/light/sync-products/1.webp';
import lightSyncProducts2 from '../../../assets/img/light/sync-products/2.webp';
import lightSyncProducts3 from '../../../assets/img/light/sync-products/3.webp';
import lightTelegram1 from '../../../assets/img/light/tg/1.webp';
import lightTelegram2 from '../../../assets/img/light/tg/2.webp';
import lightTelegram3 from '../../../assets/img/light/tg/3.webp';

const colorMode = useColorMode();

const images = {
	light: {
		dumping: [
			lightDumping1,
			lightDumping2,
			lightDumping3,
			lightDumping4,
			lightDumping5,
			lightDumping6,
		],
		multiStore: [lightMultiStore1, lightMultiStore2, lightMultiStore3],
		stocks: [lightStocks1, lightStocks2],
		syncProducts: [lightSyncProducts1, lightSyncProducts2, lightSyncProducts3],
		telegram: [lightTelegram1, lightTelegram2, lightTelegram3],
		analytics: [
			lightAnalytics6,
			lightAnalytics1,
			lightAnalytics2,
			lightAnalytics3,
			lightAnalytics4,
			lightAnalytics5,
		],
	},
	dark: {
		dumping: [
			darkDumping1,
			darkDumping2,
			darkDumping3,
			darkDumping4,
			darkDumping5,
			darkDumping6,
		],
		multiStore: [darkMultiStore1, darkMultiStore2, darkMultiStore3],
		stocks: [darkStocks1, darkStocks2],
		syncProducts: [darkSyncProducts1, darkSyncProducts2, darkSyncProducts3],
		telegram: [darkTelegram1, darkTelegram2, darkTelegram3],
		analytics: [
			darkAnalytics6,
			darkAnalytics1,
			darkAnalytics2,
			darkAnalytics3,
			darkAnalytics4,
			darkAnalytics5,
		],
	},
};

const currentImages = computed(
	() => images[colorMode.value === 'dark' ? 'dark' : 'light'],
);

interface FeatureItem {
	subtitle: string;
	title: string;
	text: string;
	img: string[];
	to?: string;
}

const list = computed<FeatureItem[]>(() => [
	{
		subtitle: 'features.priceBot.subtitle',
		title: 'features.priceBot.title',
		text: 'features.priceBot.text',
		img: currentImages.value.dumping,
		to: '/features/price-bot',
	},
	{
		subtitle: 'features.stockManagement.subtitle',
		title: 'features.stockManagement.title',
		text: 'features.stockManagement.text',
		img: currentImages.value.stocks,
		to: '/features/stock-management',
	},
	{
		subtitle: 'features.analytics.subtitle',
		title: 'features.analytics.title',
		text: 'features.analytics.text',
		img: currentImages.value.analytics,
		to: '/features/analytics',
	},
	{
		subtitle: 'features.multiStore.subtitle',
		title: 'features.multiStore.title',
		text: 'features.multiStore.text',
		img: currentImages.value.multiStore,
		to: '/features/multi-store',
	},
	{
		subtitle: 'features.syncProducts.subtitle',
		title: 'features.syncProducts.title',
		text: 'features.syncProducts.text',
		img: currentImages.value.syncProducts,
		to: '/features/product-sync',
	},
	{
		subtitle: 'features.telegramOrders.subtitle',
		title: 'features.telegramOrders.title',
		text: 'features.telegramOrders.text',
		img: currentImages.value.telegram,
		to: '/features/telegram-orders',
	},
]);
</script>

<template>
	<Section v-for="(item, i) in list" :key="i">
		<SectionHeader class="space-y-3">
			<SectionSubtitle>{{ $t(item.subtitle) }}</SectionSubtitle>
			<SectionTitle>{{ $t(item.title) }}</SectionTitle>
		</SectionHeader>

		<swiper-container
			free-mode
			scrollbar
			slides-per-view="auto"
			:space-between="16"
			class="w-full cursor-grab"
		>
			<swiper-slide
				v-for="(img, j) in item.img"
				:key="j"
				class="w-[clamp(180px,52vw,240px)]"
			>
				<img
					:src="img"
					:alt="$t('images.featureScreenshotAlt')"
					width="430"
					height="932"
					loading="lazy"
					class="size-full object-contain select-none border rounded-2xl"
				/>
			</swiper-slide>
		</swiper-container>

		<SectionText>{{ $t(item.text) }}</SectionText>

		<Button
			v-if="item.to"
			:to="$localePath(item.to)"
			label="actions.learnMore"
			variant="filled"
			size="responsive"
			color="primary"
		>
			<template #trailing>
				<ArrowRight />
			</template>
		</Button>
	</Section>
</template>
