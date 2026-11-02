<script setup lang="ts">
import { Check, ArrowDown, RefreshCw, Send } from '@lucide/vue';

defineProps<{ feature: string }>();
const bars = [32, 48, 38, 65, 52, 80, 70, 95, 78, 100, 88, 115];
</script>

<template>
 <div class="feature-preview h-64 overflow-hidden border-t bg-muted/50 p-5 select-none" aria-hidden="true">
  <div class="mx-auto min-h-64 max-w-80 rounded-2xl border bg-background p-4 shadow-lg">

   <div class="mb-3 flex items-center gap-3 border-b pb-3">
    <img src="/images/features/catalog-products.png" alt="" width="96" height="64" loading="lazy" decoding="async" class="h-12 w-18 rounded-lg bg-white object-cover" />
    <div class="min-w-0">
     <p class="truncate text-xs font-semibold">{{ $t('features.' + feature + '.title') }}</p>
     <p class="mt-1 text-[10px] text-muted-foreground">Alixan Bot · {{ $t('features.preview.live') }}</p>
    </div>
   </div>

   <template v-if="feature === 'priceBot'">
    <div class="flex items-center justify-between text-xs"><span>{{ $t('features.preview.product') }}</span><span class="rounded-md bg-secondary px-2 py-1">#1</span></div>
    <div class="my-4 flex items-end justify-between"><span class="text-2xl font-bold tabular-nums">24 990 ₸</span><span class="flex items-center gap-1 text-xs text-muted-foreground"><ArrowDown class="size-3" />500 ₸</span></div>
    <div class="flex justify-between rounded-lg bg-muted p-3 text-xs"><span>{{ $t('features.preview.minimum') }}</span><span>23 000 ₸</span></div>
    <p class="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Check class="size-3.5" />{{ $t('features.preview.priceUpdated') }}</p>
   </template>

   <template v-else-if="feature === 'stockManagement'">
    <div class="mb-4 flex justify-between text-xs text-muted-foreground"><span>{{ $t('features.preview.product') }}</span><span>{{ $t('features.preview.quantity') }}</span></div>
    <div v-for="(quantity, i) in [48, 125, 36]" :key="i" class="flex items-center justify-between border-t py-3 text-xs">
     <div class="flex items-center gap-2"><img src="/images/features/catalog-products.png" alt="" width="36" height="24" loading="lazy" class="h-6 w-9 rounded-md bg-white object-cover" />SKU-00{{ i + 1 }}</div>
     <span class="font-semibold tabular-nums">{{ quantity }} <Check class="ml-1 inline size-3" /></span>
    </div>
   </template>

   <template v-else-if="feature === 'analytics'">
    <p class="text-xs text-muted-foreground">{{ $t('features.preview.revenue') }}</p>
    <div class="mt-1 flex items-center justify-between"><span class="text-2xl font-bold tabular-nums">1 284 500 ₸</span><span class="rounded-md bg-secondary px-2 py-1 text-xs">+24%</span></div>
    <div class="mt-4 flex h-28 items-end gap-1.5 border-b">
     <div v-for="(height, i) in bars" :key="i" :style="{ height: height * 0.8 + '%' }" class="flex-1 rounded-t-sm bg-foreground/70" />
    </div>
   </template>

   <template v-else-if="feature === 'multiStore'">
    <div v-for="(total, i) in [248, 186, 94]" :key="i" class="mb-3 flex items-center gap-3 rounded-xl border p-3">
     <span class="flex size-8 items-center justify-center rounded-lg bg-secondary text-xs font-bold">0{{ i + 1 }}</span>
     <div class="flex-1"><p class="text-xs font-medium">{{ $t('features.preview.store') }} {{ i + 1 }}</p><p class="mt-1 text-[10px] text-muted-foreground">{{ total }} SKU</p></div>
     <Check class="size-4" />
    </div>
   </template>

   <template v-else-if="feature === 'syncProducts'">
    <div class="mb-4 flex items-center gap-2"><RefreshCw class="size-4" /><span class="text-xs font-medium">{{ $t('features.preview.sync') }}</span></div>
    <div class="flex justify-between text-xs"><span class="text-muted-foreground">{{ $t('features.preview.products') }}</span><span>248 / 248</span></div>
    <div class="my-3 h-2 rounded-full bg-secondary"><div class="h-full w-full rounded-full bg-foreground" /></div>
    <div v-for="i in 3" :key="i" class="flex items-center justify-between py-2 text-xs"><span>{{ $t('features.preview.store') }} {{ i }}</span><Check class="size-3.5" /></div>
   </template>

   <template v-else>
    <div class="rounded-xl border bg-muted/40 p-3">
     <p class="flex items-center gap-2 text-xs font-semibold"><Send class="size-3.5" />{{ $t('features.preview.newOrder') }}</p>
     <p class="my-3 text-lg font-bold">#KS-1048</p>
     <div class="flex justify-between text-xs text-muted-foreground"><span>SKU-001 × 2</span><span>49 980 ₸</span></div>
     <div class="mt-3 rounded-lg bg-secondary py-2 text-center text-xs">{{ $t('features.preview.processOrder') }}</div>
    </div>
    <p class="mt-3 flex items-center gap-1 text-[10px] text-muted-foreground"><Check class="size-3" />{{ $t('features.preview.delivered') }}</p>
   </template>
  </div>
 </div>
</template>

