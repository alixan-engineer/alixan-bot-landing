<script setup lang="ts">
usePageMeta({
	title: 'legal.userAgreement.seo.title',
	description: 'legal.userAgreement.seo.description',
});

const sections = [
	{
		key: 'purpose',
		beforeCount: 1,
		listType: 'ul',
		itemCount: 5,
		afterCount: 1,
	},
	{ key: 'availability', beforeCount: 1 },
	{ key: 'account', listType: 'ol', itemCount: 5 },
	{ key: 'pricing', beforeCount: 2 },
	{
		key: 'rules',
		beforeCount: 1,
		listType: 'ul',
		itemCount: 5,
	},
	{ key: 'intellectualProperty', beforeCount: 1 },
	{ key: 'warranties', beforeCount: 1 },
	{ key: 'liability', beforeCount: 1 },
	{ key: 'thirdPartyClaims', beforeCount: 1 },
	{ key: 'personalData', beforeCount: 1 },
	{ key: 'termination', beforeCount: 1 },
	{ key: 'changes', beforeCount: 1 },
	{ key: 'law', beforeCount: 1 },
] as const;
</script>

<template>
	<LegalPage
		translation-key="legal.userAgreement"
		:intro-count="2"
		:sections="sections"
	/>
</template>
