<template>
  <section class="bg-[#f7fbff] py-14 md:py-20 overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Headline -->
      <header class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
          The real cost of a leak vs <span class="text-primary">Kopva</span>
        </h2>
        <p class="mt-3 text-secondary/70">
          Water damage adds up fast. Kopva shuts off automatically — so you don’t pay for leaks.
        </p>
      </header>

      <!-- Visual compare -->
      <div class="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <!-- Without Kopva -->
        <article
            ref="leftCard"
            class="relative overflow-visible rounded-2xl bg-white ring-1 ring-black/5 p-6 md:p-7 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]"
        >
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl grid place-items-center text-white bg-gradient-to-br from-red-500 to-orange-500">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-secondary">Without protection</h3>
              <p class="text-secondary/60 text-sm">Average leak damage &amp; call-outs</p>
            </div>
          </div>

          <div class="mt-5 flex items-end justify-between">
            <p class="text-3xl md:text-4xl font-black text-secondary">
              {{ currency }}{{ pretty(leftValue) }}
            </p>
            <span class="text-secondary/60 text-sm">typical incident</span>
          </div>

          <div class="mt-3 h-3 rounded-full bg-secondary/10 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400"
                 :style="{ width: leftBarWidth + '%' }"></div>
          </div>

          <p class="mt-3 text-xs text-secondary/60">
            Includes restoration, call-outs and insurance excess (varies by home and severity).
          </p>
        </article>

        <!-- With Kopva -->
        <article
            ref="rightCard"
            class="relative overflow-visible rounded-2xl bg-white ring-1 ring-black/5 p-6 md:p-7 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]"
        >
          <!-- tick badge -->
          <div class="tick" :class="{ 'tick--show': didCelebrate }" aria-hidden="true">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#001011" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <!-- confetti host (not clipped) -->
          <div class="confetti-host" ref="confettiHost" aria-hidden="true"></div>

          <div class="absolute -right-24 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div>

          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl grid place-items-center text-secondary bg-primary shadow-[0_10px_24px_-12px_rgba(84,177,107,.5)]">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-secondary">With Kopva</h3>
              <p class="text-secondary/60 text-sm">Auto shut-off • Freeze guard • Alerts</p>
            </div>
          </div>

          <div class="mt-5 flex items-end justify-between">
            <p class="text-3xl md:text-4xl font-black text-secondary">
              {{ currency }}0 <span class="text-secondary/50 text-base font-semibold align-super">*</span>
            </p>
            <span class="text-primary font-semibold text-sm">Peace of mind</span>
          </div>

          <div class="mt-3 h-3 rounded-full bg-secondary/10 overflow-hidden">
            <div class="h-full rounded-full bg-primary"
                 :style="{ width: rightBarWidth + '%' }"></div>
          </div>

          <ul class="mt-5 grid gap-2 text-secondary/80">
            <li class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-primary"></span> Shuts off water within minutes</li>
            <li class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-primary"></span> Detects leaks & freezing conditions</li>
            <li class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-primary"></span> Control from the app anywhere</li>
          </ul>

          <p class="mt-3 text-xs text-secondary/60">
            *Typical outcome with automatic shut-off before damage. Actual costs vary by scenario.
          </p>

          <div class="mt-6">
            <a href="/checkout" class="inline-flex items-center justify-center rounded-xl bg-primary text-secondary font-bold px-5 py-3 shadow-[0_12px_30px_-12px_rgba(84,177,107,.55)] hover:brightness-95 active:translate-y-px">
              Get Kopva
            </a>
          </div>

        </article>

      </div>
      <div class="text-center">
        <DisclaimerNote
            :text="`All features described are targets under normal conditions. Actual performance varies. Product is an aid to risk management and not a guarantee against leaks, freezing, or water damage. For full details see Terms & Warranty.`"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(defineProps<{ averageCost?: number; currency?: string }>(), {
  averageCost: 3800,
  currency: '£'
})

const currency = props.currency
const leftValue = ref(0)
const leftBarWidth = ref(0)
const rightBarWidth = ref(6)

const didCelebrate = ref(false)
const confettiHost = ref<HTMLElement | null>(null)
const leftCard = ref<HTMLElement | null>(null)
const rightCard = ref<HTMLElement | null>(null)
const DisclaimerNote = (props: { text: string }) => h(
    'p',
    {
      class:
          'mt-2 text-[11px] leading-snug text-secondary/55 italic [&_a]:underline [&_a]:hover:no-underline'
    },
    props.text
)
const pretty = (n: number) =>
    new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(n)

/* simple in-view check (fallback if IO is weird) */
function isInView(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  return r.bottom > 0 && r.top < window.innerHeight
}

/** confetti burst */
function celebrateOnce() {
  if (didCelebrate.value) return
  didCelebrate.value = true

  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
  const host = confettiHost.value
  if (!host) return

  const colors = ['#54B16B', '#97C8EB', '#F59E0B', '#06B6D4', '#EF4444']
  const N = 14
  for (let i = 0; i < N; i++) {
    const s = document.createElement('span')
    s.className = 'confetti-p'
    s.style.setProperty('--dx', (Math.random() * 140 - 70).toFixed(0) + 'px')
    s.style.setProperty('--dy', (Math.random() * 120 + 40).toFixed(0) + 'px')
    s.style.setProperty('--rot', (Math.random() * 260 + 80).toFixed(0) + 'deg')
    s.style.setProperty('--delay', (Math.random() * 100).toFixed(0) + 'ms')
    s.style.setProperty('--c', colors[i % colors.length])
    host.appendChild(s)
    setTimeout(() => { try { host.removeChild(s) } catch {} }, 1400)
  }
}

onMounted(() => {
  // Animate left number/bar on mount (simple + reliable)
  const start = performance.now()
  const duration = 1100
  const from = 0
  const to = props.averageCost
  const tick = (t: number) => {
    const k = Math.min(1, (t - start) / duration)
    const ease = 1 - Math.pow(1 - k, 3)
    leftValue.value = Math.round(from + (to - from) * ease)
    leftBarWidth.value = 10 + 90 * ease
    rightBarWidth.value = 6 + 4 * ease
    if (k < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)

  // Fire tick/confetti when right card is visible
  const tryShow = () => {
    const el = rightCard.value
    if (!el) return
    if (isInView(el)) {
      celebrateOnce()
      window.removeEventListener('scroll', tryShow)
      window.removeEventListener('resize', tryShow)
    }
  }
  window.addEventListener('scroll', tryShow, { passive: true })
  window.addEventListener('resize', tryShow, { passive: true })
  // trigger immediately if already visible
  tryShow()
  // last-resort fallback so you definitely see it
  setTimeout(tryShow, 600)
})
</script>

<style scoped>
/* Tick badge */
.tick{
  position:absolute; right:16px; top:14px;
  width:34px; height:34px; border-radius:9999px;
  background:#54B16B; color:#001011;
  display:grid; place-items:center;
  transform: scale(.6);
  opacity: 0;
  filter: drop-shadow(0 10px 24px rgba(84,177,107,.35));
  transition: transform .28s cubic-bezier(.22,.61,.36,1), opacity .28s ease;
  z-index: 2;
}
.tick--show{ transform: scale(1); opacity: 1; }
@media (prefers-reduced-motion: reduce){ .tick{ transition: none } }

/* Confetti (parent is overflow-visible so bits aren't clipped) */
.confetti-host{
  position:absolute; right:18px; top:18px; width:0; height:0; pointer-events:none; z-index:3;
}
.confetti-p{
  position:absolute; top:0; left:0; width:6px; height:10px; border-radius:2px;
  background: var(--c, #54B16B);
  opacity: 0;
  transform: translate3d(0,0,0) rotate(0deg) scale(.9);
  animation: confetti-burst 900ms forwards;
  animation-delay: var(--delay, 0ms);
}
@keyframes confetti-burst{
  0%   { opacity:0; transform: translate3d(0,0,0) rotate(0deg) scale(.6) }
  10%  { opacity:1 }
  100% { opacity:0; transform: translate3d(var(--dx), var(--dy), 0) rotate(var(--rot)) scale(1) }
}
@media (prefers-reduced-motion: reduce){
  .confetti-p{ animation: none; opacity: 0 }
}
</style>
<!-- add a second, UNscoped style block for the confetti -->
<style>
/* UNscoped confetti so it styles JS-created nodes */
.confetti-host{
  position:absolute; right:18px; top:18px; width:0; height:0; pointer-events:none; z-index:3;
}
.confetti-p{
  position:absolute; top:0; left:0; width:6px; height:10px; border-radius:2px;
  background: var(--c, #54B16B);
  opacity: 0;
  transform: translate3d(0,0,0) rotate(0deg) scale(.9);
  animation: confetti-burst 900ms forwards;
  animation-delay: var(--delay, 0ms);
}
@keyframes confetti-burst{
  0%   { opacity:0; transform: translate3d(0,0,0) rotate(0deg) scale(.6) }
  10%  { opacity:1 }
  100% { opacity:0; transform: translate3d(var(--dx), var(--dy), 0) rotate(var(--rot)) scale(1) }
}

/* If you prefer to keep a single <style scoped>, you can instead do:
:deep(.confetti-host){ ... }
:deep(.confetti-p){ ... }
@keyframes confetti-burst { ... }  // keyframes are global anyway
*/
</style>
