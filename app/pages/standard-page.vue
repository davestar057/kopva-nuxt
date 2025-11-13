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
          <a href="#faq" class="transition-colors hover:text-slate-900 dark:hover:text-white">FAQ</a>
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
              <span
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-100"
              >
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
            <a href="#faq" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">FAQ</a>
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
      <section class="relative overflow-hidden px-6 pb-24 pt-24" aria-labelledby="standard-hero">
        <div class="absolute -left-24 top-[-160px] h-[380px] w-[380px] rounded-full bg-gradient-to-br from-sky-100 via-white to-purple-100 blur-3xl"></div>
        <div class="absolute -right-16 top-28 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-emerald-100 via-white to-sky-200 blur-3xl"></div>
        <div class="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div class="space-y-8" data-animate="fade">
            <p class="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
              Kopva template
            </p>
            <h1 id="standard-hero" class="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              <span class="bg-gradient-to-r from-slate-900 via-sky-600 to-purple-500 bg-clip-text text-transparent">Craft polished product pages in minutes.</span>
            </h1>
            <p class="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Start with this Apple-inspired canvas to build support docs, feature releases, or partner handbooks that stay perfectly aligned with the PulsePro brand.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900 dark:shadow-[0_28px_80px_-48px_rgba(255,255,255,0.25)]"
              >
                Talk to sales
              </a>
              <a href="#overview" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">See structure</a>
            </div>
            <div class="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-400"></span>
                Built for Nuxt 3
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-purple-400"></span>
                Tailwind ready
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                Motion friendly
              </span>
            </div>
          </div>
          <div class="relative" data-animate="slide-up">
            <div class="absolute -top-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-200 via-white to-purple-200 blur-3xl"></div>
            <div class="relative overflow-hidden rounded-[40px] border border-white/70 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/70">
              <div class="rounded-[28px] border border-white/70 bg-white/80 p-8 dark:border-white/10 dark:bg-slate-900/70">
                <p class="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Drop-in section</p>
                <h2 class="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Hero + content shell</h2>
                <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Duplicate this page and replace the content blocks inside the ready-made sections to publish new, cohesive pages without rebuilding the frame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" class="border-y border-white/70 bg-white/80 py-24 dark:border-white/10 dark:bg-slate-900/60">
        <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-xl space-y-6" data-animate="fade">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Structure at a glance</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">Outline your story with intent</h2>
            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              The template flows from promise to proof, giving you ample space for narrative copy, visuals, and conversion moments. Swap in your own headlines while keeping the same refined rhythm.
            </p>
            <ul class="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <li class="flex gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                Hero, narrative, and CTA sections ready for quick duplication.
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                Grid-based highlights balance product specs with lifestyle storytelling.
              </li>
              <li class="flex gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Flexible content canvas suited for policies, onboarding, or product news.
              </li>
            </ul>
          </div>
          <div class="flex-1 space-y-8" data-animate="slide-left">
            <div class="overflow-hidden rounded-[36px] border border-white/70 bg-white/90 p-8 shadow-[0_36px_120px_-80px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/70">
              <div class="prose prose-slate max-w-none text-base leading-relaxed dark:prose-invert">
                <h3 class="tracking-tight">Your primary content canvas</h3>
                <p>
                  Use this container to drop in markdown, CMS content, or custom Vue components. The typography is tuned for clarity with generous spacing so longer-form copy remains as premium as the hero.
                </p>
                <p>
                  Pair it with imagery, charts, or testimonial modules to tell deeper stories about PulsePro&apos;s leak defense and automation stack.
                </p>
              </div>
            </div>
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60" data-animate="fade">
                <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Tip</p>
                <p class="mt-3 text-base font-semibold text-slate-900 dark:text-white">Swap imagery quickly</p>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">All visual frames use rounded corners and subtle shadows so any product render feels immediately on-brand.</p>
              </div>
              <div class="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60" data-animate="fade" style="--delay: 120ms">
                <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Guidance</p>
                <p class="mt-3 text-base font-semibold text-slate-900 dark:text-white">Use reveal animations</p>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">Attach <code>data-animate</code> attributes to trigger the same blur-and-slide reveals present on the main landing page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" class="mx-auto max-w-6xl px-6 py-24">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate="fade">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Asymmetrical cards</p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Build a mosaic of supporting points</h2>
          </div>
          <p class="max-w-xl text-base text-slate-600 dark:text-slate-300">
            Mix and match the cards below to highlight hardware specs, installation callouts, or customer wins. Each card inherits the floating shadows and rounded geometry of the homepage.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 md:auto-rows-[minmax(220px,_auto)] md:grid-cols-6">
          <article
            v-for="(card, index) in standardCards"
            :key="card.title"
            class="group relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-[0_32px_80px_-60px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_100px_-60px_rgba(15,23,42,0.6)] dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_32px_80px_-60px_rgba(15,23,42,0.7)]"
            :class="card.span"
            data-animate="fade"
            :style="{ '--delay': `${index * 110}ms` }"
          >
            <div class="absolute inset-0 bg-gradient-to-br opacity-80" :class="card.color"></div>
            <div class="relative z-10 flex h-full flex-col gap-4">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600/80 dark:text-slate-300/80">{{ card.tag }}</p>
              <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">{{ card.title }}</h3>
              <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ card.copy }}</p>
              <div v-if="card.cta" class="mt-auto text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                <a :href="card.cta.href">{{ card.cta.label }}</a>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-0 rounded-[32px] border border-white/60 dark:border-white/15"></div>
          </article>
        </div>
      </section>

      <section id="faq" class="border-y border-white/70 bg-white/80 py-24 dark:border-white/10 dark:bg-slate-900/60">
        <div class="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div class="space-y-6" data-animate="fade">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Knowledge base</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white">Answer common questions in style</h2>
            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Use the accordion-ready layout to surface install tips, service contacts, or policy reminders. Replace this copy with whatever your teams need to communicate.
            </p>
            <a href="mailto:hello@kopva.com" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
              <span>Still need help?</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
          <div class="space-y-4" data-animate="slide-left">
            <div
              v-for="(item, index) in faqs"
              :key="item.question"
              class="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
              :style="{ '--delay': `${index * 140}ms` }"
              data-animate="fade"
            >
              <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ item.question }}</p>
              <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="mx-auto max-w-5xl px-6 py-24" data-animate="fade">
        <div class="relative overflow-hidden rounded-[40px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-sky-100/60 p-14 text-center shadow-[0_60px_160px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_60px_160px_-90px_rgba(15,23,42,0.75)]">
          <div class="absolute -left-12 top-8 h-32 w-32 rounded-full bg-sky-200/60 blur-3xl"></div>
          <div class="absolute -right-14 bottom-0 h-40 w-40 rounded-full bg-purple-200/60 blur-3xl"></div>
          <div class="relative space-y-6">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Launch ready</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Clone the template and publish today</h2>
            <p class="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Keep your entire marketing and support universe visually cohesive. PulsePro&apos;s design language is built into every block so your team ships new content faster.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <a href="/index-new" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
                View homepage
              </a>
              <a href="/checkout" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">Purchase PulsePro</a>
            </div>
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
              <li><a href="#faq" class="transition hover:text-slate-900 dark:hover:text-white">FAQ</a></li>
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

const standardCards = [
  {
    tag: 'Narrative',
    title: 'Pair copy with lifestyle moments',
    copy: 'Blend practical product notes with homeowner stories to echo the warmth of the hero section.',
    color: 'from-sky-100 via-white/90 to-blue-100',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
  },
  {
    tag: 'Specs',
    title: 'Call out hardware confidence',
    copy: 'Detail shut-off response, Freeze Guard coverage, or battery life while keeping a premium tone.',
    color: 'from-emerald-100 via-white/90 to-teal-100',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
  },
  {
    tag: 'Guides',
    title: 'Link deeper documentation',
    copy: 'Route readers into setup tutorials, case studies, or partner playbooks without breaking the layout.',
    color: 'from-rose-100 via-white/90 to-amber-100',
    span: 'md:col-span-2 lg:col-span-2 xl:col-span-2',
    cta: { label: 'View docs', href: '/docs' },
  },
  {
    tag: 'Automation',
    title: 'Show the connected ecosystem',
    copy: 'Highlight how PulsePro, the valve controller, and the Kopva app stay in constant sync.',
    color: 'from-indigo-100 via-white/90 to-purple-100',
    span: 'md:col-span-4 lg:col-span-4 xl:col-span-4',
  },
];

const faqs = [
  {
    question: 'How do I duplicate this page for a new experience?',
    answer: 'From the Nuxt pages directory, copy standard-page.vue, rename it, and adjust the sections. All animations and theme styles will follow automatically.',
  },
  {
    question: 'Can I swap the hero visuals without breaking proportions?',
    answer: 'Yes. Replace the inner content block or imagery while keeping the rounded container, and the soft shadows will maintain the floating effect.',
  },
  {
    question: 'Where should policy or compliance copy live?',
    answer: 'Use the overview content canvas or add new cards under the details section to surface legal text without overwhelming the hero.',
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
  title: 'PulsePro Template',
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

[data-animate='slide-left'].animate-element {
  transform: translateX(48px);
}

.animate-element.is-visible {
  opacity: 1;
  transform: translate(0, 0);
  filter: blur(0);
}
</style>
