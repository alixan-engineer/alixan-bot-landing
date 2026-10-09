<script setup lang="ts">
import { Sparkles, Zap } from '@lucide/vue';
import mobileHeroImage from '../../../assets/img/abstract-devices.png';
import desktopHeroImage from '../../../assets/img/abstract.png';

const list = [
	'hero.benefits.freeTrial',
	'hero.benefits.cancelAnytime',
	'hero.benefits.alwaysOn',
];
</script>

<template>
	<picture
		class="hero-art absolute inset-x-0 -z-10 block h-150 overflow-hidden pointer-events-none"
	>
		<source media="(min-width: 1280px)" :srcset="desktopHeroImage" />
		<img
			:src="mobileHeroImage"
			:alt="$t('images.abstractAlt')"
			width="1122"
			height="1402"
			loading="eager"
			fetchpriority="high"
			class="size-full object-cover"
		/>
	</picture>

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
				<i18n-t keypath="hero.heading" tag="span">
					<template #brand><span class="text-primary">Kaspi.kz</span></template>
				</i18n-t>
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
@media (max-width: 1279px) {
	.hero-art {
		opacity: 0.65;
		-webkit-mask-image: radial-gradient(
			ellipse 72% 52% at center,
			transparent 28%,
			black 78%
		);
		mask-image: radial-gradient(
			ellipse 72% 52% at center,
			transparent 28%,
			black 78%
		);
	}
}

@media (max-width: 639px) {
	.hero-art {
		opacity: 0.5;
		-webkit-mask-image: radial-gradient(
			ellipse 82% 50% at center,
			transparent 36%,
			black 82%
		);
		mask-image: radial-gradient(
			ellipse 82% 50% at center,
			transparent 36%,
			black 82%
		);
	}
}
</style>
