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
          <NuxtLink to="/" class="transition-colors hover:text-slate-900 dark:hover:text-white">Home</NuxtLink>
          <a href="#contact" class="transition-colors hover:text-slate-900 dark:hover:text-white">Contact</a>
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
            <span
                class="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 dark:translate-x-10 dark:bg-slate-950"
            >
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
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
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
            <NuxtLink
                to="/"
                class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                @click="closeMobile"
            >
              Home
            </NuxtLink>
            <a href="#contact" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Contact</a>
          </nav>
        </div>
      </transition>
    </header>

    <main id="contact">
      <section class="relative overflow-hidden px-6 pb-24 pt-12 md:pt-24" aria-labelledby="contact-title">
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
        <div class="relative mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <p class="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300" data-animate="fade">
            Let's talk
          </p>
          <h1 id="contact-title" class="text-5xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl" data-animate="fade" style="--delay: 120ms">
            We are here to help you protect every drop
          </h1>
          <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300" data-animate="fade" style="--delay: 220ms">
            Reach the Pipebudi team for product questions, partnership ideas, or a friendly chat about smarter water safety. We'll respond quickly with the details you need.
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400" data-animate="fade" style="--delay: 320ms">
            <span class="inline-flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-sky-400"></span>
              24/7 monitoring experts
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-purple-400"></span>
              Friendly human support
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Response under 1 business day
            </span>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-5xl px-6 pb-24">
        <div class="grid gap-6 md:grid-cols-2" data-animate="fade">
          <div class="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-[0_36px_90px_-70px_rgba(15,23,42,0.6)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_42px_120px_-70px_rgba(15,23,42,0.7)] dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_36px_90px_-70px_rgba(15,23,42,0.8)]">
            <div class="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-purple-100 opacity-80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950"></div>
            <div class="relative z-10 space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600/90 dark:text-slate-200/80">Support</p>
              <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">Talk with product specialists</h2>
              <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Share what you need for your property and we'll guide you through installing and monitoring Pipebudi.
              </p>
              <div class="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <div class="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/60 dark:text-sky-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p class="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Email</p>
                    <p class="font-semibold">support@pipebudi.example</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5A2.25 2.25 0 0021 19.5v-1.182c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.35-.263.512-.714.417-1.173L5.773 3.102A1.125 1.125 0 004.682 2.25H3.75A1.5 1.5 0 002.25 3.75v3z" />
                    </svg>
                  </span>
                  <div>
                    <p class="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Phone</p>
                    <p class="font-semibold">+44 (0)203 123 4567</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">
                  <span class="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/60 dark:text-amber-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75h3a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 18v-9a2.25 2.25 0 012.25-2.25h3m7.5 0V4.5A2.25 2.25 0 0013.5 2.25h-3A2.25 2.25 0 008.25 4.5v2.25m7.5 0h-7.5" />
                    </svg>
                  </span>
                  <div>
                    <p class="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Hours</p>
                    <p class="font-semibold">Mon–Fri, 8:00–18:00 GMT</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-0 rounded-[32px] border border-white/70 dark:border-white/15"></div>
          </div>

          <div class="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-[0_36px_90px_-70px_rgba(15,23,42,0.6)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_42px_120px_-70px_rgba(15,23,42,0.7)] dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_36px_90px_-70px_rgba(15,23,42,0.8)]" data-animate="fade" style="--delay: 140ms">
            <div class="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-sky-100 opacity-80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950"></div>
            <div class="relative z-10 space-y-4">
              <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600/90 dark:text-slate-200/80">Visit</p>
              <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">Come see us in London</h2>
              <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Our studio is set up for live demos of leak detection, freeze alerts, and the Kopva app. Book a slot to explore the hardware in person.
              </p>
              <div class="flex flex-col gap-3 text-sm text-slate-700 dark:text-slate-200">
                <div class="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">
                  <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                  <div>
                    <p class="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Address</p>
                    <p class="font-semibold">Rivergate Wharf, 12 Copper Lane, London EC2R 4HQ</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">
                  <span class="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                  <div>
                    <p class="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Press & Partnerships</p>
                    <p class="font-semibold">press@pipebudi.example</p>
                    <p class="text-sm text-slate-600 dark:text-slate-300">Share your ideas—we love collaborating on safer buildings.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">
                  <span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <div>
                    <p class="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Social</p>
                    <p class="font-semibold">@pipebudi on every channel</p>
                    <p class="text-sm text-slate-600 dark:text-slate-300">DM us for quick updates and behind-the-scenes engineering.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-0 rounded-[32px] border border-white/70 dark:border-white/15"></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/70 bg-white/70 py-8 dark:border-white/10 dark:bg-slate-950/70">
      <div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 dark:text-slate-300 sm:flex-row">
        <div class="flex items-center gap-3">
          <NuxtImg :src="pipbudiLogoSrc" alt="Pipebudi Logo" class="object-contain max-w-28" />
          <span class="hidden text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 sm:inline">Always-on leak defense</span>
        </div>
        <div class="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          <span>Made for homes and high-rises</span>
          <span class="hidden sm:inline">•</span>
          <span>Founded by Kopva</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useHead } from '#imports';
import { useTheme } from '~/composables/useTheme';

const mobileOpen = ref(false);
const { theme, toggleTheme } = useTheme();

const pipbudiLogoSrc = computed(() =>
  theme.value === 'dark' ? '/pipbudi-logo-white.png' : '/pipbudi-logo-black.png'
);

const closeMobile = () => {
  mobileOpen.value = false;
};

const lightHeroBackgroundStyle = {
  background: 'radial-gradient(circle at 20% 20%, rgba(125, 211, 252, 0.15), transparent 45%), radial-gradient(circle at 80% 30%, rgba(244, 114, 182, 0.12), transparent 40%), radial-gradient(circle at 40% 80%, rgba(94, 234, 212, 0.12), transparent 40%)',
};

let observer: IntersectionObserver | undefined;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer?.unobserve(entry.target as Element);
    }
  });
};

onMounted(() => {
  if (process.server) {
    return;
  }

  observer = new IntersectionObserver(handleIntersect, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.1,
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
  title: 'Contact Pipebudi | Talk with the Kopva team',
  meta: [
    {
      name: 'description',
      content: 'Reach the Pipebudi team for support, demos, and partnership ideas. We respond quickly with the details you need to keep water safe.',
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

.animate-element.is-visible {
  opacity: 1;
  transform: translate(0, 0);
  filter: blur(0);
}
</style>
