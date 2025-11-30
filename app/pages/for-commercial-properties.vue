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
          <a href="#benefits" class="transition-colors hover:text-slate-900 dark:hover:text-white">Benefits</a>
          <a href="#why" class="transition-colors hover:text-slate-900 dark:hover:text-white">Why it matters</a>
          <a href="#offer" class="transition-colors hover:text-slate-900 dark:hover:text-white">Launch offer</a>
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
            <a href="#benefits" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Benefits</a>
            <a href="#why" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Why it matters</a>
            <a href="#offer" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Launch offer</a>
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

        <div class="relative mx-auto grid max-w-6xl items-center gap-10 rounded-[36px] border border-white/60 bg-white/80 px-8 py-12 shadow-[0_30px_140px_-80px_rgba(15,23,42,0.35)] backdrop-blur-lg dark:border-white/10 dark:bg-slate-950/60 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_26%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(94,234,212,0.14),transparent_35%),radial-gradient(circle_at_80%_82%,rgba(94,129,244,0.16),transparent_40%)]"></div>
          <div class="space-y-6 lg:space-y-8" data-animate="fade">
            <p class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200">
              Pipebudi • For commercial properties
            </p>
            <div class="space-y-5">
              <h1 id="hero-title" class="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Keep your business space protected without pausing operations.
              </h1>
              <p class="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Pipebudi gives businesses a modern, remote-first way to prevent leaks before they become claims—whether you run a café, salon, or office.
              </p>
            </div>
            <div class="flex flex-col gap-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Across Europe, 1 in 3 commercial buildings experience monthly water leaks. Pipebudi keeps your premises calm with instant alerts, remote shutoff, and frost awareness.
              </p>
              <p>
                With protection designed for trading hours and after close, you reduce costly repairs, insurance hikes, and downtime that stops you serving customers.
              </p>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6" data-animate="slide-up">
              <a
                  href="/checkout"
                  class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_88px_-44px_rgba(15,23,42,0.6)] dark:bg-white dark:text-slate-900 dark:shadow-[0_28px_80px_-48px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_36px_100px_-52px_rgba(255,255,255,0.3)]"
              >
                Protect my business
              </a>
              <a
                  href="#why"
                  class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-white/40 dark:hover:text-white"
              >
                <span class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                See how it works
              </a>
            </div>
          </div>

          <div class="relative" data-animate="slide-left">
            <div class="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-white/60 via-sky-200/40 to-indigo-200/30 blur-3xl dark:from-white/10 dark:via-slate-800/60 dark:to-indigo-900/30"></div>
            <div class="absolute -right-12 bottom-6 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-100/60 via-white/40 to-sky-200/40 blur-3xl dark:from-emerald-900/30 dark:via-slate-900/60 dark:to-sky-900/40"></div>
            <div class="relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 shadow-[0_32px_110px_-70px_rgba(15,23,42,0.7)] dark:border-white/10">
              <div class="relative h-full rounded-[24px] bg-gradient-to-br from-white/8 via-slate-900/70 to-slate-950/80 p-4 backdrop-blur">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_84%_16%,rgba(94,234,212,0.12),transparent_32%)]"></div>
                <div class="overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-inner">
                  <img
                      src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80"
                      alt="Modern commercial interior"
                      class="h-[360px] w-full object-cover"
                  />
                </div>
                <div class="mt-4 flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-4 text-slate-100">
                  <p class="text-xs uppercase tracking-[0.3em] text-slate-300">For modern teams</p>
                  <p class="text-base font-semibold text-white">A calm workplace feel that blends with light or dark mode.</p>
                  <p class="text-sm text-slate-200">Use Pipebudi to keep your premises ready without being on-site.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" class="mx-auto max-w-6xl px-6 pb-24">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate="fade">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Purpose-built for workplaces</p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Effortless oversight during and after hours</h2>
          </div>
          <p class="max-w-xl text-base text-slate-600 dark:text-slate-300">
            Keep your premises trading with proactive monitoring, simple controls, and alerts that respect your time.
          </p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-3">
          <article class="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_28px_80px_-64px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_100px_-64px_rgba(15,23,42,0.6)] dark:border-white/10 dark:bg-slate-950/70">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Trade ready</p>
            <h3 class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Prevent shutdowns</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Avoid water damage that halts service by shutting off leaks early and keeping equipment safe.
            </p>
          </article>
          <article class="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_28px_80px_-64px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_100px_-64px_rgba(15,23,42,0.6)] dark:border-white/10 dark:bg-slate-950/70">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Meter-aware</p>
            <h3 class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Control consumption</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Stay ahead of rising smart-meter rollouts with visibility into continuous flow and tools to shut water off remotely.
            </p>
          </article>
          <article class="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_28px_80px_-64px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_100px_-64px_rgba(15,23,42,0.6)] dark:border-white/10 dark:bg-slate-950/70">
            <p class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Team friendly</p>
            <h3 class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Share access safely</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Give staff simple controls and alerts so they can act fast, while you keep ultimate authority over the valve.
            </p>
          </article>
        </div>
      </section>

      <section id="why" class="bg-white/80 py-24 dark:bg-slate-950/60">
        <div class="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div class="space-y-6" data-animate="fade">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Why it matters</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Protect uptime and reputation</h2>
            <p class="text-lg text-slate-600 dark:text-slate-300">
              Water damage can force closures, disrupt staff, and disappoint customers. Rising smart-meter installations highlight how common continuous leaks can be.
            </p>
            <div class="grid gap-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Pipebudi monitors flow during open hours and downtime, lets teams turn water off from anywhere, and helps mitigate frozen pipes when temperatures drop.
              </p>
              <p>
                Reduce the financial impact of leaks, avoid premium hikes, and keep your business trading without interruption.
              </p>
            </div>
          </div>
          <div class="rounded-[32px] border border-slate-200/70 bg-white/90 p-10 shadow-[0_40px_120px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/85 dark:shadow-[0_40px_120px_-90px_rgba(15,23,42,0.85)]" data-animate="slide-left">
            <ul class="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                Track continuous flow that can be flagged by smart meters and utility companies.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                Use remote shutoff to minimise damage and protect inventory or specialist equipment.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Keep operations running with alerts your team can act on instantly.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
                Temperature awareness helps avoid burst pipes that close the premises.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-slate-400"></span>
                Simple setup with Wi‑Fi connectivity and backup battery support for peace of mind.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="offer" class="mx-auto max-w-4xl px-6 pb-28 pt-12" data-animate="fade">
        <div class="rounded-[40px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-sky-100/60 p-16 text-center shadow-[0_60px_160px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-900/80 dark:shadow-[0_60px_160px_-90px_rgba(15,23,42,0.9)]">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Launch offer</p>
          <h2 class="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Protect your premises with 20% off</h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">Use code LAUNCH20 at checkout for your first Pipebudi device and start monitoring within minutes.</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/checkout" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
              Buy now
            </a>
            <a href="#benefits" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white">See what&apos;s included</a>
          </div>
        </div>
      </section>

      <footer class="border-t border-white/70 bg-white/80 py-16 dark:border-white/10 dark:bg-slate-950/70">
        <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between" data-animate="fade">
          <div class="space-y-4">
            <NuxtLink to="/" class="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
              <NuxtImg :src="pipbudiLogoSrc" alt="Pipebudi Logo" class="object-contain max-w-32" />
              <NuxtImg :src="createdByLogoSrc" alt="Kopva Logo" class="object-contain max-w-32" />
            </NuxtLink>
            <p class="max-w-sm text-sm text-slate-500 dark:text-slate-300">
              Pipebudi by Kopva keeps every valve protected with adaptive leak detection, freeze guard, and concierge support whenever you need it.
            </p>
          </div>
          <div class="grid flex-1 grid-cols-2 gap-10 text-sm text-slate-500 dark:text-slate-300 sm:grid-cols-3">
            <div class="space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Explore</p>
              <ul class="space-y-2">
                <li><a href="#benefits" class="transition hover:text-slate-900 dark:hover:text-white">Benefits</a></li>
                <li><a href="#offer" class="transition hover:text-slate-900 dark:hover:text-white">Buy Now</a></li>
              </ul>
            </div>
            <div class="space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Support</p>
              <ul class="space-y-2">
                <li><a href="/support" class="transition hover:text-slate-900 dark:hover:text-white">Help center</a></li>
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
          <p data-animate="fade" style="--delay: 120ms">&copy; {{ currentYear }} Kopva. All rights reserved.<br/>Pipebudi® is a registered trademark of Kopva Limited.
            Kopva Limited is a company registered in England and Wales.<br/>Registered number: 13051363</p>
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
  title: 'Pipebudi for Commercial Properties | Keep trading through leaks',
  meta: [
    {
      name: 'description',
      content:
        'Protect commercial spaces with remote shutoff, frost awareness, and continuous monitoring that reduces downtime and safeguards equipment.',
    },
    {
      property: 'og:title',
      content: 'Pipebudi for Commercial Properties | Keep trading through leaks',
    },
    {
      property: 'og:description',
      content:
        'Leak protection for businesses with proactive alerts, remote valve control, and team-friendly controls to avoid closures and costly damage.',
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

[data-animate='fade'].animate-element {
  transform: translateY(36px);
}

[data-animate='slide-up'].animate-element {
  transform: translateY(72px);
}

[data-animate='slide-right'].animate-element {
  transform: translateX(-48px);
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
