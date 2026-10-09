<script setup lang="ts">
const contacts = [
	{
		href: 'https://wa.me/+77056962383',
		icon: '/social-networks/wa.svg',
		alt: 'WhatsApp',
		label: '+7 705 696 2383',
	},
	{
		href: 'https://www.instagram.com/kaspi_bot_alixan',
		icon: '/social-networks/inst.svg',
		alt: 'Instagram',
		label: '@kaspi_bot_alixan',
	},
	{
		href: 'https://www.tiktok.com/@kaspi_bot_alixan',
		icon: '/social-networks/tt.svg',
		alt: 'TikTok',
		label: '@kaspi_bot_alixan',
	},
] as const;
</script>

<template>
	<Section>
		<SectionHeader>
			<SectionSubtitle>{{ $t('contacts.subtitle') }}</SectionSubtitle>
			<SectionTitle>{{ $t('contacts.title') }}</SectionTitle>
		</SectionHeader>

		<div
			class="w-full px-6 md:py-10 max-md:py-8 flex items-center justify-center flex-wrap md:gap-9 max-md:gap-7 border rounded-4xl bg-card text-card-foreground max-md:justify-start"
		>
			<a
				v-for="contact in contacts"
				:key="contact.href"
				:href="contact.href"
				target="_blank"
				class="flex items-center gap-3"
			>
				<img
					:src="contact.icon"
					:alt="contact.alt"
					width="56"
					height="56"
					loading="lazy"
					class="md:size-12 max-md:size-9 object-fill md:rounded-2xl max-md:rounded-xl"
				/>
				<span class="md:text-xm max-md:text-base font-medium">
					{{ contact.label }}
				</span>
			</a>
		</div>
	</Section>
</template>
