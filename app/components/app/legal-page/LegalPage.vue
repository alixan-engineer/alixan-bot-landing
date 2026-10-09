<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';

interface LegalSection {
	key: string;
	beforeCount?: number;
	listType?: 'ol' | 'ul';
	itemCount?: number;
	afterCount?: number;
}

interface LegalPageProps {
	translationKey: string;
	introCount: number;
	sections: readonly LegalSection[];
}

const props = defineProps<LegalPageProps>();

const translation = (...path: Array<string | number>) =>
	[props.translationKey, ...path].join('.');
</script>

<template>
	<article class="mx-auto max-w-container px-4 py-6">
		<IconButton
			:to="$localePath('/')"
			variant="ghost"
			size="lg"
			:tooltip="$t('actions.back')"
			:aria-label="$t('actions.back')"
		>
			<ArrowLeft />
		</IconButton>

		<header class="mt-6 border-b pb-8">
			<h1 class="text-3xl font-bold tracking-tight md:text-5xl">
				{{ $t(translation('title')) }}
			</h1>
		</header>

		<div
			class="mt-8 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight md:[&_h2]:text-2xl [&_li]:leading-7 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:my-3 [&_p]:leading-7 [&_p]:text-foreground/85 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
		>
			<i18n-t
				v-for="index in introCount"
				:key="translation('intro', `p${index}`)"
				tag="p"
				:keypath="translation('intro', `p${index}`)"
			/>

			<section v-for="section in sections" :key="section.key">
				<h2>{{ $t(translation('sections', section.key, 'title')) }}</h2>

				<i18n-t
					v-for="index in section.beforeCount ?? 0"
					:key="translation('sections', section.key, 'before', `p${index}`)"
					tag="p"
					:keypath="translation('sections', section.key, 'before', `p${index}`)"
				>
					<template #privacyPolicy>
						<NuxtLink :to="$localePath('/privacy-policy')">
							{{ $t('legal.privacyPolicy.title') }}
						</NuxtLink>
					</template>
				</i18n-t>

				<component
					:is="section.listType || 'ul'"
					v-if="section.listType && section.itemCount"
				>
					<li v-for="index in section.itemCount" :key="index">
						{{ $t(translation('sections', section.key, 'items', `item${index}`)) }}
					</li>
				</component>

				<i18n-t
					v-for="index in section.afterCount ?? 0"
					:key="translation('sections', section.key, 'after', `p${index}`)"
					tag="p"
					:keypath="translation('sections', section.key, 'after', `p${index}`)"
				/>
			</section>
		</div>
	</article>
</template>
