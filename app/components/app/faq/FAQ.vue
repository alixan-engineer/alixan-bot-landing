<script setup lang="ts">
const activeItem = ref('');
const { t } = useI18n();

const items = computed(() => [
	{
		value: '1',
		title: t('faq.connect.title'),
		content: t('faq.connect.content'),
	},
	{
		value: '2',
		title: t('faq.productLimit.title'),
		content: t('faq.productLimit.content'),
	},
	{
		value: '3',
		title: t('faq.priceChangeLimit.title'),
		content: t('faq.priceChangeLimit.content'),
	},
]);
</script>

<template>
	<Section>
		<SectionTitle>FAQ</SectionTitle>
		<Accordion v-model="activeItem" :items="items" />
	</Section>
</template>
