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
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">pp</span>
          <span>pulsepro</span>
        </NuxtLink>
        <div class="hidden items-center gap-10 text-sm text-slate-600 dark:text-slate-300 lg:flex">
          <a href="#overview" class="transition-colors hover:text-slate-900 dark:hover:text-white">Overview</a>
          <a href="#details" class="transition-colors hover:text-slate-900 dark:hover:text-white">Details</a>
          <a href="#resources" class="transition-colors hover:text-slate-900 dark:hover:text-white">Resources</a>
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
            <span
              class="pointer-events-none absolute inset-1 rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 opacity-0 transition-opacity duration-500 dark:opacity-100"
            ></span>
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
            <a href="#overview" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Overview</a>
            <a href="#details" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Details</a>
            <a href="#resources" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Resources</a>
          </nav>
        </div>
      </transition>
    </header>

    <main class="relative overflow-hidden">
      <section id="overview" class="mx-auto max-w-6xl px-6 pb-24 pt-16" data-animate="fade">
        <div class="rounded-[44px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-14 shadow-[0_60px_160px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-900/85 dark:shadow-[0_60px_160px_-90px_rgba(15,23,42,0.9)]">
          <div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div class="max-w-2xl space-y-6">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Documentation template</p>
              <h1 class="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">Policy &amp; essentials layout</h1>
              <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Reuse this page for privacy policies, service terms, warranty statements, or any long-form narrative. The soft gradients and generous spacing keep the content approachable while matching the premium PulsePro aesthetic.
              </p>
            </div>
            <div class="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/90 p-6 text-sm text-slate-600 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200">
              <p class="font-semibold text-slate-900 dark:text-white">Quick facts</p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                  Auto theme toggle shared across pages
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                  Responsive hero for policy intros
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                  Modular content blocks with animation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="details" class="mx-auto max-w-6xl px-6 pb-24" data-animate="slide-up">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article class="space-y-10 rounded-[36px] border border-white/80 bg-white/90 p-12 text-base leading-relaxed text-slate-600 shadow-[0_40px_120px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200">
            <div class="space-y-4">
              <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">Using this template</h2>
              <p>
                Swap the headings and paragraphs to match your legal or informational content. This canvas is intentionally minimal so focus stays on the words while still feeling premium. Add additional sections below or duplicate the article component for longer disclosures.
              </p>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Sample structure</h3>
              <ol class="list-decimal space-y-2 pl-6">
                <li>Introduce the agreement with a short purpose statement.</li>
                <li>Outline key responsibilities, features, or guarantees.</li>
                <li>Clarify how users can reach support or escalate requests.</li>
                <li>Close with compliance, jurisdiction, or update cadence.</li>
              </ol>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Voice and tone</h3>
              <p>
                Reuse copy from the main landing page where helpful, especially messaging around leak defense, Freeze Guard, and concierge onboarding. Consistency builds trust as customers move between marketing and policy sections.
              </p>
              <p>
                For urgent notices or time-sensitive updates, wrap them in the callout component shown in the sidebar so they never get overlooked.
              </p>
            </div>
          </article>
          <aside class="flex flex-col gap-6">
            <div class="rounded-[28px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-sky-100/60 p-8 text-sm text-slate-600 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-900/80 dark:text-slate-200">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Need assistance?</p>
              <h3 class="mt-3 text-xl font-semibold text-slate-900 dark:text-white">PulsePro legal desk</h3>
              <p class="mt-3">
                Email <a href="mailto:legal@kopva.com" class="font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-white">legal@kopva.com</a> for compliance questions, data requests, or partnership agreements.
              </p>
              <p class="mt-3 text-slate-500 dark:text-slate-300">Response within one business day.</p>
            </div>
            <div class="rounded-[28px] border border-white/80 bg-white/90 p-8 text-sm text-slate-600 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Helpful links</p>
              <ul class="mt-4 space-y-3">
                <li v-for="link in quickLinks" :key="link.label">
                  <a :href="link.href" class="group inline-flex items-center gap-2 text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white">
                    <span>{{ link.label }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4 transition group-hover:translate-x-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L6.75 17.25" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 17.25h-10.5v-10.5" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="resources" class="mx-auto max-w-6xl px-6 pb-24" data-animate="fade" style="--delay: 120ms">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(tile, index) in infoTiles"
            :key="tile.title"
            class="rounded-[28px] border border-white/80 bg-white/90 p-8 text-sm text-slate-600 shadow-[0_36px_110px_-80px_rgba(15,23,42,0.55)] transition hover:-translate-y-1 hover:shadow-[0_48px_140px_-90px_rgba(15,23,42,0.6)] dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200"
            :style="{ '--delay': `${index * 80}ms` }"
            data-animate="fade"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">{{ tile.tag }}</p>
            <h3 class="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{{ tile.title }}</h3>
            <p class="mt-3">{{ tile.copy }}</p>
            <div v-if="tile.cta" class="mt-6">
              <a :href="tile.cta.href" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white">
                {{ tile.cta.label }}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L6.75 17.25" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 17.25h-10.5v-10.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-6 pb-32" data-animate="fade" style="--delay: 200ms">
        <div class="rounded-[36px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-12 text-center shadow-[0_60px_160px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-900/85 dark:shadow-[0_60px_160px_-90px_rgba(15,23,42,0.9)]">
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Still have questions?</p>
          <h2 class="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">We&apos;re here for compliance and care</h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">Our concierge onboarding team partners with legal to make sure your install and documentation stay aligned.</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
              Contact support
            </a>
            <a href="/support" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white">Visit help center</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/70 bg-white/80 py-16 dark:border-white/10 dark:bg-slate-950/70">
      <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between" data-animate="fade">
        <div class="space-y-4">
          <NuxtLink to="/" class="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">pp</span>
            <span>pulsepro</span>
          </NuxtLink>
          <p class="max-w-sm text-sm text-slate-500 dark:text-slate-300">
            PulsePro by Kopva keeps every valve protected with adaptive leak detection, freeze guard, and concierge support whenever you need it.
          </p>
        </div>
        <div class="grid flex-1 grid-cols-2 gap-10 text-sm text-slate-500 dark:text-slate-300 sm:grid-cols-3">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Explore</p>
            <ul class="space-y-2">
              <li><a href="#overview" class="transition hover:text-slate-900 dark:hover:text-white">Overview</a></li>
              <li><a href="#details" class="transition hover:text-slate-900 dark:hover:text-white">Details</a></li>
              <li><a href="#resources" class="transition hover:text-slate-900 dark:hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Support</p>
            <ul class="space-y-2">
              <li><a href="/support" class="transition hover:text-slate-900 dark:hover:text-white">Help center</a></li>
              <li><a href="/installers" class="transition hover:text-slate-900 dark:hover:text-white">Find installers</a></li>
              <li><a href="/contact" class="transition hover:text-slate-900 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Stay in touch</p>
            <ul class="space-y-2">
              <li><a href="mailto:hello@kopva.com" class="transition hover:text-slate-900 dark:hover:text-white">hello@kopva.com</a></li>
              <li><a href="https://instagram.com" class="transition hover:text-slate-900 dark:hover:text-white">Instagram</a></li>
              <li><a href="https://twitter.com" class="transition hover:text-slate-900 dark:hover:text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-12 flex max-w-6xl flex-col gap-4 px-6 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p data-animate="fade" style="--delay: 120ms">&copy; {{ currentYear }} Kopva. All rights reserved.</p>
        <div class="flex flex-wrap gap-4" data-animate="fade" style="--delay: 180ms">
          <a href="/privacy" class="transition hover:text-slate-600 dark:hover:text-slate-300">Privacy</a>
          <a href="/terms" class="transition hover:text-slate-600 dark:hover:text-slate-300">Terms</a>
          <a href="/status" class="transition hover:text-slate-600 dark:hover:text-slate-300">System status</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const { theme, toggleTheme } = useTheme();
const mobileOpen = ref(false);
const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: 'Download privacy PDF', href: '/privacy.pdf' },
  { label: 'Warranty coverage', href: '/warranty' },
  { label: 'Product safety', href: '/safety' },
];

const infoTiles = [
  {
    tag: 'Trust',
    title: 'Security pledge',
    copy: 'Outline how Kopva encrypts leak data, stores customer preferences, and responds to disclosure requests.',
  },
  {
    tag: 'Support',
    title: 'Freeze Guard coverage',
    copy: 'Clarify terms around our freeze-prevention guarantee and what qualifies for concierge intervention.',
  },
  {
    tag: 'Billing',
    title: 'Subscription clarity',
    copy: 'Document billing cadence, renewal reminders, and how to manage add-on hardware through the Kopva app.',
  },
  {
    tag: 'Compliance',
    title: 'Regional policies',
    copy: 'Link to jurisdiction-specific clauses or translations if your rollout spans multiple service areas.',
    cta: { label: 'View region map', href: '/coverage' },
  },
  {
    tag: 'Community',
    title: 'Installer standards',
    copy: 'Share expectations for certified partners so homeowners trust every on-site appointment.',
  },
  {
    tag: 'Continuity',
    title: 'Update cadence',
    copy: 'Note how often legal documents are reviewed and how customers will be notified of revisions.',
  },
];

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
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15,
  });

  const register = () => {
    document.querySelectorAll('[data-animate]').forEach((element) => {
      element.classList.add('animate-element');
      observer?.observe(element);
    });
  };

  if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
    window.requestAnimationFrame(register);
  } else {
    register();
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

useHead({
  title: 'PulsePro Content Template',
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

[data-animate='fade'].animate-element {
  transform: translateY(36px);
}

[data-animate='slide-up'].animate-element {
  transform: translateY(72px);
}

.animate-element.is-visible {
  opacity: 1;
  transform: translate(0, 0);
  filter: blur(0);
}
</style>
