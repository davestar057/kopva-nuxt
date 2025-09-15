<template>
  <section class="bg-[#f7fbff] py-12 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <header class="text-center mb-8 md:mb-10">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
            Leak Damage Cost Calculator
          </h2>
          <p class="mt-3 text-secondary/70 max-w-2xl mx-auto">
            Estimate potential water and repair costs from a leak — and see how much Kopva could help you save.
          </p>
        </header>

        <!-- Card -->
        <div class="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)] overflow-hidden">
          <!-- Inputs -->
          <div class="grid lg:grid-cols-[1.1fr,1fr]">
            <div class="p-5 md:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-black/5">
              <h3 class="font-extrabold text-secondary text-lg mb-4">Your scenario</h3>

              <div class="grid sm:grid-cols-2 gap-4">
                <!-- Leak type -->
                <label class="block">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">Leak type</span>
                  <select v-model="leakTypeKey" class="input">
                    <option v-for="(opt,key) in presets" :key="key" :value="key">
                      {{ opt.label }}
                    </option>
                    <option value="custom">Custom (enter rate)</option>
                  </select>
                </label>

                <!-- Leak rate (L/min) -->
                <label class="block" :class="{ 'opacity-60 pointer-events-none': leakTypeKey !== 'custom' }">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">
                    Leak rate (L/min)
                  </span>
                  <input
                      v-model.number="customRate"
                      :disabled="leakTypeKey !== 'custom'"
                      type="number" min="0" step="0.1"
                      class="input"
                      placeholder="e.g. 1.5"
                  />
                </label>

                <!-- Duration -->
                <label class="block col-span-2">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">
                    Duration until detected (hours): <span class="font-semibold text-secondary">{{ durationHours }}</span>h
                  </span>
                  <input v-model.number="durationHours" type="range" min="0" max="24" step="0.5" class="range" />
                  <div class="flex justify-between text-xs text-secondary/60 mt-1">
                    <span>0</span><span>6</span><span>12</span><span>18</span><span>24</span>
                  </div>
                </label>

                <!-- Rooms affected -->
                <label class="block">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">Rooms affected</span>
                  <input v-model.number="rooms" type="number" min="0" max="8" step="1" class="input" />
                </label>

                <!-- Flooring -->
                <label class="block">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">Flooring</span>
                  <select v-model="floorKey" class="input">
                    <option v-for="(f, key) in flooring" :key="key" :value="key">{{ f.label }}</option>
                  </select>
                </label>

                <!-- Water tariff -->
                <label class="block">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">
                    Water tariff (£/m³)
                  </span>
                  <input v-model.number="tariff" type="number" min="0" step="0.01" class="input" />
                </label>

                <!-- Emergency call-out -->
                <div class="block">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">Emergency call-out</span>
                  <div class="flex items-center gap-2">
                    <input id="callout" v-model="callout" type="checkbox" class="checkbox" />
                    <label for="callout" class="text-sm text-secondary/80">Include</label>
                    <input
                        v-model.number="calloutCost"
                        :disabled="!callout"
                        type="number" min="0" step="1"
                        class="input ml-auto w-28"
                        aria-label="Call-out cost"
                    />
                  </div>
                </div>

                <!-- Insurance excess -->
                <label class="block">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">Insurance excess (£)</span>
                  <input v-model.number="excess" type="number" min="0" step="10" class="input" />
                </label>
              </div>

              <!-- Kopva response slider -->
              <div class="mt-6 pt-6 border-t border-black/5">
                <h4 class="font-extrabold text-secondary text-base mb-2">With Kopva shut-off</h4>
                <label class="block">
                  <span class="block text-sm font-medium text-secondary/80 mb-1">
                    Shut-off time: <span class="font-semibold text-secondary">{{ responseMins }}</span> min
                  </span>
                  <input v-model.number="responseMins" type="range" min="0" max="30" step="1" class="range" />
                  <div class="flex justify-between text-xs text-secondary/60 mt-1">
                    <span>0</span><span>10</span><span>20</span><span>30</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Results -->
            <div class="p-5 md:p-6 lg:p-7 bg-white">
              <h3 class="font-extrabold text-secondary text-lg mb-4">Estimated cost</h3>

              <div class="grid gap-3">
                <!-- Totals -->
                <div class="rounded-xl bg-[#f7fbff] p-4 ring-1 ring-black/5">
                  <div class="flex items-center justify-between">
                    <span class="text-secondary/70">Without Kopva</span>
                    <span class="font-extrabold text-secondary text-xl">{{ gbp(totalRaw) }}</span>
                  </div>
                </div>
                <div class="rounded-xl bg-primary/10 p-4 ring-1 ring-primary/20">
                  <div class="flex items-center justify-between">
                    <span class="text-secondary/80">With Kopva ({{ responseMins }} min)</span>
                    <span class="font-extrabold text-secondary text-xl">{{ gbp(totalWith) }}</span>
                  </div>
                </div>

                <!-- Savings -->
                <div class="rounded-xl bg-white p-4 ring-1 ring-black/5 shadow-[0_12px_30px_-20px_rgba(0,16,17,.25)]">
                  <div class="flex items-center justify-between">
                    <span class="text-secondary/80">Estimated savings</span>
                    <span class="font-extrabold text-primary text-xl">− {{ gbp(savings) }}</span>
                  </div>
                  <div class="mt-2 h-2 rounded-full bg-secondary/10 overflow-hidden">
                    <div
                        class="h-full bg-primary"
                        :style="{ width: savingsPct + '%' }"
                        aria-hidden="true"
                    ></div>
                  </div>
                  <p class="text-xs text-secondary/60 mt-1">Savings vs no shut-off. Simple model; actual costs vary.</p>
                </div>
              </div>

              <!-- Breakdown -->
              <div class="mt-6 grid gap-3">
                <h4 class="font-extrabold text-secondary text-base">Breakdown</h4>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div class="item">
                    <div class="label">Water usage ({{ volumeLitres.toFixed(0) }} L)</div>
                    <div class="value">{{ gbp(waterCostRaw) }}</div>
                  </div>
                  <div class="item">
                    <div class="label">Repair & restoration</div>
                    <div class="value">{{ gbp(damageRaw) }}</div>
                  </div>
                  <div class="item">
                    <div class="label">Emergency call-out</div>
                    <div class="value">{{ gbp(calloutCostRaw) }}</div>
                  </div>
                  <div class="item">
                    <div class="label">Insurance excess</div>
                    <div class="value">{{ gbp(excessRaw) }}</div>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-6">
                <a href="/checkout" class="inline-flex items-center justify-center rounded-xl bg-primary text-secondary font-bold px-5 py-3 shadow-[0_12px_30px_-12px_rgba(84,177,107,.55)] hover:brightness-95 active:translate-y-px">
                  Protect with Kopva
                </a>
              </div>

              <p class="text-xs text-secondary/60 mt-4">
                This is an estimate based on user inputs and simple assumptions. It is not a quote. For accurate costs,
                consult your insurer/contractor.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

/** Brand presets */
const presets: Record<string, { label: string; rate: number; severity: number }> = {
  drip:    { label: 'Drip (≈0.2 L/min)',   rate: 0.2,  severity: 0.8 },
  trickle: { label: 'Trickle (≈2 L/min)',  rate: 2,    severity: 1.0 },
  burst:   { label: 'Burst (≈20 L/min)',   rate: 20,   severity: 1.8 }
}

const flooring: Record<string, { label: string; factor: number }> = {
  carpet:   { label: 'Carpet',   factor: 1.0 },
  laminate: { label: 'Laminate', factor: 1.2 },
  hardwood: { label: 'Hardwood', factor: 1.5 },
  tile:     { label: 'Tile',     factor: 0.8 }
}

/** Inputs */
const leakTypeKey = ref<keyof typeof presets | 'custom'>('trickle')
const customRate   = ref(1.5)                // L/min when custom
const durationHours = ref(4)                 // hours until detected
const rooms = ref(2)                         // rooms affected
const floorKey = ref<keyof typeof flooring>('laminate')
const tariff = ref(3.2)                      // £/m³ (UK varies ~£2.5–£4.0)
const callout = ref(true)
const calloutCost = ref(120)
const excess = ref(150)
const responseMins = ref(3)                  // Kopva shut-off time

/** Helpers */
const nf = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })
const gbp = (n: number) => nf.format(Math.max(0, Math.round(n)))

/** Derived values */
const leakRate = computed(() => leakTypeKey.value === 'custom'
    ? Math.max(0, customRate.value)
    : presets[leakTypeKey.value].rate
)

const severity = computed(() => leakTypeKey.value === 'custom'
    ? 1.0
    : presets[leakTypeKey.value].severity
)

const floorFactor = computed(() => flooring[floorKey.value].factor)

/** Cost model (simple but explainable)
 *  - Water cost = (L/min * hours * 60) / 1000 * tariff
 *  - Damage = rooms * basePerRoom * floor * severity * timeFactor
 *  - timeFactor grows with duration (cap at 1.0 for >= 6h)
 *  - Call-out + insurance excess added as entered
 */
const basePerRoom = 650
const timeFactor = computed(() => Math.min(1, durationHours.value / 6))

const volumeLitres = computed(() => leakRate.value * durationHours.value * 60)
const waterCostRaw = computed(() => (volumeLitres.value / 1000) * tariff.value)

const damageRaw = computed(() =>
    rooms.value * basePerRoom * floorFactor.value * severity.value * (0.4 + 0.6 * timeFactor.value)
)

const calloutCostRaw = computed(() => (callout.value ? calloutCost.value : 0))
const excessRaw = computed(() => excess.value)

const totalRaw = computed(() =>
    waterCostRaw.value + damageRaw.value + calloutCostRaw.value + excessRaw.value
)

/** With Kopva (re-run model with much shorter duration = responseMins) */
const kopvaVolume = computed(() => leakRate.value * Math.max(0, responseMins.value) )
const waterWith = computed(() => (kopvaVolume.value / 1000) * tariff.value)

const timeFactorWith = computed(() => Math.min(1, (responseMins.value / 60) / 6))
const damageWith = computed(() =>
    rooms.value * basePerRoom * floorFactor.value * severity.value * (0.4 + 0.6 * timeFactorWith.value)
)

const totalWith = computed(() =>
    waterWith.value + damageWith.value + calloutCostRaw.value + excessRaw.value
)

const savings = computed(() => Math.max(0, totalRaw.value - totalWith.value))
const savingsPct = computed(() =>
    Math.max(0, Math.min(100, (savings.value / Math.max(1, totalRaw.value)) * 100)).toFixed(0)
)
</script>

<style scoped>
/* inputs */
.input{
  @apply w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-secondary outline-none;
}
.input:focus{ @apply ring-2 ring-primary/40 border-primary/50; }
.checkbox{ @apply h-4 w-4 rounded border border-black/20 text-primary focus:ring-primary; }
/* range (unstyled cross-browser minimal) */
.range{ @apply w-full; }

/* breakdown rows */
.item{
  @apply flex items-center justify-between rounded-xl bg-white p-3 ring-1 ring-black/5;
}
.item .label{ @apply text-secondary/70 text-sm; }
.item .value{ @apply font-semibold text-secondary; }
</style>
