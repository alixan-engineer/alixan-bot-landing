<script setup lang="ts">
import type { Ref } from 'vue';

const isScrolled = ref(false);
const scrollContainer = inject<Ref<HTMLElement | null>>(
	'scaffold-scroll-container',
	ref(null),
);

const updateScrollState = (): void => {
	isScrolled.value = (scrollContainer.value?.scrollTop ?? 0) > 50;
};

onMounted(() => {
	updateScrollState();
	scrollContainer.value?.addEventListener('scroll', updateScrollState, {
		passive: true,
	});
});

onUnmounted(() => {
	scrollContainer.value?.removeEventListener('scroll', updateScrollState);
});
</script>

<template>
	<header
		class="max-md:h-16 md:h-24 border-b border-transparent sticky top-0 z-20 w-full transition-[background-color,border-color,box-shadow] duration-300"
		:class="{ 'site-header--scrolled': isScrolled }"
	>
		<div
			class="size-full max-w-container mx-auto px-4 flex items-center justify-between gap-4"
		>
			<Logo />
			<Button
				variant="outlined"
				color="secondary"
				size="responsive"
				href="https://kaspibot-app.alixan.kz/"
			>
				{{ $t('actions.signIn') }}
			</Button>
		</div>
	</header>
</template>

<style>
.site-header--scrolled {
	background: rgb(255 255 255 / 72%);
	border-bottom-color: rgb(15 23 42 / 10%);
	box-shadow: 0 12px 36px rgb(15 23 42 / 8%);
	-webkit-backdrop-filter: blur(18px) saturate(135%);
	backdrop-filter: blur(18px) saturate(135%);
}

.dark .site-header--scrolled {
	background: rgb(3 10 18 / 78%);
	border-bottom-color: rgb(123 211 255 / 13%);
	box-shadow: 0 12px 36px rgb(0 0 0 / 20%);
}
</style>
