<script setup lang="ts">
defineProps<{ isFooter?: boolean }>();
</script>

<template>
	<NuxtLink
		:to="$localePath('/')"
		:class="
			cn('flex gap-3 select-none', isFooter ? 'items-start' : 'items-center')
		"
	>
		<img
			src="/icons/icon-512.webp"
			:alt="$t('images.logoAlt')"
			class="max-md:size-9 md:size-12 object-cover rounded-md"
			loading="lazy"
		/>
		<div>
			<span class="block max-md:text-lg md:text-2xl font-bold line-clamp-1">
				{{ $t('app.name') }}
			</span>
			<p
				v-if="isFooter"
				class="md:text-md max-md:text-sm text-muted-foreground whitespace-pre-line"
			>
				{{ $t('footer.tagline') }}
			</p>
		</div>
	</NuxtLink>
</template>
