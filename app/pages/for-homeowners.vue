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
          <a href="#steps" class="transition-colors hover:text-slate-900 dark:hover:text-white">Practical steps</a>
          <a href="#cta" class="transition-colors hover:text-slate-900 dark:hover:text-white">Get Pipebudi</a>
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
            <a href="#steps" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Practical steps</a>
            <a href="#cta" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Get Pipebudi</a>
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

        <div class="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/60 bg-white/80 px-8 py-12 shadow-[0_30px_140px_-80px_rgba(15,23,42,0.35)] backdrop-blur-lg dark:border-white/10 dark:bg-slate-950/60">
          <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_26%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(94,234,212,0.14),transparent_35%),radial-gradient(circle_at_80%_82%,rgba(94,129,244,0.16),transparent_40%)]"></div>
          <div class="absolute inset-0 -z-20 overflow-hidden">
            <NuxtImg
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
              alt="Calm modern home interior"
              class="hero-bg-image absolute -right-10 -top-10 h-[70%] w-[72%] object-cover object-right-top opacity-70 mix-blend-screen"
            />
            <div class="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-white/10 transition-colors duration-500 dark:from-slate-950 dark:via-slate-950/85 dark:to-slate-950/30"></div>
            <div class="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent dark:from-white/5"></div>
          </div>

          <div class="relative grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]" data-animate="fade">
            <div class="space-y-6 lg:space-y-8">
              <p class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200">
                Pipebudi • For Home Owners
              </p>
              <div class="space-y-5">
                <h1 id="hero-title" class="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Keep your home calm, dry, and protected.
                </h1>
              </div>
              <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6" data-animate="slide-up">
                <a
                  href="/checkout"
                  class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_88px_-44px_rgba(15,23,42,0.6)] dark:bg-white dark:text-slate-900 dark:shadow-[0_28px_80px_-48px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_36px_100px_-52px_rgba(255,255,255,0.3)]"
                >
                  Protect my home
                </a>
                <a
                  href="#cta"
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

            <div class="space-y-4 rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70">
              <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Where leaks hit hardest</h2>
              <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Escape-of-water claims are soaring. Pipebudi blends quietly into your home so you can spot issues early, pause water remotely, and keep sentimental spaces safe.
              </p>
              <ul class="grid gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-200 sm:grid-cols-2">
                <li class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">Escape of water alerts</li>
                <li class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">Remote water stop</li>
                <li class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">Peace for valuables</li>
                <li class="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">Always-on coverage</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section id="why" class="px-6 pb-12">
        <div class="mx-auto max-w-6xl space-y-10 rounded-[32px] border border-slate-200/70 bg-white/70 p-10 shadow-[0_28px_120px_-90px_rgba(15,23,42,0.55)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
          <div class="relative lg:col-span-2" data-animate="fade" style="--delay: 120ms">
            <div class="columns-1 gap-8 text-lg leading-relaxed text-slate-600 md:columns-2 md:text-[17px] md:leading-[1.8] dark:text-slate-300">
              <p class="mb-6 break-inside-avoid">
                Did you know that escape of water is the biggest single area of home insurance
                claims in the UK, with almost one in three of all home insurance claims in 2024
                coming from Escape of Water, based on a report from GoCompare.
              </p>
              <p class="mb-6 break-inside-avoid">
                According to the ABI, insurers now pay out over £1.8m every day for domestic
                property Escape of Water claims.
              </p>
              <p class="mb-6 break-inside-avoid">
                A burst pipe can leak 30 litres of water a minute - which if left to flow can cause
                significant damage in a short period of time.
              </p>
              <p class="mb-6 break-inside-avoid">
                The damage of a major water leak doesn't only have a huge financial impact, it can
                be devastating emotionally when precious, sentimental possessions become
                irreparably damaged.
              </p>
              <p class="break-inside-avoid">
                There are steps you can take to help reduce your risk of a major incident and reduce
                the impact if you do have a leak.
              </p>
            </div>
          </div>

          <div class="lg:col-span-2" data-animate="slide-up" style="--delay: 220ms">
            <div class="flex flex-col gap-6">
              <h2 id="steps" class="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-300">Practical steps</h2>
              <ul class="grid gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-base leading-relaxed text-slate-700 shadow-sm md:grid-cols-2 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200">
                <li class="break-inside-avoid">1. Know where your stopcock is and test it regularly</li>
                <li class="break-inside-avoid">2. Know where your water pipes before you start any DIY / drilling</li>
                <li class="break-inside-avoid">3. Fit a leak detection device, like Pipebudi, that can turn off the water if there is a leak</li>
                <li class="break-inside-avoid">4. Make sure a professional fits new plumbing appliances</li>
                <li class="break-inside-avoid">5. Regularly check for small leaks and drips in hard to spot areas</li>
                <li class="break-inside-avoid">6. Be careful what you put down the drains to prevent blockages</li>
                <li class="break-inside-avoid">7. Try to use appliances whilst you are in the home</li>
                <li class="break-inside-avoid">8. If you leave your property unoccupied for any length of time, make sure it is adequately heated to prevent frozen pipes and check your insurance for exclusions if your property is empty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="px-6 py-20">
        <div class="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-[0_30px_120px_-70px_rgba(15,23,42,0.65)] dark:border-white/10 dark:from-white dark:via-slate-100 dark:to-white dark:text-slate-900">
          <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div class="space-y-3">
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-white/70 dark:text-slate-700">Always-on protection</p>
              <h2 class="text-3xl font-semibold leading-tight">Fit a leak detection device, like Pipebudi, that can turn off the water if there is a leak.</h2>
              <p class="max-w-2xl text-base leading-relaxed text-white/80 dark:text-slate-700">
                Join homeowners who are taking proactive steps to keep their spaces calm, dry, and ready for whatever comes next.
              </p>
            </div>
            <div class="flex flex-col gap-3 md:items-end">
              <a
                href="/checkout"
                class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-900 dark:text-white"
              >
                Get Pipebudi
              </a>
              <p class="text-xs text-white/70 dark:text-slate-600">No installers needed. Works in light and dark mode.</p>
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
  title: 'Pipebudi for Home Owners | Calm protection from escape of water',
  meta: [
    {
      name: 'description',
      content:
        'Protect your home from escape of water with Pipebudi—remote shutoff, frost awareness, and proactive monitoring that fits a modern lifestyle.',
    },
    {
      property: 'og:title',
      content: 'Pipebudi for Home Owners | Calm protection from escape of water',
    },
    {
      property: 'og:description',
      content:
        'Reduce the risk of leaks ruining your home and sentimental belongings with Pipebudi’s remote-first leak detection and control.',
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

.hero-bg-image {
  -webkit-mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0));
  mask-image: linear-gradient(270deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0));
  filter: saturate(1.05) contrast(1.02);
}
</style>
