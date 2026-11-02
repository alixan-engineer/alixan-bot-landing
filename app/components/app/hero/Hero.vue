<script setup lang="ts">
import { Sparkles, Zap } from '@lucide/vue';

const list = [
	'hero.benefits.freeTrial',
	'hero.benefits.cancelAnytime',
	'hero.benefits.alwaysOn',
];
</script>

<template>
	<div aria-hidden="true" class="hero-art absolute inset-x-0 -z-10 h-150 pointer-events-none" />

	<div class="w-full border-y">
		<div
			class="max-w-section h-150 mx-auto flex flex-col items-center justify-center gap-section"
		>
			<div
				class="max-md:px-3 max-md:py-1 md:px-5 md:py-2.5 flex items-center max-md:gap-1.5 md:gap-2.5 bg-accent text-accent-foreground border rounded-3xl"
			>
				<Sparkles class="max-md:size-4" />
				<span class="max-md:text-sm md:text-base font-medium">
					{{ $t('hero.badge') }}
				</span>
			</div>

			<SectionTitle as="h1">
				{{ $t('hero.heading') }}
			</SectionTitle>

			<SectionSubtitle class="text-foreground/80!">
				{{ $t('hero.description') }}
			</SectionSubtitle>

			<SendFormButton label="hero.button">
				<Zap />
			</SendFormButton>

			<div
				class="flex items-center justify-center gap-x-5 gap-y-2 max-xl:flex-col max-xl:items-start"
			>
				<div
					v-for="(tile, i) in list"
					:key="i"
					class="flex items-center gap-2.5"
				>
					<div class="max-md:size-1.5 md:size-2.5 rounded-full bg-primary" />
					<span
						class="max-md:text-sm md:text-xm font-medium text-foreground/80"
					>
						{{ $t(tile) }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.hero-art {
 background: radial-gradient(ellipse at 50% 15%, color-mix(in srgb, var(--foreground) 7%, transparent), transparent 65%),
 repeating-linear-gradient(90deg, transparent, transparent 79px, color-mix(in srgb, var(--foreground) 3%, transparent) 80px);
}
</style>
