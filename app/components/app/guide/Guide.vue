<script setup lang="ts">
const steps = [
	{
		title: 'guide.steps.request.title',
		description: 'guide.steps.request.description',
	},
	{
		title: 'guide.steps.connect.title',
		description: 'guide.steps.connect.description',
	},
	{
		title: 'guide.steps.ready.title',
		description: 'guide.steps.ready.description',
	},
];
</script>

<template>
	<section
		class="relative lg:my-30 md:my-20 max-md:my-18 text-primary-foreground"
	>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-x-0 inset-y-3 bg-primary"
		/>

		<div class="relative z-1 mx-auto max-w-6xl px-4 py-14 md:py-16">
			<SectionTitle class="md:mb-12 max-md:mb-8">
				{{ $t('guide.title') }}
			</SectionTitle>

			<ol class="grid gap-9 md:grid-cols-3 md:gap-0">
				<li
					v-for="(step, index) in steps"
					:key="step.title"
					class="relative flex flex-col items-center px-5 text-center"
				>
					<div
						v-if="index < steps.length - 1"
						aria-hidden="true"
						class="absolute left-[calc(50%+3.5rem)] right-[calc(-50%+3.5rem)] top-7 hidden border-t-5 border-primary-foreground border-dotted md:block"
					/>
					<div
						class="relative z-1 mb-4 flex size-12 items-center justify-center rounded-full bg-primary-foreground text-2xl font-extrabold text-primary"
					>
						{{ index + 1 }}
					</div>
					<h3 class="text-lg font-bold">{{ $t(step.title) }}</h3>
					<p class="max-w-72 text-md font-medium leading-6">
						{{ $t(step.description) }}
					</p>
				</li>
			</ol>
		</div>
		<svg
			aria-hidden="true"
			class="pointer-events-none absolute -top-3 left-0 h-6 w-full text-primary"
			width="100%"
			height="24"
		>
			<defs>
				<pattern
					id="guide-wave-top"
					width="100"
					height="24"
					patternUnits="userSpaceOnUse"
				>
					<path
						d="M0 12C12.5 0 37.5 0 50 12s37.5 12 50 0v12H0Z"
						fill="currentColor"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="24" fill="url(#guide-wave-top)" />
		</svg>
		<svg
			aria-hidden="true"
			class="pointer-events-none absolute -bottom-3 left-0 h-6 w-full rotate-180 text-primary"
			width="100%"
			height="24"
		>
			<defs>
				<pattern
					id="guide-wave-bottom"
					width="100"
					height="24"
					patternUnits="userSpaceOnUse"
				>
					<path
						d="M0 12C12.5 0 37.5 0 50 12s37.5 12 50 0v12H0Z"
						fill="currentColor"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="24" fill="url(#guide-wave-bottom)" />
		</svg>
	</section>
</template>
