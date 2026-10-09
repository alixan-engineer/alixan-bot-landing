<script setup lang="ts">
const scrollContainer = ref<HTMLElement | null>(null);

provide('scaffold-scroll-container', scrollContainer);
</script>

<template>
	<div class="size-full flex flex-col">
		<div class="flex-1 relative">
			<div
				ref="scrollContainer"
				class="absolute inset-0 z-0 overflow-y-auto"
			>
				<slot name="app-bar" />
				<slot name="body" />
			</div>
		</div>

		<slot name="bottom-navigation-bar" />
	</div>
</template>
