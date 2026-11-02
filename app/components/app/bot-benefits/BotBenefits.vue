<script setup lang="ts">
import { ShoppingBag, ChartNoAxesCombined, Clock3, UserRound, Bot } from '@lucide/vue';

const metrics = [
 { key: 'sales', icon: ShoppingBag, beforeWidth: 14, afterWidth: 93 },
 { key: 'turnover', icon: ChartNoAxesCombined, beforeWidth: 12, afterWidth: 93 },
 { key: 'time', icon: Clock3, beforeWidth: 90, afterWidth: 2 },
];
</script>

<template>
 <Section id="why-bot" class="max-w-container!">
  <SectionHeader class="space-y-3">
   <SectionSubtitle>{{ $t('botBenefits.subtitle') }}</SectionSubtitle>
   <SectionTitle>{{ $t('botBenefits.title') }}</SectionTitle>
   <p class="mx-auto max-w-2xl text-center text-base leading-relaxed text-muted-foreground">{{ $t('botBenefits.description') }}</p>
  </SectionHeader>

  <div class="w-full overflow-hidden rounded-3xl border bg-card">
   <div class="flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3 md:px-8">
    <p class="text-xl font-bold tracking-tight md:text-2xl">{{ $t('botBenefits.month') }}</p>
    <span class="text-xs text-muted-foreground">{{ $t('botBenefits.demo') }}</span>
   </div>
   <div class="grid grid-cols-2 border-b">
    <div class="p-5 md:p-8">
     <h3 class="flex items-center gap-2 text-lg font-bold md:gap-3 md:text-2xl"><UserRound class="size-5 shrink-0 md:size-6" aria-hidden="true" />{{ $t('botBenefits.without') }}</h3>
    </div>
    <div class="border-l bg-secondary/60 p-5 md:p-8">
     <h3 class="flex items-center gap-2 text-lg font-bold md:gap-3 md:text-2xl"><Bot class="size-5 shrink-0 md:size-6" aria-hidden="true" />{{ $t('botBenefits.with') }}</h3>
    </div>
   </div>

   <div v-for="metric in metrics" :key="metric.key" class="grid grid-cols-2 border-b last:border-b-0">
    <div class="min-w-0 p-5 md:px-8 md:py-6">
     <p class="flex items-center gap-2 text-sm text-muted-foreground"><component :is="metric.icon" class="size-4 shrink-0" aria-hidden="true" />{{ $t('botBenefits.' + metric.key) }}</p>
     <p class="mt-3 text-xl font-bold tracking-tight tabular-nums text-muted-foreground sm:text-2xl md:text-3xl">{{ $t('botBenefits.values.' + metric.key + '.before') }}</p>
     <p v-if="metric.key === 'time'" class="mt-2 text-xs leading-relaxed text-muted-foreground">{{ $t('botBenefits.timeNotes.before') }}</p>
     <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true"><div class="h-full rounded-full bg-muted-foreground/40" :style="{ width: metric.beforeWidth + '%' }" /></div>
    </div>
    <div class="min-w-0 border-l bg-secondary/60 p-5 md:px-8 md:py-6">
     <p class="flex items-center gap-2 text-sm text-muted-foreground"><component :is="metric.icon" class="size-4 shrink-0" aria-hidden="true" />{{ $t('botBenefits.' + metric.key) }}</p>
     <p class="mt-3 text-xl font-bold tracking-tight tabular-nums sm:text-2xl md:text-3xl">{{ $t('botBenefits.values.' + metric.key + '.after') }}</p>
     <p v-if="metric.key === 'time'" class="mt-2 text-xs leading-relaxed text-muted-foreground">{{ $t('botBenefits.timeNotes.after') }}</p>
     <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true"><div class="h-full rounded-full bg-foreground" :style="{ width: metric.afterWidth + '%' }" /></div>
    </div>
   </div>
  </div>

 </Section>
</template>
