<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';

const list = [
 { key: 'priceBot', to: '/features/price-bot' },
 { key: 'stockManagement', to: '/features/stock-management' },
 { key: 'analytics', to: '/features/analytics' },
 { key: 'multiStore', to: '/features/multi-store' },
 { key: 'syncProducts', to: '/features/product-sync' },
 { key: 'telegramOrders', to: '/features/telegram-orders' },
];
</script>

<template>
 <Section id="features" class="max-w-container!">
  <SectionHeader class="space-y-3">
   <SectionSubtitle>{{ $t('features.subtitle') }}</SectionSubtitle>
   <SectionTitle>{{ $t('features.title') }}</SectionTitle>
  </SectionHeader>
  <div class="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
   <article v-for="item in list" :key="item.key"
    class="group flex min-w-0 flex-col overflow-hidden rounded-3xl border bg-card transition duration-200 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg">
    <div class="flex flex-1 flex-col gap-4 p-6">
     <p class="text-base font-medium leading-relaxed text-muted-foreground">{{ $t('features.' + item.key + '.subtitle') }}</p>
     <h3 class="text-2xl font-bold tracking-tight">{{ $t('features.' + item.key + '.title') }}</h3>
     <p class="text-sm leading-relaxed text-muted-foreground">{{ $t('features.' + item.key + '.text') }}</p>
     <div class="mt-auto pt-2">
      <Button :to="$localePath(item.to)" variant="filled" color="secondary" label="actions.learnMore" class="w-fit" :aria-label="$t('actions.learnMore') + ': ' + $t('features.' + item.key + '.title')">
       <template #trailing><ArrowRight /></template>
      </Button>
     </div>
    </div>
    <FeaturePreview :feature="item.key" />
   </article>
  </div>
 </Section>
</template>
