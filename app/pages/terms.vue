<!-- pages/terms.vue -->
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

    <!-- CONTENT HEADER -->
    <section class="bg-white -mt-px border-b border-black/5">
      <div class="container mx-auto px-4">
        <div class="py-10 md:py-12">
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-secondary">
            Terms of Service
          </h1>
          <ClientOnly>
            <p class="mt-2 text-secondary/60">Last updated {{ new Date().toLocaleDateString() }}</p>
          </ClientOnly>
        </div>
      </div>
    </section>

    <!-- TERMS CONTENT -->
    <section class="bg-white">
      <div class="container mx-auto px-4">
        <article class="legal mx-auto max-w-3xl py-10 md:py-14">
          <p>
            These Terms of Service (“Terms”) govern your purchase and use of the Kopva products
            and services, including the Pipebudi smart valve device, mobile apps, websites and any
            related services (collectively, the “Services”). By using the Services you agree to these
            Terms. If you do not agree, do not use the Services.
          </p>

          <h2>1. Who we are</h2>
          <p>
            The Services are provided by <strong>Kopva Ltd</strong> (“Kopva”, “we”, “us”). If you have questions,
            contact us at support@kopva.example.
          </p>

          <h2>2. Eligibility & accounts</h2>
          <p>
            You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Services.
            You are responsible for maintaining the confidentiality of your account and for all activity under it.
          </p>

          <h2>3. Device installation & safety</h2>
          <ul>
            <li>Install Pipebudi on a compatible isolation valve in accordance with the instructions.</li>
            <li>If you’re unsure, use a qualified installer. You are responsible for your installation choices.</li>
            <li>Do not use the device in environments outside its specified operating range.</li>
          </ul>

          <h2>4. Service features</h2>
          <ul>
            <li>Leak detection and automatic shut-off aim to limit damage but cannot prevent all incidents.</li>
            <li>Freeze protection responds to temperature thresholds you configure or accept by default.</li>
            <li>Connectivity and notifications require reliable power, Wi-Fi, and internet access.</li>
          </ul>

          <h2>5. Purchases, pricing & returns</h2>
          <p>
            Prices are shown at checkout and may change without notice. Taxes and shipping are calculated at purchase.
            Unless otherwise stated, you can return devices within 30 days in original condition. This does not affect
            any statutory rights you may have.
          </p>

          <h2>6. Software & updates</h2>
          <p>
            We may provide firmware and app updates that improve security and functionality. By using the Services you
            consent to receiving and installing such updates automatically.
          </p>

          <h2>7. Acceptable use</h2>
          <ul>
            <li>Do not reverse engineer, tamper with, or misuse the device or software.</li>
            <li>Do not circumvent safety features or disrupt our Services or other users.</li>
            <li>Use the Services only in compliance with applicable law.</li>
          </ul>

          <h2>8. Warranty</h2>
          <p>
            Kopva warrants the device against defects in materials and workmanship under normal use for
            the period stated at purchase. Remedies are limited to repair, replacement, or refund at our discretion.
            This warranty does not cover damage from misuse, improper installation, accidents, or unauthorized repair.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            The Services are provided “as is” and “as available”. We do not guarantee that leaks or frozen pipes will
            always be detected or prevented. To the fullest extent permitted by law, we disclaim all implied warranties,
            including merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2>10. Limitation of liability</h2>
          <p>
            To the extent permitted by law, Kopva will not be liable for indirect, incidental, special, consequential,
            or punitive damages, or for loss of profits, data, or goodwill. Our aggregate liability arising out of or
            relating to the Services will not exceed the amount you paid for the device giving rise to the claim.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold Kopva harmless from claims, damages, losses, and expenses (including
            reasonable legal fees) arising from your misuse of the Services or violation of these Terms.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate access to the Services if you violate these Terms or use the Services in a
            way that could cause harm. You may stop using the Services at any time.
          </p>

          <h2>13. Privacy</h2>
          <p>
            Our <a href="/privacy">Privacy Policy</a> explains how we collect and use information. By using the
            Services, you consent to those practices.
          </p>

          <h2>14. Governing law</h2>
          <p>
            These Terms are governed by the laws of your country/state of residence (or, if specified at checkout,
            the laws of the United Kingdom), without regard to conflict-of-law rules. Local mandatory consumer rights
            remain unaffected.
          </p>

          <h2>15. Changes to these Terms</h2>
          <p>
            We may update these Terms to reflect changes to the Services or legal requirements. If changes are
            material, we will provide notice by posting the updated Terms and updating the “Last updated” date above.
            Your continued use of the Services after changes become effective constitutes acceptance.
          </p>

          <h2>Contact</h2>
          <address>
            Kopva Ltd<br>
            123 Example Street<br>
            support@kopva.example
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

/* Legal typography */
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
