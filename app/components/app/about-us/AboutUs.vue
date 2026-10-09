<script setup lang="ts">
const team = [
	{
		name: 'aboutUs.team.alikhan.name',
		meta: 'aboutUs.team.alikhan.meta',
		description: 'aboutUs.team.alikhan.description',
		image: '/about-us/1.webp',
	},
	{
		name: 'aboutUs.team.aizhan.name',
		meta: 'aboutUs.team.aizhan.meta',
		description: 'aboutUs.team.aizhan.description',
		image: '/about-us/2.webp',
	},
];
</script>

<template>
	<Section>
		<SectionHeader class="space-y-1.5">
			<SectionSubtitle>{{ $t('aboutUs.subtitle') }}</SectionSubtitle>
			<SectionTitle>{{ $t('aboutUs.title') }}</SectionTitle>
		</SectionHeader>

		<div class="grid grid-cols-2 gap-4 max-lg:hidden">
			<article
				v-for="member in team"
				:key="member.name"
				class="bg-card text-card-foreground border rounded-4xl"
			>
				<img
					:src="member.image"
					:alt="$t('aboutUs.photoAlt', { name: $t(member.name) })"
					width="900"
					height="900"
					loading="lazy"
					class="aspect-square object-cover rounded-4xl"
				/>
				<div class="p-5 md:p-7 space-y-2">
					<p class="text-lg font-medium text-muted-foreground md:text-xl">
						{{ $t(member.meta) }}
					</p>
					<h3 class="text-2xl font-bold tracking-tight md:text-3xl">
						{{ $t(member.name) }}
					</h3>
					<p class="text-base leading-7 text-muted-foreground md:text-lg">
						{{ $t(member.description) }}
					</p>
				</div>
			</article>
		</div>

		<swiper-container
			free-mode
			slides-per-view="auto"
			:space-between="8"
			class="w-full cursor-grab lg:hidden"
		>
			<swiper-slide
				v-for="member in team"
				:key="member.name"
				class="max-md:w-80 md:w-100"
			>
				<article class="bg-card text-card-foreground border rounded-4xl">
					<img
						:src="member.image"
						:alt="$t('aboutUs.photoAlt', { name: $t(member.name) })"
						width="900"
						height="900"
						loading="lazy"
						class="aspect-square object-cover rounded-4xl"
					/>
					<div class="p-5 md:p-7 space-y-2">
						<p class="text-lg font-medium text-muted-foreground md:text-xl">
							{{ $t(member.meta) }}
						</p>
						<h3 class="text-2xl font-bold tracking-tight md:text-3xl">
							{{ $t(member.name) }}
						</h3>
						<p class="text-base leading-7 text-muted-foreground md:text-lg">
							{{ $t(member.description) }}
						</p>
					</div>
				</article>
			</swiper-slide>
		</swiper-container>
	</Section>
</template>
