<template>
  <section class="bg-white">
    <div class="container mx-auto px-4 py-12 md:py-16">
      <h2 class="text-3xl md:text-4xl text-center mb-4 font-extrabold tracking-tight text-secondary">
        Buy <span class="text-primary">peace of mind</span>
      </h2>
      <div
          class="relative overflow-hidden rounded-3xl ring-1 ring-black/5 bg-[#f7fbff] grid lg:grid-cols-[520px,1fr] gap-0 shadow-[0_28px_80px_-40px_rgba(0,16,17,.45)]"
      >

        <!-- Left: product gallery -->
        <div class="relative p-6 md:p-8 flex items-center justify-center bg-white">
          <!-- Primary image -->
          <figure class="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl ring-1 ring-black/5 bg-white overflow-hidden">
            <img
                :src="imageSrc"
                :alt="productName"
                class="w-full h-full object-contain"
                loading="eager"
                decoding="async"
            />
            <!-- subtle shine -->
            <div class="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(60%_120%_at_30%_10%,white,transparent_60%)]"></div>
          </figure>

          <!-- Floating badge -->
          <div
              v-if="badgeText"
              class="absolute left-6 top-6 inline-flex items-center gap-2 rounded-xl bg-secondary text-white px-3 py-1.5 text-sm font-semibold shadow-[0_16px_40px_-20px_rgba(0,16,17,.6)]"
          >
            <span class="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            {{ badgeText }}
          </div>
        </div>

        <!-- Right: content -->
        <div class="p-6 md:p-8 lg:p-10">
          <!-- Title + reviews -->
<!--          <div class="flex items-start justify-between gap-4">-->
<!--            <div>-->
<!--              <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-secondary">-->
<!--                {{ productName }}-->
<!--              </h2>-->
<!--              <p class="mt-1 text-secondary/70">{{ subtitle }}</p>-->
<!--            </div>-->

<!--            <div v-if="rating" class="text-right">-->
<!--              <div class="flex items-center justify-end gap-1">-->
<!--                <svg v-for="i in 5" :key="i" class="h-4 w-4"-->
<!--                     viewBox="0 0 24 24" fill="none" stroke="#001011" stroke-width="2">-->
<!--                  <defs>-->
<!--                    <linearGradient :id="`g-${i}`">-->
<!--                      <stop :offset="starFill(i)" stop-color="#54B16B" />-->
<!--                      <stop :offset="starFill(i)" stop-color="transparent" />-->
<!--                    </linearGradient>-->
<!--                  </defs>-->
<!--                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"-->
<!--                        :fill="`url(#g-${i})`"/>-->
<!--                </svg>-->
<!--              </div>-->
<!--              <p class="text-xs text-secondary/60 mt-1">{{ rating }} ({{ reviews }} reviews)</p>-->
<!--            </div>-->
<!--          </div>-->

          <!-- Price row -->
          <div class="mt-5 flex flex-wrap items-end gap-3">
            <p class="text-3xl md:text-4xl font-black text-secondary leading-none">
              {{ currency }}{{ pretty(price) }}
            </p>
            <p v-if="compareAt && compareAt > price"
               class="text-secondary/50 line-through text-lg">
              {{ currency }}{{ pretty(compareAt) }}
            </p>
            <span
                v-if="savingsPct > 0"
                class="inline-flex items-center rounded-lg bg-primary/15 text-primary font-semibold text-sm px-2.5 py-1"
            >
              Save {{ Math.round(savingsPct) }}%
            </span>
          </div>

          <!-- Key points -->
          <ul class="mt-5 grid gap-2 text-secondary/85">
            <li v-for="(b,i) in bullets" :key="i" class="flex items-start gap-2">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
              <span>{{ b }}</span>
            </li>
          </ul>

          <!-- Discount callout -->
          <div v-if="discountCode" class="mt-6 flex flex-wrap items-center gap-2">
            <span class="text-sm font-semibold text-primary uppercase tracking-wide">
              {{ discountLabel }}
            </span>
            <code class="select-all font-mono bg-secondary text-white rounded-lg px-2.5 py-1.5 text-sm">
              {{ discountCode }}
            </code>
            <button
                @click="copy(discountCode)"
                class="text-sm font-semibold text-secondary/70 hover:text-secondary"
                aria-label="Copy discount code"
            >
              Copy
            </button>
          </div>

          <!-- CTA -->
          <div class="mt-7 flex flex-wrap items-center gap-3">
            <a :href="buyHref"
               class="inline-flex items-center justify-center rounded-xl bg-primary text-secondary font-bold px-5 py-3 shadow-[0_12px_30px_-12px_rgba(84,177,107,.55)] hover:brightness-95 active:translate-y-px">
              Buy now
            </a>
            <a :href="learnHref"
               class="inline-flex items-center justify-center rounded-xl bg-white/80 border border-black/5 text-secondary font-bold px-5 py-3 backdrop-blur-sm hover:bg-white">
              Learn more
            </a>
            <p v-if="inStock" class="text-sm text-primary/90 font-semibold ml-auto">In stock • Fast shipping</p>
            <p v-else class="text-sm text-orange-600 font-semibold ml-auto">Back-order available</p>
          </div>

          <!-- Trust row -->
          <div class="mt-7 grid sm:grid-cols-3 gap-3 text-sm">
            <div class="trust">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              30-day returns
            </div>
            <div class="trust">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1l3 5 6 .9-4 4 1 6-6-3-6 3 1-6-4-4 6-.9z"/></svg>
              12-month warranty
            </div>
            <div class="trust">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
              Secure checkout
            </div>
          </div>

          <!-- Included -->
          <div class="mt-6 rounded-xl bg-white p-4 ring-1 ring-black/5">
            <p class="font-semibold text-secondary">What’s in the box</p>
            <ul class="mt-2 grid sm:grid-cols-2 gap-2 text-secondary/80 text-sm">
              <li v-for="(i, idx) in includes" :key="idx" class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-secondary/40"></span>{{ i }}
              </li>
            </ul>
          </div>
        </div>

        <!-- subtle brand glow -->
        <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  productName?: string
  subtitle?: string
  imageSrc?: string
  price?: number
  compareAt?: number | null
  currency?: string
  rating?: string | null      // e.g. "4.9"
  reviews?: number | null     // e.g. 126
  bullets?: string[]
  includes?: string[]
  discountCode?: string | null
  discountLabel?: string
  buyHref?: string
  learnHref?: string
  inStock?: boolean
  badgeText?: string | null
}>(), {
  productName: 'Kopva Smart Water Valve',
  subtitle: 'Leak & freeze protection with automatic shut-off',
  imageSrc: '/kopva-raw.png',
  price: 249,                 // <-- replace with real price
  compareAt: 312,             // optional compare-at (shows savings badge)
  currency: '£',
  rating: '4.9',
  reviews: 124,
  bullets: () => [
    'Auto shut-off when catastrophic leaks are detected',
    'Protection from frozen pipes',
    'Control from the app anywhere',
    'Easy to install'
  ],
  includes: () => [
    'Kopva Pipebudi smart valve',
    'Mounting hardware',
    'Power adaptor',
    'Quick-start guide'
  ],
  discountCode: 'LAUNCH20',
  discountLabel: 'Launch offer',
  buyHref: '/checkout',
  learnHref: '#how-it-works',
  inStock: true,
  badgeText: '20% off today'
})

const pretty = (n: number) =>
    new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(n)

const savingsPct = computed(() => {
  if (!props.compareAt || props.compareAt <= props.price) return 0
  return 100 * (1 - props.price / props.compareAt)
})

function copy(text: string) {
  try { navigator.clipboard?.writeText(text) } catch {}
}

function starFill(i: number) {
  const r = Number(props.rating || 0)
  const full = Math.min(1, Math.max(0, r - (i - 1)))
  // 0..1 -> % for gradient stop
  return `${Math.max(0, Math.min(1, full)) * 100}%`
}
</script>

<style scoped>
.trust{
  @apply inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-black/5 text-secondary/80;
}
</style>
