<!-- pages/contact.vue -->
<template>
  <main class="relative">
    <!-- HEADER (dark, sticky) -->
    <header class="bg-secondary text-white sticky top-0 z-50">
      <div class="container mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/kopva-logo-full-white.png" alt="Kopva" style="max-width: 140px;">
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-6">
          <a href="/" class="nav-link">Home</a>
          <a href="/#support" class="nav-link">Support</a>
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
          <a @click="mobileOpen=false" href="/#support" class="nav-link">Support</a>
          <a @click="mobileOpen=false" href="/checkout" class="btn-header btn-header--primary mt-2">Buy now</a>
        </nav>
      </div>
    </header>

    <!-- MASTHEAD -->
    <section class="relative overflow-hidden -mt-px">
      <div class="hero-bg hero-bg--soft" aria-hidden="true"></div>
      <div class="container mx-auto px-4 relative z-[1]">
        <div class="py-10 md:py-14">
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-secondary">
            Contact Kopva
          </h1>
          <p class="mt-2 text-secondary/70 max-w-2xl">
            Questions, orders, or support—drop us a line and we’ll get back to you.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="bg-white">
      <div class="container mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[1.1fr,0.9fr] gap-8">
        <!-- Left: primary contact card + quick links -->
        <div class="space-y-6">
          <!-- Big email card -->
          <article class="rounded-2xl bg-white ring-1 ring-black/5 p-6 md:p-7 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">
            <div class="flex items-start gap-4">
              <div class="h-11 w-11 rounded-xl grid place-items-center text-secondary bg-primary shadow-[0_10px_24px_-12px_rgba(84,177,107,.5)]">
                <!-- envelope -->
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
              </div>
              <div class="min-w-0">
                <h2 class="text-xl md:text-2xl font-extrabold text-secondary">Email us</h2>
                <p class="text-secondary/70 mt-1">Fastest way to reach the team.</p>

                <div class="mt-4 flex flex-wrap items-center gap-2">
                  <code class="select-all font-mono tracking-wide bg-secondary/95 text-white rounded-xl px-3.5 py-2 text-sm md:text-base">
                    {{ email }}
                  </code>
                  <button
                      @click="copyEmail"
                      class="inline-flex items-center gap-2 rounded-xl border border-secondary/10 bg-white px-3 py-2 text-sm font-semibold text-secondary hover:bg-white/90 active:translate-y-px"
                      :aria-live="copied ? 'polite' : undefined"
                  >
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="3" y="3" width="13" height="13" rx="2"/></svg>
                    <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
                  </button>
                  <a
                      :href="mailtoHref"
                      class="inline-flex items-center gap-2 rounded-xl bg-primary text-secondary font-bold px-4 py-2 shadow-[0_12px_30px_-12px_rgba(84,177,107,.55)] hover:brightness-95 active:translate-y-px"
                  >
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/></svg>
                    Open mail
                  </a>
                </div>

                <p class="text-secondary/60 text-sm mt-3">Typical response time: within 1 business day.</p>
              </div>
            </div>
          </article>

          <!-- Quick routes (same email, prefilled subjects) -->
          <div class="grid sm:grid-cols-2 gap-4">
            <a :href="mailtoWith('Support')" class="tile flex items-center gap-3 group">
              <div class="pill-icon bg-primary/10 text-secondary group-hover:scale-105"><span>?</span></div>
              <div>
                <h3 class="h4">Support</h3>
                <p class="muted text-sm">Help with setup or issues</p>
              </div>
            </a>
            <a :href="mailtoWith('Sales')" class="tile flex items-center gap-3 group">
              <div class="pill-icon bg-primary/10 text-secondary group-hover:scale-105"><span>£</span></div>
              <div>
                <h3 class="h4">Sales</h3>
                <p class="muted text-sm">Ordering & availability</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: lightweight mailto form (no backend) -->
        <aside class="rounded-2xl bg-[#f7fbff] ring-1 ring-black/5 p-6 md:p-7">
          <h2 class="text-lg font-extrabold text-secondary">Send a message</h2>

          <form class="mt-4 grid gap-3" @submit.prevent="composeMail">
            <div>
              <label for="name" class="label">Your name</label>
              <input id="name" v-model="form.name" type="text" class="input" placeholder="Jane Doe" />
            </div>
            <div>
              <label for="from" class="label">Your email (optional)</label>
              <input id="from" v-model="form.from" type="email" class="input" placeholder="you@example.com" />
            </div>
            <div>
              <label for="topic" class="label">Topic</label>
              <select id="topic" v-model="form.topic" class="input">
                <option>Support</option>
                <option>Sales</option>
                <option>Partnerships</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label for="msg" class="label">Message</label>
              <textarea id="msg" v-model="form.message" rows="5" class="input resize-y" placeholder="How can we help?"></textarea>
            </div>

            <button type="submit" class="btn-primary justify-center mt-1">Open your mail app</button>

            <p class="text-[13px] text-secondary/60 mt-2">
              We use your email solely to respond to your enquiry. For details, see our
              <a href="/privacy" class="underline underline-offset-2">Privacy Policy</a>.
            </p>
          </form>
        </aside>
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
            <a href="/privacy" class="hover:text-white">Privacy</a>
            <a href="/terms" class="hover:text-white">Terms</a>
            <a href="/#support" class="hover:text-white">Support</a>
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
import { ref, computed } from 'vue'

const mobileOpen = ref(false)
const email = 'hello@kopva.com'
const copied = ref(false)

function copyEmail(){
  navigator.clipboard?.writeText(email).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 1200)
  })
}

const mailtoHref = computed(() =>
    `mailto:${email}?subject=${encodeURIComponent('Hello from kopva.com')}`
)
const mailtoWith = (subject: string) =>
    `mailto:${email}?subject=${encodeURIComponent(subject)}`

/* simple mailto “form” */
const form = ref({
  name: '',
  from: '',
  topic: 'Support',
  message: ''
})
function composeMail(){
 alert('to do')
  // const parts: string[] = []
  // if (form.value.name) parts.push(`Name: ${form.value.name}`)
  // if (form.value.from) parts.push(`Email: ${form.value.from}`)
  // parts.push('', form.value.message || '')
  // const body = encodeURIComponent(parts.join('\n'))
  // const subject = encodeURIComponent(`Contact – ${form.value.topic}`)
  // window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
/* Header */
.nav-link{ color:#fff; opacity:.9; transition:opacity .15s ease }
.nav-link:hover{ opacity:1 }
.btn-header{ @apply inline-flex items-center justify-center font-bold rounded-lg px-3.5 py-2; }
.btn-header--primary{ @apply bg-primary text-white; }
.btn-header--sm{ @apply px-3 py-1.5 rounded-md font-extrabold; }

/* Hero background (soft, brandy, no harsh mix) */
.hero-bg{
  position:absolute; inset:0; top:-1px; /* hide seam under sticky header */
  height: clamp(320px, 40vh, 420px);
  z-index:0; pointer-events:none;
}
.hero-bg--soft{
  background:
      radial-gradient(90% 60% at 10% 10%, rgba(151,200,235,.18), transparent 60%),
      radial-gradient(85% 55% at 90% -10%, rgba(84,177,107,.14), transparent 60%),
      linear-gradient(180deg, #ffffff 0%, #f7fbff 60%, #ffffff 100%);
}
@supports (mask-image: linear-gradient(black, transparent)){
  .hero-bg--soft{ mask-image: linear-gradient(#000 0%, #000 88%, transparent 100%); }
}

/* Cards & small bits */
.tile{ @apply rounded-2xl bg-white p-4 ring-1 ring-black/5 hover:ring-black/10 transition; box-shadow: 0 12px 30px -20px rgba(0,16,17,.15); }
.pill-icon{ @apply h-10 w-10 rounded-xl grid place-items-center text-base font-bold transition; }
.h4{ @apply font-extrabold text-secondary; }
.muted{ @apply text-secondary/70; }

/* Form */
.label{ @apply block text-sm font-semibold text-secondary mb-1; }
.input{ @apply w-full rounded-xl bg-white border border-black/10 px-3.5 py-2.5 text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/40; }

/* Buttons */
.btn-primary{ @apply inline-flex items-center gap-2 font-bold text-white bg-primary rounded-xl px-5 py-3; box-shadow: 0 12px 30px -12px rgba(84,177,107,.5); }
.btn-primary:hover{ filter: brightness(.95) }
.btn-primary:active{ transform: translateY(1px) }
</style>
