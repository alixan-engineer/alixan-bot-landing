<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';

interface FeaturePageTopic {
	key: string;
	items?: readonly string[];
}

interface FeaturePageImages {
	light: readonly string[];
	dark: readonly string[];
}

interface FeatureLandingPageProps {
	translationKey: string;
	images: FeaturePageImages;
	topics: readonly FeaturePageTopic[];
}

const props = defineProps<FeatureLandingPageProps>();
const colorMode = useColorMode();

const currentImages = computed(
	() => props.images[colorMode.value === 'dark' ? 'dark' : 'light'],
);

const translation = (...path: string[]) =>
	[props.translationKey, ...path].join('.');
</script>

<template>
	<div class="mt-6">
		<Section class="max-w-container!">
			<div class="w-full">
				<IconButton
					:to="$localePath('/')"
					variant="ghost"
					size="lg"
					:tooltip="$t('actions.back')"
					:aria-label="$t('actions.back')"
				>
					<ArrowLeft />
				</IconButton>
			</div>

			<SectionHeader class="text-center">
				<SectionSubtitle>
					{{ $t(translation('subtitle')) }}
				</SectionSubtitle>
				<SectionTitle as="h1">
					{{ $t(translation('title')) }}
				</SectionTitle>
			</SectionHeader>

			<swiper-container
				free-mode
				scrollbar
				slides-per-view="auto"
				:space-between="16"
				class="w-full cursor-grab"
			>
				<swiper-slide
					v-for="(img, index) in currentImages"
					:key="img"
					class="w-[clamp(180px,52vw,240px)]"
				>
					<img
						:src="img"
						:alt="$t(translation('screenshotAlt'), { number: index + 1 })"
						width="430"
						height="932"
						:loading="index === 0 ? 'eager' : 'lazy'"
						class="size-full rounded-2xl border object-contain select-none"
					/>
				</swiper-slide>
			</swiper-container>

			<div class="w-full space-y-10">
				<section v-for="topic in topics" :key="topic.key" class="space-y-4">
					<div class="space-y-3">
						<h2 class="text-2xl font-bold tracking-tight md:text-3xl">
							{{ $t(translation('topics', topic.key, 'title')) }}
						</h2>
						<p
							class="text-base leading-7 text-muted-foreground md:text-lg md:leading-8"
						>
							{{ $t(translation('topics', topic.key, 'text')) }}
						</p>
					</div>

					<ul v-if="topic.items?.length" class="grid gap-3 md:grid-cols-2">
						<li
							v-for="item in topic.items"
							:key="item"
							class="rounded-2xl border bg-card p-4"
						>
							<h3 class="font-semibold">
								{{ $t(translation('topics', topic.key, 'items', item, 'title')) }}
							</h3>
							<p class="mt-1 leading-6 text-muted-foreground">
								{{ $t(translation('topics', topic.key, 'items', item, 'text')) }}
							</p>
						</li>
					</ul>
				</section>
			</div>
		</Section>
	</div>
</template>
