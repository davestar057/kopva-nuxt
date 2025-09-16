<!-- pages/legal-template.vue -->
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

    <!-- CONTENT HEADER (simple) -->
    <section class="bg-white -mt-px border-b border-black/5">
      <div class="container mx-auto px-4">
        <div class="py-10 md:py-12">
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-secondary">
            Privacy Policy
          </h1>
          <ClientOnly>
            <p class="mt-2 text-secondary/60">Last updated {{ new Date().toLocaleDateString() }}</p>
          </ClientOnly>
        </div>
      </div>
    </section>

    <!-- LEGAL CONTENT -->
    <section class="bg-white">
      <div class="container mx-auto px-4">
        <article class="legal mx-auto max-w-3xl py-10 md:py-14">

          <h2>1. Information we collect</h2>
          <p>
            Details about data types, purpose, and retention. Explain clearly what’s
            required vs optional.
          </p>

          <h3>1.1 Device & app data</h3>
          <ul>
            <li>Usage events (e.g., valve open/close)</li>
            <li>Temperature & leak alerts</li>
            <li>Basic diagnostics</li>
          </ul>

          <h2>2. How we use information</h2>
          <p>
            Monitoring, alerts, improving reliability, and customer support. Include
            your legal basis if applicable.
          </p>

          <h2>3. Sharing</h2>
          <p>
            Describe vendors, analytics, and circumstances (e.g., legal requests).
          </p>

          <h2>4. Your choices</h2>
          <ol>
            <li>Access or delete your data</li>
            <li>Manage notifications</li>
            <li>Close your account</li>
          </ol>

          <h2>Contact</h2>
          <address>
            Kopva Ltd<br>
            123 Example Street<br>
            hello@kopva.example
          </address>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const mobileOpen = ref(false)
</script>

<style scoped>
/* Header */
.nav-link{ color:#fff; opacity:.9; transition:opacity .15s ease }
.nav-link:hover{ opacity:1 }
.btn-header{ @apply inline-flex items-center justify-center font-bold rounded-lg px-3.5 py-2; }
.btn-header--primary{ @apply bg-primary text-white; }
.btn-header--sm{ @apply px-3 py-1.5 rounded-md font-extrabold; }

/* Legal typography (no typography plugin required) */
.legal > * + * { margin-top: 1rem; }
.legal h2{ @apply text-2xl md:text-3xl font-extrabold text-secondary mt-8; }
.legal h3{ @apply text-xl md:text-2xl font-extrabold text-secondary mt-6; }
.legal p{ @apply text-secondary/75 leading-relaxed; }
.legal ul{ @apply list-disc pl-5 text-secondary/75; }
.legal ol{ @apply list-decimal pl-5 text-secondary/75; }
.legal li{ @apply my-1; }
.legal a{ @apply text-primary underline-offset-2 hover:underline; }
.legal address{ @apply not-italic text-secondary/75 leading-relaxed; }
</style>
