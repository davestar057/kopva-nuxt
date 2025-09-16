<!-- components/StickyBuyBar.vue -->
<template>
  <!-- the whole bar fades using CSS var --sb-alpha -->
  <div
      class="stickybar fixed inset-x-0 bottom-0 z-40"
      :style="{ '--sb-alpha': alpha.toString() }"
      :class="{ 'pointer-events-none': alpha < 0.05 }"
  >
    <div class="mx-auto max-w-6xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div class="rounded-2xl bg-secondary text-white shadow-[0_20px_50px_-28px_rgba(0,16,17,.45)]">
        <div class="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-lg bg-white/10 grid place-items-center">💧</div>
            <div>
              <p class="text-sm text-white/70">Kopva • Smart leak &amp; freeze protection</p>
              <p class="text-base font-semibold">Launch price <span class="text-primary">20% off</span></p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="hidden sm:inline text-white/75 text-sm mr-2">
              Use code <code class="px-2 py-1 rounded-lg bg-white/10">LAUNCH20</code>
            </span>
            <a href="/checkout" class="inline-flex items-center justify-center rounded-xl bg-primary text-secondary font-bold px-5 py-3 hover:brightness-95 active:translate-y-px">
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * By default we fade out when the page footer (#support) is in view.
 * If the selector isn't found, we fall back to an offset-from-bottom distance.
 */
const props = withDefaults(defineProps<{
  hideAtSelector?: string | null
  bottomOffset?: number
}>(), {
  hideAtSelector: '#support', // your footer id from earlier
  bottomOffset: 260
})

const alpha = ref(1) // 1 = fully visible, 0 = hidden
let io: IntersectionObserver | null = null

function updateByOffset() {
  const doc = document.documentElement
  const distance = doc.scrollHeight - (window.scrollY + window.innerHeight)
  // map distance [0..bottomOffset] -> alpha [0..1]
  const t = Math.min(1, Math.max(0, distance / (props.bottomOffset || 240)))
  alpha.value = t
}

onMounted(() => {
  const target = props.hideAtSelector ? document.querySelector(props.hideAtSelector) : null

  if ('IntersectionObserver' in window && target) {
    io = new IntersectionObserver(([entry]) => {
      // When the footer starts intersecting, fade out the bar.
      // Use (1 - intersectionRatio) so more footer -> lower alpha.
      const ratio = entry?.intersectionRatio ?? 0
      alpha.value = Math.max(0, Math.min(1, 1 - ratio))
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] })
    io.observe(target)
  } else {
    // Fallback: based on distance from bottom
    updateByOffset()
    window.addEventListener('scroll', updateByOffset, { passive: true })
    window.addEventListener('resize', updateByOffset, { passive: true })
  }
})

onBeforeUnmount(() => {
  io?.disconnect()
  window.removeEventListener('scroll', updateByOffset)
  window.removeEventListener('resize', updateByOffset)
})
</script>

<style scoped>
/* Smooth fade/slide. We use a CSS var so Vue only sets one inline style. */
.stickybar{
  opacity: var(--sb-alpha, 1);
  transform: translateY(calc((1 - var(--sb-alpha, 1)) * 16px));
  transition: opacity .25s ease, transform .25s ease;
}
@media (prefers-reduced-motion: reduce){
  .stickybar{ transition: none }
}
</style>
