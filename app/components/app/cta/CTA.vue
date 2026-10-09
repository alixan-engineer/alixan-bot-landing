<script setup lang="ts">
import { Check, Plus } from '@lucide/vue';

const list = [
	'cta.benefits.fullAccess',
	'cta.benefits.noLimits',
	'cta.benefits.support',
	'cta.benefits.cancelAnytime',
] as const;
</script>

<template>
	<Section>
		<SectionHeader class="space-y-3">
			<SectionTitle>{{ $t('cta.title') }}</SectionTitle>
			<SectionSubtitle>{{ $t('cta.subtitle') }}</SectionSubtitle>
		</SectionHeader>

		<div
			class="w-full px-4 md:py-10 max-md:py-8 flex flex-col items-center justify-center md:gap-9 max-md:gap-7 border rounded-4xl bg-card text-card-foreground"
		>
			<div class="md:space-y-8 max-md:space-y-6">
				<SectionTitle as="p">
					{{ $t('cta.price') }}
				</SectionTitle>
				<div class="space-y-4">
					<div
						v-for="(item, i) in list"
						:key="i"
						class="flex items-center gap-3"
					>
						<div
							class="md:size-6 max-md:size-5 p-0.5 rounded-full flex items-center justify-center bg-primary text-primary-foreground"
						>
							<Check />
						</div>
						<span class="md:text-base max-md:text-sm">{{ $t(item) }}</span>
					</div>
				</div>
			</div>

			<SendFormButton label="cta.button">
				<Plus />
			</SendFormButton>
		</div>
	</Section>
</template>
