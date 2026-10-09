<script setup lang="ts">
usePageMeta({
	title: 'legal.privacyPolicy.seo.title',
	description: 'legal.privacyPolicy.seo.description',
});

const sections = [
	{ key: 'information', listType: 'ul', itemCount: 6, afterCount: 1 },
	{
		key: 'purposes',
		beforeCount: 1,
		listType: 'ul',
		itemCount: 5,
		afterCount: 1,
	},
	{ key: 'sources', beforeCount: 2 },
	{ key: 'crossBorder', beforeCount: 1 },
	{ key: 'retention', beforeCount: 1 },
	{ key: 'security', beforeCount: 1 },
	{
		key: 'rights',
		beforeCount: 1,
		listType: 'ul',
		itemCount: 4,
		afterCount: 1,
	},
	{ key: 'cookies', beforeCount: 1 },
	{ key: 'thirdPartyData', beforeCount: 1 },
	{ key: 'changes', beforeCount: 1 },
] as const;
</script>

<template>
	<LegalPage
		translation-key="legal.privacyPolicy"
		:intro-count="2"
		:sections="sections"
	/>
</template>
