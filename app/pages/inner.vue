<!-- pages/inner-template.vue -->
<template>
  <main class="relative overflow-hidden">
    <!-- HEADER (dark, sticky) -->
    <header class="bg-secondary text-white sticky top-0 z-50">
      <div class="container mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/kopva-logo-full-white.png" alt="Kopva" style="max-width: 140px;">
        </div>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-7">
          <a href="/" class="nav-link">Home</a>
          <a href="/#how-it-works" class="nav-link">How it works</a>
          <a href="/#features" class="nav-link">Features</a>
          <a href="/#pricing" class="nav-link">Pricing</a>
          <a href="/checkout" class="btn-header btn-header--primary">Buy now</a>
        </nav>

        <!-- Mobile -->
        <div class="md:hidden flex items-center gap-3">
          <a href="/checkout" class="btn-header btn-header--primary btn-header--sm">Buy</a>
          <button @click="mobileOpen = !mobileOpen" class="h-9 w-9 grid place-items-center rounded-lg bg-white/10">
            <span class="sr-only">Open menu</span>
            <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <div v-show="mobileOpen" class="md:hidden bg-secondary/95 backdrop-blur-sm border-t border-white/10">
        <nav class="container mx-auto px-4 py-4 grid gap-3 text-base">
          <a @click="mobileOpen=false" href="/" class="nav-link">Home</a>
          <a @click="mobileOpen=false" href="/#how-it-works" class="nav-link">How it works</a>
          <a @click="mobileOpen=false" href="/#features" class="nav-link">Features</a>
          <a @click="mobileOpen=false" href="/#pricing" class="nav-link">Pricing</a>
          <a @click="mobileOpen=false" href="/checkout" class="btn-header btn-header--primary mt-2">Buy now</a>
        </nav>
      </div>
    </header>

    <!-- MASTHEAD (inner hero) -->
    <section class="relative overflow-hidden -mt-px"> <!-- kills 1px seam under sticky header -->
      <div class="hero-bg hero-bg--ink" aria-hidden="true"></div>

      <div class="container mx-auto px-4 relative z-[1]">
        <nav class="pt-5 md:pt-6 text-sm text-white/80">
          <ol class="flex items-center gap-2">
            <li><a href="/" class="hover:underline">Home</a></li>
            <li class="opacity-60">/</li>
            <li class="opacity-90">Guide</li>
          </ol>
        </nav>

        <div class="pt-4 md:pt-6 pb-10 md:pb-12 grid md:grid-cols-[1fr_auto] items-end gap-6">
          <div class="reveal" v-reveal>
            <h1 class="mt-1 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              The Complete Guide to Kopva
            </h1>
            <p class="mt-3 max-w-2xl text-white/85">
              Learn how Pipebudi monitors your home, prevents leaks and protects against frozen pipes—setup to tips.
            </p>
          </div>
          <div class="justify-self-start md:justify-self-end reveal" v-reveal style="--delay:120ms">
            <a href="/checkout" class="inline-flex items-center justify-center rounded-xl bg-primary text-secondary font-bold px-5 py-3 shadow-[0_12px_30px_-12px_rgba(84,177,107,.55)] hover:brightness-95 active:translate-y-px">
              Buy now
            </a>
          </div>
        </div>
      </div>

      <!-- wave divider (tighter) -->

    </section>

    <!-- CONTENT -->
    <section class="bg-white py-10 md:py-14">
      <div class="container mx-auto px-4 grid lg:grid-cols-[260px,1fr] gap-10">
        <!-- Sidebar TOC -->
        <aside class="hidden lg:block sticky top-20 self-start reveal" v-reveal>
          <div class="rounded-2xl border border-black/5 bg-[#f7fbff] p-4">
            <p class="text-secondary/70 font-semibold text-sm mb-2">On this page</p>
            <nav class="grid gap-2 text-sm">
              <a href="#overview" class="toc-link">Overview</a>
              <a href="#setup" class="toc-link">Quick setup</a>
              <a href="#protection" class="toc-link">Protection modes</a>
              <a href="#app" class="toc-link">Kopva app</a>
              <a href="#faq" class="toc-link">FAQ</a>
            </nav>
          </div>
        </aside>

        <!-- Main article -->
        <article class="min-w-0">
          <!-- Overview -->
          <section id="overview" class="reveal" v-reveal>
            <h2 class="h2">Overview</h2>
            <p class="lead">
              Pipebudi sits on your main water valve and keeps watch—detecting abnormal flow and freezing conditions.
              If something’s wrong, it can automatically close your water to stop damage before it starts.
            </p>

            <!-- Alternating media blocks -->
            <div class="mt-8 grid gap-10">
              <!-- Block 1 -->
              <div class="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 class="h3">Leak detection & auto shut-off</h3>
                  <p class="muted">
                    Pipebudi recognises continuous flow patterns that signal a leak. When detected, it can close your valve in seconds and alert you instantly.
                  </p>
                  <ul class="list">
                    <li><span class="dot"></span>Real-time monitoring</li>
                    <li><span class="dot"></span>Instant push notifications</li>
                    <li><span class="dot"></span>Manual override anytime</li>
                  </ul>
                </div>
                <!-- reveal wrapper + parallax child to avoid transform conflicts -->
                <div class="reveal" v-reveal style="--delay:120ms">
                  <div class="card-img" v-parallax="{ speed: -0.10, max: 36 }">
                    <img class="w-full h-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1600&auto=format&fit=crop" alt="Leak detection illustration" loading="lazy" />
                  </div>
                </div>
              </div>

              <!-- Block 2 -->
              <div class="grid md:grid-cols-2 gap-6 items-center">
                <div class="order-2 md:order-1 reveal" v-reveal>
                  <div class="card-img" v-parallax="{ speed: 0.1, max: 36 }">
                    <img class="w-full h-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Frost protection" loading="lazy" />
                  </div>
                </div>
                <div class="order-1 md:order-2">
                  <h3 class="h3">Freeze guard</h3>
                  <p class="muted">
                    Built-in frost protection watches temperature. If it falls below <span class="font-semibold">3 °C</span>, Pipebudi can shut off water to prevent burst pipes.
                  </p>
                  <ul class="list">
                    <li><span class="dot"></span>Automatic thresholds</li>
                    <li><span class="dot"></span>Winter-ready alerts</li>
                    <li><span class="dot"></span>Works in second homes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Quick setup callouts -->
          <section id="setup" class="mt-14 reveal" v-reveal>
            <h2 class="h2">Quick setup</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div class="benefit">
                <div class="benefit-icon bg-gradient-to-br from-primary to-theme-third">
                  <!-- wrench-screwdriver -->
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m14.7 6.3 3 3M10 14l-7 7"/>
                    <path d="m13.3 7.7-9 9a2 2 0 0 0-.6 1.4V21h2a2 2 0 0 0 1.4-.6l9-9"/>
                    <path d="m22 7-5-5-2 2 5 5 2-2z"/>
                  </svg>
                </div>
                <h4 class="benefit-title">Mount Pipebudi</h4>
                <p class="benefit-copy">Clamps to common isolation valves in minutes.</p>
              </div>

              <div class="benefit">
                <div class="benefit-icon bg-gradient-to-br from-primary to-theme-third">
                  <!-- wifi -->
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                    <circle cx="12" cy="20" r="1"/>
                  </svg>
                </div>
                <h4 class="benefit-title">Connect Wi-Fi</h4>
                <p class="benefit-copy">Secure pairing from the app. iOS & Android.</p>
              </div>

              <div class="benefit">
                <div class="benefit-icon bg-gradient-to-br from-primary to-theme-third">
                  <!-- bell-alert -->
                  <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                </div>
                <h4 class="benefit-title">Enable alerts</h4>
                <p class="benefit-copy">Choose automatic shut-off and notification rules.</p>
              </div>
            </div>
          </section>

          <!-- Protection modes -->
          <section id="protection" class="mt-14 reveal" v-reveal>
            <h2 class="h2">Protection modes</h2>
            <div class="grid md:grid-cols-2 gap-6 mt-4">
              <div class="tile"><h4 class="h4">Home</h4><p class="muted">Standard sensitivity, balanced alerting for everyday use.</p></div>
              <div class="tile"><h4 class="h4">Away</h4><p class="muted">Higher sensitivity, faster shut-off while you’re away.</p></div>
              <div class="tile"><h4 class="h4">Frost</h4><p class="muted">Temperature watch with automatic close below 3 °C.</p></div>
              <div class="tile"><h4 class="h4">Manual</h4><p class="muted">Full control from the app with real-time status.</p></div>
            </div>
          </section>

          <!-- App section -->
          <section id="app" class="mt-14">
            <h2 class="h2 reveal" v-reveal>The Kopva app</h2>
            <p class="muted reveal" v-reveal style="--delay:120ms">Monitor usage, receive alerts and open/close your water from anywhere.</p>
            <div class="mt-6 grid sm:grid-cols-2 gap-6">
              <div class="reveal" v-reveal>
                <div class="card-img" v-parallax="{ speed: -0.08, max: 28 }">
                  <img class="w-full h-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=1600&auto=format&fit=crop" alt="Kopva app control" loading="lazy" />
                </div>
              </div>
              <div class="reveal" v-reveal style="--delay:120ms">
                <div class="card-img" v-parallax="{ speed: 0.08, max: 28 }">
                  <img class="w-full h-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1505744386214-51dba16a26fc?q=80&w=1600&auto=format&fit=crop" alt="Alerts and monitoring" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          <!-- FAQ -->
          <section id="faq" class="mt-14">
            <h2 class="h2 reveal" v-reveal>FAQ</h2>
            <div class="mt-4 divide-y divide-black/5 rounded-2xl border border-black/5 bg-[#f7fbff]">
              <details class="faq">
                <summary><span>Does Pipebudi work with my valve?</span><svg class="h-5 w-5 ml-auto opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
                <div class="answer">It fits most standard isolation valves. For specialty fittings, an adapter may be required.</div>
              </details>
              <details class="faq">
                <summary><span>What happens during a power cut?</span><svg class="h-5 w-5 ml-auto opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
                <div class="answer">You can still operate the valve manually. Alerts and automations resume when power returns.</div>
              </details>
              <details class="faq">
                <summary><span>Can I disable auto shut-off?</span><svg class="h-5 w-5 ml-auto opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
                <div class="answer">Yes—switch to Manual in the app and you’ll receive alerts without closing the valve.</div>
              </details>
            </div>
          </section>

          <!-- CTA banner -->
          <section class="mt-14">
            <div class="relative overflow-hidden rounded-3xl bg-secondary text-white px-6 py-8 md:px-10 md:py-12">
              <div class="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
                   v-parallax="{ speed: -0.16, max: 60 }"></div>
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 class="text-2xl md:text-3xl font-extrabold tracking-tight">
                    Ready to protect your home?
                  </h3>
                  <p class="mt-1 text-white/80">Get Kopva today and prevent costly leaks.</p>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                  <a href="/checkout" class="inline-flex items-center justify-center rounded-xl bg-primary text-secondary font-bold px-5 py-3 shadow-[0_12px_30px_-12px_rgba(84,177,107,.55)] hover:brightness-95 active:translate-y-px">
                    Buy now
                  </a>
                  <a href="/" class="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white font-bold px-5 py-3 backdrop-blur-sm hover:bg-white/15 active:translate-y-px">
                    Back to homepage
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-secondary text-white">
      <div class="container mx-auto px-4 py-10">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-xl bg-white/10 grid place-items-center font-black">K</div>
            <span class="font-semibold tracking-tight">KOPVA</span>
          </div>
          <nav class="flex gap-6 text-white/80 text-sm">
            <a href="#" class="hover:text-white">Privacy</a>
            <a href="#" class="hover:text-white">Terms</a>
            <a href="#" class="hover:text-white">Support</a>
          </nav>
        </div>
        <ClientOnly>
          <p class="mt-6 text-white/60 text-sm">© {{ new Date().getFullYear() }} Kopva. All rights reserved.</p>
        </ClientOnly>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const mobileOpen = ref(false)

/* ==== Reveal-on-scroll (safe, one-shot, no transform conflicts) ==== */
const vReveal = {
  mounted(el: HTMLElement) {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('is-in'); return }
    const io = new IntersectionObserver((entries) => {
      const first = entries[0]; if (!first) return
      if (first.isIntersecting) {
        requestAnimationFrame(() => el.classList.add('is-in'))
        io.unobserve(el)
      }
    }, { threshold: 0.12 })
    io.observe(el)
  }
}

/* ==== Parallax (gentle, throttled, disabled on small screens) ==== */
const vParallax = {
  mounted(el: HTMLElement, binding: any) {
    const opts = { speed: 0.2, axis: 'y', max: 80, disabledBelow: 640, ...(binding?.value || {}) }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let inView = true, rafId = 0
    const io = new IntersectionObserver((entries) => {
      const first = entries[0]; if (!first) return
      inView = first.isIntersecting
    })
    io.observe(el)
    const update = () => {
      rafId = 0
      const vw = window.innerWidth
      if (vw < opts.disabledBelow) { el.style.transform = ''; return }
      const r = el.getBoundingClientRect()
      const center = window.innerHeight / 2
      const delta = (r.top + r.height / 2) - center
      const move = Math.max(-opts.max, Math.min(opts.max, delta * opts.speed))
      const tx = opts.axis === 'x' ? move : 0
      const ty = opts.axis === 'y' ? move : 0
      el.style.willChange = 'transform'
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    }
    const onScroll = () => { if (!inView || rafId) return; rafId = requestAnimationFrame(update) }
    const onResize = () => { el.style.transform = ''; onScroll() }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    onScroll()
    ;(el as any)._parallaxCleanup = () => {
      io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize)
      if (rafId) cancelAnimationFrame(rafId); el.style.willChange = ''
    }
  },
  unmounted(el: HTMLElement) { (el as any)._parallaxCleanup?.() }
}
</script>

<style scoped>
/* Fix rare subpixel seam with sticky headers in some browsers */
header { transform: translateZ(0); }

/* Header */
.nav-link{ color:#fff; opacity:.9; transition:opacity .15s ease }
.nav-link:hover{ opacity:1 }
.btn-header{ @apply inline-flex items-center justify-center font-bold rounded-lg px-3.5 py-2; }
.btn-header--primary{ @apply bg-primary text-white; }
.btn-header--sm{ @apply px-3 py-1.5 rounded-md font-extrabold; }

/* Hero background */
.hero-bg{
  position:absolute; left:0; right:0; top:-1px;  /* overlap header by 1px (no white seam) */
  height: clamp(420px, 52vh, 560px);             /* tighter masthead */
  z-index:0; pointer-events:none;
}
.hero-bg::after{
  content:""; position:absolute; inset:0; opacity:.18;
  background:
      repeating-linear-gradient(0deg,  rgba(0,16,17,0.03) 0 1px, transparent 1px 26px),
      repeating-linear-gradient(90deg, rgba(0,16,17,0.03) 0 1px, transparent 1px 26px);
}
@supports (mask-image: linear-gradient(black, transparent)){
  .hero-bg{ mask-image: linear-gradient(#000 0%, #000 90%, transparent 100%); }
}
/* Variant: ink (dark vignette + primary bloom, no weird colour mixing) */
.hero-bg--ink{
  background:
      radial-gradient(110% 70% at 50% -25%, rgba(84,177,107,0.24), rgba(84,177,107,0) 60%),
      radial-gradient(100% 80% at 50% 8%,   rgba(0,16,17,0.18),   rgba(0,16,17,0) 60%),
      linear-gradient(180deg, #0a1516 0%, #0a1516 15%, #112022 35%, #122528 55%, #1a2d30 70%, #223538 85%);
}

/* Type helpers */
.h2{ @apply text-2xl md:text-3xl font-extrabold tracking-tight text-secondary; }
.h3{ @apply text-xl md:text-2xl font-extrabold text-secondary; }
.h4{ @apply text-lg font-extrabold text-secondary; }
.lead{ @apply mt-2 text-secondary/75 leading-relaxed; }
.muted{ @apply text-secondary/75 leading-relaxed; }

/* Cards & media */
.card-img{ @apply overflow-hidden rounded-2xl bg-white ring-1 ring-black/5; box-shadow: 0 18px 50px -28px rgba(0,16,17,.25); }
.tile{ @apply rounded-2xl bg-white p-5 ring-1 ring-black/5; box-shadow: 0 12px 30px -20px rgba(0,16,17,.25); }

/* Benefit mini-cards */
.benefit{ @apply relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-black/5; box-shadow: 0 18px 50px -28px rgba(0,16,17,.25); }
.benefit::after{ content:""; position:absolute; inset:-1px; border-radius:inherit; background: radial-gradient(600px 180px at -10% 0%, rgba(84,177,107,.10), transparent 70%); pointer-events:none; }
.benefit-icon{ @apply h-11 w-11 rounded-xl grid place-items-center text-white bg-primary; box-shadow: 0 10px 24px -12px rgba(84,177,107,.5); }
.benefit-title{ @apply mt-4 font-extrabold text-secondary; }
.benefit-copy{ @apply mt-1 text-secondary/75; }

/* TOC */
.toc-link{ @apply text-secondary/70 hover:text-secondary transition; }

/* Lists */
.list{ @apply mt-4 grid gap-2 text-secondary/80; }
.list .dot{ @apply inline-block h-2 w-2 rounded-full bg-primary mr-2 align-middle; }

/* FAQ */
.faq summary{ @apply list-none cursor-pointer flex items-center gap-3 p-4 md:p-5 text-secondary font-semibold; }
.faq summary::-webkit-details-marker{ display:none }
.faq .answer{ @apply px-4 md:px-5 pb-5 text-secondary/80 leading-relaxed; }
.faq + .faq{ @apply border-t border-black/5; }

/* Reveal (transition-based: no fill-mode issues) */
.reveal{
  opacity: 0;
  transform: translateY(10px) scale(.98);
  transition:
      opacity .48s cubic-bezier(.22,.61,.36,1),
      transform .48s cubic-bezier(.22,.61,.36,1);
  transition-delay: var(--delay, 0ms);
  will-change: opacity, transform;
}
.reveal.is-in{
  opacity: 1 !important;
  transform: none !important;
}

/* Buttons */
.btn-header--primary{ @apply bg-primary text-white; }
.btn-primary{ @apply inline-flex items-center justify-center font-bold text-white bg-primary rounded-[0.9rem] px-5 py-3; box-shadow: 0 12px 30px -12px rgba(84,177,107,.5); transition: transform .12s ease, filter .12s ease, box-shadow .2s ease; }
.btn-ghost{ @apply inline-flex items-center justify-center font-bold text-secondary rounded-[0.9rem] px-5 py-3 bg-white/70 border border-black/5 backdrop-blur-sm; transition: background .12s ease, transform .12s ease; }
.btn-primary:hover{ filter:brightness(.95); box-shadow:0 16px 38px -14px rgba(84,177,107,.55) }
.btn-primary:active, .btn-ghost:active{ transform: translateY(1px) }
</style>
