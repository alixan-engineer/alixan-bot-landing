<script setup lang="ts">
import { Check, ChevronDown, Monitor, Moon, Sun } from '@lucide/vue';

const colorMode = useColorMode();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const themeMenuOpen = ref(false);
const languageMenuOpen = ref(false);

const themes = [
	{ value: 'system', label: 'user.themes.system' },
	{ value: 'light', label: 'user.themes.light' },
	{ value: 'dark', label: 'user.themes.dark' },
] as const;

const languages = [
	{ value: 'ru', label: 'user.languages.ru' },
	{ value: 'kk', label: 'user.languages.kk' },
	{ value: 'en', label: 'user.languages.en' },
] as const;

type Theme = (typeof themes)[number]['value'];

const themeIcon = computed(() => {
	if (colorMode.preference === 'system') return Monitor;
	return colorMode.preference === 'dark' ? Moon : Sun;
});

const selectTheme = (theme: Theme): void => {
	colorMode.preference = theme;
	themeMenuOpen.value = false;
};

const closeLanguageMenu = (): void => {
	languageMenuOpen.value = false;
};
</script>

<template>
	<footer class="min-h-24 py-8 border-t lg:space-y-20 md:space-y-18 max-md:space-y-14">
		<div class="max-w-container mx-auto px-4 space-y-6">
			<div
				class="flex md:items-center justify-between md:gap-3 max-md:gap-8 max-md:flex-col"
			>
				<Logo is-footer />
				<div class="grid grid-cols-2 gap-3">
					<DropdownMenu v-model:open="languageMenuOpen" position="bottomRight">
						<template #trigger>
							<Button size="responsive" variant="outlined" class="w-full">
								{{ $t('user.language') }}
								<template #trailing>
									<ChevronDown />
								</template>
							</Button>
						</template>

						<Button
							v-for="language in languages"
							:key="language.value"
							:to="switchLocalePath(language.value)"
							variant="ghost"
							class="w-full justify-start"
							@click="closeLanguageMenu"
						>
							{{ $t(language.label) }}
							<template #leading>
								<Check :class="cn(locale !== language.value && 'invisible')" />
							</template>
						</Button>
					</DropdownMenu>
					<DropdownMenu v-model:open="themeMenuOpen" position="bottomRight">
						<template #trigger>
							<Button size="responsive" variant="outlined" class="w-full">
								{{ $t('user.theme') }}
								<template #trailing>
									<ChevronDown />
								</template>
							</Button>
						</template>

						<Button
							v-for="theme in themes"
							:key="theme.value"
							variant="ghost"
							size="sm"
							class="w-full justify-start"
							@click="selectTheme(theme.value)"
						>
							<template #leading>
								<Check
									:class="
										cn(theme.value !== colorMode.preference && 'invisible')
									"
								/>
							</template>
							{{ $t(theme.label) }}
						</Button>
					</DropdownMenu>
				</div>
			</div>

			<nav
				class="w-full flex items-center justify-center max-md:gap-4 md:gap-4 max-md:text-sm md:text-md text-muted-foreground max-md:pt-3 max-md:pb-2"
			>
				<NuxtLink
					class="hover:underline hover:text-foreground whitespace-nowrap overflow-hidden text-ellipsis"
					:to="$localePath('/privacy-policy')"
				>
					{{ $t('footer.privacyPolicy') }}
				</NuxtLink>
				<hr class="w-0.5 h-6 bg-border" />
				<NuxtLink
					class="hover:underline hover:text-foreground whitespace-nowrap overflow-hidden text-ellipsis"
					:to="$localePath('/user-agreement')"
				>
					{{ $t('footer.userAgreement') }}
				</NuxtLink>
			</nav>

			<p
				class="max-md:text-md md:text-base lg:text-lg text-center text-muted-foreground"
			>
				{{ $t('footer.copyright', { year: 2026 }) }}
			</p>
		</div>
	</footer>
</template>
