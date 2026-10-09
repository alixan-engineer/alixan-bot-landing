<script setup lang="ts">
interface SectionTitleProps {
	as?: 'h1' | 'h2' | 'p';
}

const props = withDefaults(defineProps<SectionTitleProps>(), {
	as: 'h2',
});
</script>

<template>
	<component
		:is="props.as"
		class="max-md:text-3xl md:text-4xl lg:text-5xl font-black text-center text-balance whitespace-pre-line"
	>
		<slot />
	</component>
</template>
