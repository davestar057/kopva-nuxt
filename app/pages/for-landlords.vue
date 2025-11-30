<template>
  <div
    :class="[
      'min-h-screen transition-colors duration-500',
      theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-[#f7f8fc] text-slate-900'
    ]"
  >
    <header class="sticky top-0 z-40 border-b border-white/70 bg-[#f7f8fc]/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/75">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <NuxtLink to="/" class="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          <NuxtImg :src="pipbudiLogoSrc" alt="Pipebudi Logo" class="object-contain max-w-32" />
        </NuxtLink>
        <div class="hidden items-center gap-10 text-sm text-slate-600 dark:text-slate-300 lg:flex">
          <a href="#why" class="transition-colors hover:text-slate-900 dark:hover:text-white">Why it matters</a>
          <a href="#support" class="transition-colors hover:text-slate-900 dark:hover:text-white">How Pipebudi helps</a>
          <a href="#support" class="transition-colors hover:text-slate-900 dark:hover:text-white">Get Pipebudi</a>
        </div>
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="relative hidden h-10 w-20 items-center rounded-full border border-slate-300/70 bg-white/80 p-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400/40 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200 sm:inline-flex"
            :class="{ 'translate-y-0 shadow-lg': theme === 'dark' }"
            @click="toggleTheme"
            :aria-pressed="theme === 'dark'"
            aria-label="Toggle color mode"
          >
            <span class="pointer-events-none absolute inset-1 rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 opacity-0 transition-opacity duration-500 dark:opacity-100"></span>
            <span class="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 dark:translate-x-10 dark:bg-slate-950">
              <svg
                v-if="theme === 'light'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-4 w-4 text-slate-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-4 w-4 text-slate-200"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </span>
          </button>
          <a
            href="/checkout"
            class="hidden rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:text-slate-100 dark:hover:border-white/40 dark:hover:text-white sm:inline-flex"
          >
            Buy now
          </a>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/10 dark:text-slate-200 dark:hover:border-white/30 dark:hover:text-white lg:hidden"
            @click="mobileOpen = !mobileOpen"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <svg
              v-if="!mobileOpen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </nav>
      <transition name="fade">
        <div
          v-if="mobileOpen"
          id="mobile-navigation"
          class="border-t border-white/60 bg-[#f7f8fc]/95 px-6 pb-6 pt-4 text-sm text-slate-600 backdrop-blur dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
        >
          <nav class="flex flex-col gap-4">
            <button
              type="button"
              class="inline-flex items-center justify-between rounded-full border border-slate-300/70 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400/40 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200"
              @click="toggleTheme"
              :aria-pressed="theme === 'dark'"
            >
              <span>{{ theme === 'dark' ? 'Dark' : 'Light' }}</span>
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                <svg
                  v-if="theme === 'light'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="h-4 w-4"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </span>
            </button>
            <a href="#why" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Why it matters</a>
            <a href="#support" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">How Pipebudi helps</a>
            <a href="#support" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Get Pipebudi</a>
          <a
              href="/checkout"
              class="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2 font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:text-slate-100 dark:hover:border-white/40 dark:hover:text-white"
              @click="closeMobile"
            >
              Buy now
            </a>
          </nav>
        </div>
      </transition>
    </header>

    <main>
      <section class="relative overflow-hidden px-6 pb-24 pt-12 md:pt-24" aria-labelledby="hero-title">
        <div
          class="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700"
          :class="theme === 'light' ? 'opacity-100' : 'opacity-0'"
          :style="theme === 'light' ? lightHeroBackgroundStyle : undefined"
          aria-hidden="true"
        ></div>
        <div
          class="absolute -left-24 top-[-140px] h-72 w-72 opacity-40 blur-3xl sm:h-96 sm:w-96 sm:opacity-100"
          :class="[
            'rounded-full bg-gradient-to-br from-sky-100 via-white to-purple-100',
            theme === 'dark' ? 'opacity-30 sm:opacity-90' : ''
          ]"
        ></div>
        <div
          class="absolute -right-32 top-16 h-80 w-80 opacity-40 blur-3xl sm:h-[420px] sm:w-[420px] sm:opacity-100"
          :class="[
            'rounded-full bg-gradient-to-br from-amber-100 via-white to-sky-100',
            theme === 'dark' ? 'opacity-25 sm:opacity-90' : ''
          ]"
        ></div>

        <div class="relative mx-auto grid max-w-6xl items-start gap-10 rounded-[36px] border border-white/60 bg-white/80 px-8 py-12 shadow-[0_30px_140px_-80px_rgba(15,23,42,0.35)] backdrop-blur-lg dark:border-white/10 dark:bg-slate-950/60 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_26%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(94,234,212,0.14),transparent_35%),radial-gradient(circle_at_80%_82%,rgba(94,129,244,0.16),transparent_40%)]"></div>
          <div class="space-y-6 lg:space-y-8" data-animate="fade">
            <p class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200">
              Pipebudi • For Landlords
            </p>
            <div class="space-y-5">
              <h1 id="hero-title" class="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Keep rentals protected and tenants reassured.
              </h1>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6" data-animate="slide-up">
              <a
                href="/checkout"
                class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_88px_-44px_rgba(15,23,42,0.6)] dark:bg-white dark:text-slate-900 dark:shadow-[0_28px_80px_-48px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_36px_100px_-52px_rgba(255,255,255,0.3)]"
              >
                Protect my rentals
              </a>
              <a
                href="#support"
                class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-white/40 dark:hover:text-white"
              >
                <span class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
                Learn more
              </a>
            </div>
          </div>

          <div class="relative self-start" data-animate="fade" style="--delay: 160ms">
            <div class="relative h-full min-h-[340px] overflow-hidden rounded-[30px] border border-white/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl dark:border-white/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
              <div class="absolute inset-0">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80"
                  alt="Modern rental living room"
                  class="h-full w-full object-cover opacity-90 mix-blend-luminosity"
                />
                <div class="absolute inset-0 bg-gradient-to-l from-slate-900/75 via-slate-900/35 to-transparent dark:from-slate-950/80 dark:via-slate-950/50"></div>
                <div class="absolute inset-0 opacity-60 mix-blend-screen" :class="theme === 'dark' ? 'bg-gradient-to-br from-white/10 via-slate-500/10 to-white/5' : 'bg-gradient-to-br from-sky-200/45 via-white/30 to-indigo-200/35'"></div>
              </div>
              <div class="relative flex h-full items-start justify-end p-6">
                <div class="rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-sm font-medium text-white backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                  Calm, lived-in detail without overpowering the hero.
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2" data-animate="fade" style="--delay: 240ms">
            <div class="columns-1 gap-8 text-lg leading-relaxed text-slate-600 md:columns-2 md:text-[17px] md:leading-[1.8] dark:text-slate-300">
              <p class="mb-6 break-inside-avoid">
                Did you know that water leaks in a rental property are typically the landlords
                responsibility to fix, coming under the property’s structure, exterior and plumbing
                systems as part of the Landlord and tenant Act 1985?
              </p>
              <p class="mb-6 break-inside-avoid">
                In addition to the stress caused, a catastrophic water leak can lead to substantial
                financial losses related to repairs, potential loss of rent and possible alternative
                accommodation costs. Whilst some of these losses may be covered by a
                comprehensive landlord insurance policy, taking proactive measures to minimise the
                risk of these events occurring is key.
              </p>
              <p class="mb-6 break-inside-avoid">
                Pipebudi can help reduce the risks Landlords face from water leaks via continuous
                water flow monitoring during unoccupied periods, allowing landlords and tenants to
                remotely turn water off when not at the property, and helping to mitigate the risk of
                frozen pipes when temperatures start to drop.
              </p>
              <p class="break-inside-avoid">
                Join our legion of Landlords that are already engaging with Pipebudi to help reduce
                their risks of catastrophic property leaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" class="border-t border-white/70 bg-white/60 px-6 py-16 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
        <div class="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div class="space-y-4 lg:w-1/3" data-animate="fade">
            <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Why this matters</h2>
            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Rental portfolios deserve calm, controlled water systems. Pipebudi supports you and your tenants without cluttering the experience.
            </p>
          </div>
          <div class="grid flex-1 gap-6 md:grid-cols-2" data-animate="fade" style="--delay: 120ms">
            <div class="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Responsibility awareness</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Did you know that water leaks in a rental property are typically the landlords responsibility to fix, coming under the property’s structure, exterior and plumbing systems as part of the Landlord and tenant Act 1985?
              </p>
            </div>
            <div class="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Financial continuity</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                In addition to the stress caused, a catastrophic water leak can lead to substantial financial losses related to repairs, potential loss of rent and possible alternative accommodation costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="support" class="px-6 py-16">
        <div class="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-[0_30px_120px_-70px_rgba(15,23,42,0.65)] dark:border-white/10 dark:from-white dark:via-slate-100 dark:to-white dark:text-slate-900">
          <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div class="space-y-3">
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-white/70 dark:text-slate-700">How Pipebudi helps</p>
              <h2 class="text-3xl font-semibold leading-tight">Pipebudi can help reduce the risks Landlords face from water leaks.</h2>
              <p class="max-w-2xl text-base leading-relaxed text-white/80 dark:text-slate-700">
                Pipebudi can help reduce the risks Landlords face from water leaks via continuous water flow monitoring during unoccupied periods, allowing landlords and tenants to remotely turn water off when not at the property, and helping to mitigate the risk of frozen pipes when temperatures start to drop.
              </p>
            </div>
            <div class="flex flex-col gap-3 md:items-end">
              <a
                href="/checkout"
                class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-900 dark:text-white"
              >
                Get Pipebudi
              </a>
              <p class="text-xs text-white/70 dark:text-slate-600">Join our legion of Landlords taking proactive measures.</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="border-t border-white/70 bg-white/60 pb-12 pt-10 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
        <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p data-animate="fade" style="--delay: 120ms">
            &copy; {{ currentYear }} Kopva. All rights reserved.<br />Pipebudi® is a registered trademark of Kopva Limited.
            Kopva Limited is a company registered in England and Wales.<br />Registered number: 13051363
          </p>
          <div class="flex flex-wrap gap-4" data-animate="fade" style="--delay: 180ms">
            <a href="/privacy" class="transition hover:text-slate-600 dark:hover:text-slate-300">Privacy</a>
            <a href="/terms" class="transition hover:text-slate-600 dark:hover:text-slate-300">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const lightHeroBackgroundStyle = {
  backgroundImage: [
    'radial-gradient(120% 120% at 8% 25%, rgba(59, 130, 246, 0.42), rgba(247, 248, 252, 0) 70%)',
    'radial-gradient(120% 120% at 85% 5%, rgba(251, 191, 36, 0.52), rgba(247, 248, 252, 0) 72%)',
    'radial-gradient(150% 150% at 55% 110%, rgba(165, 180, 252, 0.5), rgba(247, 248, 252, 0) 75%)',
    'linear-gradient(185deg, rgba(247, 248, 252, 0.95) 0%, rgba(255, 255, 255, 0.88) 45%, rgba(236, 241, 255, 0.96) 100%)',
  ].join(', '),
  backgroundBlendMode: 'screen, screen, multiply, normal',
};

const mobileOpen = ref(false);
const { theme, toggleTheme } = useTheme();

const pipbudiLogoSrc = computed(() =>
  theme.value === 'dark' ? '/pipbudi-logo-white.png' : '/pipbudi-logo-black.png'
);
const createdByLogoSrc = computed(() =>
  theme.value === 'dark' ? '/created-by-kopva-white.png' : '/created-by-kopva-black.png'
);

const currentYear = new Date().getFullYear();

const closeMobile = () => {
  mobileOpen.value = false;
};

let observer;

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer?.unobserve(entry.target);
    }
  });
};

onMounted(() => {
  if (process.server) {
    return;
  }

  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px',
  });

  const animateElements = document.querySelectorAll('[data-animate]');
  animateElements.forEach((el, index) => {
    el.classList.add('animate-element');
    el.style.setProperty('--delay', `${index * 80}ms`);
    observer?.observe(el);
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

useHead({
  title: 'Pipebudi for Landlords | Modern leak prevention for rentals',
  meta: [
    {
      name: 'description',
      content:
        'Protect rental properties with remote shutoff, frost awareness, and continuous monitoring so leaks are stopped before they affect tenants or revenue.',
    },
    {
      property: 'og:title',
      content: 'Pipebudi for Landlords | Modern leak prevention for rentals',
    },
    {
      property: 'og:description',
      content:
        'Landlord-first leak protection with monitoring during vacant periods, tenant-friendly controls, and instant alerts to prevent catastrophic damage.',
    },
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
    },
  ],
});
</script>

<style scoped>
:global(body) {
  font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #f7f8fc;
  color: #0f172a;
  transition: background-color 400ms ease, color 400ms ease;
}

:global(.dark body) {
  background-color: #020617;
  color: #e2e8f0;
}

.animate-element {
  opacity: 0;
  transform: translateY(48px);
  filter: blur(20px);
  transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease;
  transition-delay: var(--delay, 0ms);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
</style>
