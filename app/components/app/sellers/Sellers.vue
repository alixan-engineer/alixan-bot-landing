<script setup lang="ts">
const sellerNames = [
	'Mishki.kz',
	'Clubnika.kz',
	'Qazaq Market',
	'Smart Choice',
	'Medali.kz',
	'Besure.kz',
	'1KZ',
	'Comfort Shop',
	'Pro Market',
];
</script>

<template>
	<Section>
		<SectionTitle>
			<i18n-t keypath="sellers.title" tag="span">
				<template #count><span class="text-primary">50+</span></template>
			</i18n-t>
		</SectionTitle>

		<div class="w-full relative overflow-hidden select-none seller-marquee">
			<div class="seller-marquee__track">
				<div v-for="copy in 2" :key="copy" class="flex">
					<SectionSubtitle
						v-for="(seller, i) in sellerNames"
						:key="i"
						class="mx-7 uppercase"
					>
						{{ seller }}
					</SectionSubtitle>
				</div>
			</div>
		</div>
	</Section>
</template>

<style scoped>
.seller-marquee {
	padding-block: 0.5rem;
}

.seller-marquee::before,
.seller-marquee::after {
	position: absolute;
	top: 0;
	z-index: 1;
	width: clamp(2rem, 7vw, 6rem);
	height: 100%;
	content: '';
	pointer-events: none;
}

.seller-marquee::before {
	left: 0;
	background: linear-gradient(to right, var(--background), transparent);
}

.seller-marquee::after {
	right: 0;
	background: linear-gradient(to left, var(--background), transparent);
}

.seller-marquee__track {
	display: flex;
	width: max-content;
	animation: seller-marquee 28s linear infinite;
}

@keyframes seller-marquee {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50%);
	}
}

@media (prefers-reduced-motion: reduce) {
	.seller-marquee__track {
		animation-play-state: paused;
	}
}
</style>
