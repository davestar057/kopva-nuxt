<template>
  <div
      :class="[
      'min-h-screen transition-colors duration-500',
      theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-[#f7f8fc] text-slate-900'
    ]"
  >
    <header class="sticky top-0 z-40 border-b border-white/70 bg-[#f7f8fc]/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/75">
      <!--      <div class="container mx-auto">-->
      <!--        <NuxtImg src="/created_by_kopva.png" alt="Pipebudi Logo" class="object-contain max-w-32 ml-auto pt-2 pr-10" />-->
      <!--      </div>-->

      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">

        <NuxtLink to="/" class="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          <NuxtImg :src="pipbudiLogoSrc" alt="Pipebudi Logo" class="object-contain max-w-32" />
        </NuxtLink>
        <div class="hidden items-center gap-10 text-sm text-slate-600 dark:text-slate-300 lg:flex">
          <a href="#mosaic" class="transition-colors hover:text-slate-900 dark:hover:text-white">Features</a>
          <a href="#pricing" class="transition-colors hover:text-slate-900 dark:hover:text-white">Launch Offer</a>
          <a href="#" class="transition-colors hover:text-slate-900 dark:hover:text-white">Contact</a>
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
            <a href="#mosaic" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Features</a>
            <a href="#experience" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Experience</a>
            <a href="#pricing" class="transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" @click="closeMobile">Pricing</a>
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
      <section class="relative overflow-hidden px-6 pb-24 pt-14 md:pt-28" aria-labelledby="hero-title">

        <div
            class="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700"
            :class="theme === 'light' ? 'opacity-100' : 'opacity-0'"
            :style="theme === 'light' ? lightHeroBackgroundStyle : undefined"
            aria-hidden="true"
        ></div>
        <div
            class="absolute inset-x-10 top-10 -z-10 h-[540px] rounded-[60px] bg-gradient-to-b from-white/80 via-white/60 to-transparent blur-3xl dark:from-slate-900/90 dark:via-slate-950/60"
            aria-hidden="true"
        ></div>
        <div
            class="absolute -left-28 top-[120px] h-56 w-56 rotate-6 rounded-[32px] bg-gradient-to-br from-sky-100/70 via-white/60 to-purple-100/70 opacity-80 blur-2xl dark:from-slate-900/70 dark:via-sky-900/50 dark:to-purple-900/50"
        ></div>
        <div
            class="absolute -right-20 top-12 h-64 w-64 -rotate-6 rounded-[40px] bg-gradient-to-br from-amber-50 via-white/70 to-sky-100 opacity-70 blur-2xl dark:from-amber-900/30 dark:via-slate-900/60 dark:to-sky-900/40"
        ></div>
        <div class="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div class="space-y-8" data-animate="fade">
            <p class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
              Pipebudi for landlords
            </p>
            <div class="space-y-4">
              <h1 id="hero-title" class="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                <span
                    class="bg-clip-text text-transparent transition-colors duration-500"
                    :class="
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-sky-200 via-emerald-200 to-amber-200'
                        : 'bg-gradient-to-r from-slate-900 via-sky-600 to-emerald-500'
                    "
                >
                  A calmer way to protect every tenancy from leaks.
                </span>
              </h1>
              <p class="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Keep your properties compliant and income secure. Pipebudi listens for unusual water flow, shuts off automatically, and lets you and your tenants pause the supply from anywhere.
              </p>
            </div>
            <div class="grid gap-4 text-sm font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400 sm:grid-cols-3">
              <span class="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60"><span class="h-2 w-2 rounded-full bg-sky-400"></span> Portfolio ready</span>
              <span class="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60"><span class="h-2 w-2 rounded-full bg-purple-400"></span> Remote shut-off</span>
              <span class="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60"><span class="h-2 w-2 rounded-full bg-emerald-400"></span> Freeze aware</span>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                  href="/checkout"
                  class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_88px_-44px_rgba(15,23,42,0.6)] dark:bg-white dark:text-slate-900 dark:shadow-[0_28px_80px_-48px_rgba(255,255,255,0.25)] dark:hover:shadow-[0_36px_100px_-52px_rgba(255,255,255,0.3)]"
              >
                Protect my properties
              </a>
              <a
                  href="#mosaic"
                  class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-50 dark:hover:border-white/40"
              >
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                Explore features
              </a>
            </div>
            <div class="flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/70 p-6 text-left shadow-[0_28px_80px_-60px_rgba(15,23,42,0.6)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
              <p class="text-base font-semibold text-slate-800 dark:text-white">Why landlords choose Pipebudi</p>
              <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  Spot and shut down leaks during vacant periods so repairs don’t swallow a month’s rent.
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                  Give tenants an easy way to pause water remotely without risking frozen pipes.
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                  Document proactive protection for insurers and stay aligned with landlord obligations.
                </li>
              </ul>
            </div>
          </div>

          <div class="relative" data-animate="slide-up">
            <div class="absolute -left-10 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-200 via-white to-sky-200 opacity-60 blur-3xl dark:from-emerald-900/60 dark:via-slate-900/70 dark:to-sky-900/50"></div>
            <div class="absolute -right-10 top-16 h-32 w-32 rounded-full bg-gradient-to-br from-sky-200 via-white to-amber-100 opacity-60 blur-3xl dark:from-slate-900/70 dark:via-slate-900/50 dark:to-amber-900/40"></div>
            <div class="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/80 p-1 shadow-[0_48px_120px_-70px_rgba(15,23,42,0.75)] backdrop-blur dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_48px_120px_-70px_rgba(15,23,42,0.85)]">
              <div class="relative overflow-hidden rounded-[36px] border border-slate-200/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
                <div class="absolute inset-4 rounded-[28px] bg-[url('/pipebudi-close.jpg')] bg-cover bg-center opacity-80 mix-blend-luminosity"></div>
                <div class="absolute inset-0 rounded-[36px] bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-sky-900/50 dark:from-slate-950/90 dark:via-slate-900/70 dark:to-sky-950/60"></div>
                <div class="relative z-10 flex flex-col gap-6 text-white">
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <p class="text-xs uppercase tracking-[0.35em] text-slate-300">Live watch</p>
                      <p class="mt-2 text-2xl font-semibold">Unattended property</p>
                      <p class="text-sm text-slate-300">Auto shut-off armed • Temperature guard on</p>
                    </div>
                    <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-200 ring-1 ring-white/20">
                      Stable
                    </span>
                  </div>
                  <div class="rounded-3xl bg-white/10 p-4 backdrop-blur">
                    <div class="flex items-center justify-between text-sm font-semibold">
                      <span class="text-slate-100">Flow activity</span>
                      <span class="text-emerald-200">Quiet</span>
                    </div>
                    <div class="mt-3 h-2 w-full rounded-full bg-white/10">
                      <div class="h-2 w-1/3 rounded-full bg-gradient-to-r from-emerald-300 to-sky-300"></div>
                    </div>
                    <p class="mt-4 text-xs text-slate-200">Pipebudi is listening for anomalies while the property is unoccupied.</p>
                  </div>
                  <div class="grid gap-3 rounded-2xl bg-white/5 p-4 text-sm text-slate-100 sm:grid-cols-2">
                    <div class="rounded-xl bg-white/5 p-3">
                      <p class="text-xs uppercase tracking-[0.25em] text-slate-300">Remote valve</p>
                      <p class="mt-2 text-lg font-semibold">Armed</p>
                      <p class="text-[13px] text-slate-200">Tap to close from anywhere.</p>
                    </div>
                    <div class="rounded-xl bg-white/5 p-3">
                      <p class="text-xs uppercase tracking-[0.25em] text-slate-300">Frost guard</p>
                      <p class="mt-2 text-lg font-semibold">Active</p>
                      <p class="text-[13px] text-slate-200">Alerts when temps drop near freezing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section class="mx-auto max-w-6xl px-6 pb-16">
          <div class="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-10 shadow-[0_32px_100px_-70px_rgba(15,23,42,0.7)] dark:border-white/10 dark:bg-slate-950/70" data-animate="fade">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-100 opacity-70 dark:from-slate-900/70 dark:via-slate-900/40 dark:to-sky-950/30"></div>
            <div class="absolute -left-24 top-10 h-48 w-48 rounded-full bg-gradient-to-br from-sky-200 via-white to-amber-100 opacity-70 blur-3xl dark:from-slate-900/50 dark:via-slate-900/30 dark:to-amber-900/40"></div>
            <div class="absolute -right-16 -bottom-8 h-56 w-56 rounded-full bg-gradient-to-br from-purple-100 via-white to-sky-200 opacity-70 blur-3xl dark:from-purple-950/40 dark:via-slate-900/40 dark:to-sky-950/40"></div>
            <div class="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div class="space-y-4 text-left">
                <p class="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Peace of mind for every tenancy</p>
                <h2 class="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Built for landlords who can’t afford water surprises</h2>
                <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Did you know that water leaks in a rental property are typically the landlords responsibility to fix, coming under the property’s structure, exterior and plumbing systems as part of the Landlord and tenant Act 1985?
                </p>
                <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  In addition to the stress caused, a catastrophic water leak can lead to substantial financial losses related to repairs, potential loss of rent and possible alternative accommodation costs. Whilst some of these losses may be covered by a comprehensive landlord insurance policy, taking proactive measures to minimise the risk of these events occurring is key.
                </p>
                <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Pipebudi can help reduce the risks Landlords face from water leaks via continuous water flow monitoring during unoccupied periods, allowing landlords and tenants to remotely turn water off when not at the property, and helping to mitigate the risk of frozen pipes when temperatures start to drop.
                </p>
                <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Join our legion of Landlords that are already engaging with Pipebudi to help reduce their risks of catastrophic property leaks.
                </p>
                <div class="flex flex-wrap gap-3 pt-2 text-sm text-slate-600 dark:text-slate-300">
                  <span class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 font-semibold uppercase tracking-[0.28em] shadow-sm dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100">
                    <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                    Insurance friendly
                  </span>
                  <span class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 font-semibold uppercase tracking-[0.28em] shadow-sm dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100">
                    <span class="h-2 w-2 rounded-full bg-sky-400"></span>
                    Tenant ready tools
                  </span>
                  <span class="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 font-semibold uppercase tracking-[0.28em] shadow-sm dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100">
                    <span class="h-2 w-2 rounded-full bg-purple-400"></span>
                    Winter aware
                  </span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-8 shadow-[0_32px_80px_-60px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/80" data-animate="slide-up">
                <div class="absolute inset-0 rounded-[28px] bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-sky-900/50 opacity-90 dark:from-slate-950/90 dark:via-slate-900/70 dark:to-sky-950/60"></div>
                <div class="relative z-10 space-y-4 text-white">
                  <p class="text-xs uppercase tracking-[0.3em] text-slate-200">Portfolio shield</p>
                  <p class="text-2xl font-semibold">Avoid empty-unit emergencies</p>
                  <p class="text-sm leading-relaxed text-slate-200">
                    Pre-set unoccupied schedules, prove diligence to insurers, and give every tenant remote shut-off control without handing over the stopcock.
                  </p>
                  <div class="rounded-2xl bg-white/10 p-4">
                    <div class="flex items-center justify-between text-sm font-semibold">
                      <span class="text-slate-100">Risk score</span>
                      <span class="rounded-full bg-emerald-400/20 px-3 py-1 text-xs uppercase tracking-[0.28em] text-emerald-100">Low</span>
                    </div>
                    <div class="mt-3 h-2 w-full rounded-full bg-white/10">
                      <div class="h-2 w-2/3 rounded-full bg-gradient-to-r from-emerald-300 to-sky-300"></div>
                    </div>
                    <p class="mt-3 text-xs text-slate-200">Remote valve control and frost guard enabled across your portfolio.</p>
                  </div>
                  <div class="grid gap-3 sm:grid-cols-2">
                    <div class="rounded-xl bg-white/10 p-3">
                      <p class="text-xs uppercase tracking-[0.28em] text-slate-200">Unoccupied watch</p>
                      <p class="mt-2 text-lg font-semibold">On</p>
                      <p class="text-[13px] text-slate-200">Flow monitoring every 15 seconds.</p>
                    </div>
                    <div class="rounded-xl bg-white/10 p-3">
                      <p class="text-xs uppercase tracking-[0.28em] text-slate-200">Tenant access</p>
                      <p class="mt-2 text-lg font-semibold">Shared</p>
                      <p class="text-[13px] text-slate-200">One tap to pause water while away.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="border-y border-white/70 bg-white/70 py-12 dark:border-white/10 dark:bg-slate-900/70">
        <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 text-sm text-slate-600 dark:text-slate-300">
          <div class="inline-flex items-center gap-3" data-animate="fade">
            <span class="h-2 w-2 rounded-full bg-sky-400"></span>
            <p><span class="font-semibold text-slate-900 dark:text-white">Auto shut-off</span> in seconds</p>
          </div>
          <div class="inline-flex items-center gap-3" data-animate="fade" style="--delay: 120ms">
            <span class="h-2 w-2 rounded-full bg-purple-400"></span>
            <p><span class="font-semibold text-slate-900 dark:text-white">10-minute install</span> on any valve</p>
          </div>
          <div class="inline-flex items-center gap-3" data-animate="fade" style="--delay: 220ms">
            <span class="h-2 w-2 rounded-full bg-amber-400"></span>
            <p><span class="font-semibold text-slate-900 dark:text-white">Remote app control</span> anywhere</p>
          </div>
        </div>
      </section>

      <section id="mosaic" class="mx-auto max-w-6xl px-6 py-24">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate="fade">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">The Pipebudi promise</p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">The 'Always-on' leak defense you can trust</h2>
          </div>
          <p class="max-w-xl text-base text-slate-600 dark:text-slate-300">
            Pipebudi blends pro-grade acoustic sensing, freeze awareness, and instant shutoff into one valve-mounted device, so homeowners catch drips when they start, keep pipes healthy through winter, and avoid costly insurance claims.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 md:auto-rows-[minmax(260px,_auto)] md:grid-cols-6">
          <article
              v-for="(card, index) in mosaicCards"
              :key="card.title"
              class="group relative overflow-hidden rounded-[34px] border border-white/80 bg-white/80 p-6 shadow-[0_32px_80px_-60px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_100px_-60px_rgba(15,23,42,0.6)] dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_32px_80px_-60px_rgba(15,23,42,0.7)] dark:hover:shadow-[0_36px_100px_-60px_rgba(15,23,42,0.75)]"
              :class="card.span"
              data-animate="fade"
              :style="{ '--delay': `${index * 90}ms` }"
          >
            <div class="absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 dark:opacity-95" :class="card.color"></div>
            <div class="relative z-10 flex h-full flex-col gap-4">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600/80 dark:text-slate-200/80">{{ card.tag }}</p>
              <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">{{ card.title }}</h3>
              <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-200">{{ card.copy }}</p>
              <div v-if="card.image" class="mt-auto overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-2 dark:border-white/10 dark:bg-slate-950/70">
                <img :src="card.image" :alt="`${card.title} visual`" class="h-full w-full rounded-2xl object-cover" />
              </div>
            </div>
            <div class="pointer-events-none absolute inset-0 rounded-[34px] border border-white/60 dark:border-white/15"></div>
          </article>
        </div>
      </section>

      <section id="experience" class="bg-white/80 py-24 dark:bg-slate-950/60">
        <div class="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div class="space-y-8" data-animate="fade">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Complete control</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Full-home water control from Pipebudi</h2>
            <p class="text-lg text-slate-600 dark:text-slate-300">
              Pipebudi listens for abnormal acoustics, tracks temperature swings, and syncs with the Kopva app so you can intervene—or let it shut off water automatically—before a leak spirals into a claim.
            </p>
            <ul class="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                Precision acoustic sensing spots leaks across pipework in seconds.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                Automated isolation valve reacts in seconds and can pause water while you are commuting, travelling, or renting your home out.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Works seamlessly with the Kopva mobile app for remote shut-off, freeze alerts, and household sharing.
              </li>
            </ul>
            <div class="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-300">
              <span class="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-slate-900/60">iOS + Android</span>
              <span class="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-slate-900/60">Free App</span>
              <span class="rounded-full border border-slate-200 bg-white/70 px-4 py-2 dark:border-white/10 dark:bg-slate-900/60">Smart notifications</span>
            </div>
          </div>
          <div class="relative" data-animate="slide-up">
            <div class="absolute -left-6 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-sky-100 via-white to-purple-100 blur-3xl"></div>
            <div class="relative overflow-hidden rounded-[40px] border border-white/70 bg-gradient-to-br from-sky-100 via-white to-amber-100 p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_40px_120px_-80px_rgba(15,23,42,0.7)]">
              <img
                  src="/pipebudi-close.jpg"
                  alt="Lifestyle with Pipebudi"
                  class="h-full w-full rounded-[28px] object-cover"
              />
            </div>
<!--            <div class="absolute -bottom-8 right-10 w-44 rounded-3xl border border-white/70 bg-white/80 p-4 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 shadow-lg dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300" data-animate="slide-left">-->
<!--              <p>Immediate notification if water leak is detected via an app</p>-->
<!--              <p class="mt-1 text-[11px] text-slate-400 dark:text-slate-500">Lifestyle ready</p>-->
<!--            </div>-->
          </div>
        </div>
      </section>



      <section id="pricing" class="relative overflow-hidden bg-white/80 py-24 dark:bg-slate-950">
        <div
            class="pricing-pattern"
            :class="{ 'pricing-pattern--dark': theme === 'dark' }"
            aria-hidden="true"
        ></div>
        <div class="relative z-10 mx-auto max-w-6xl px-6">
          <div
              class="relative overflow-hidden rounded-[44px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-[0_60px_160px_-90px_rgba(15,23,42,0.6)] dark:border-white/10 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-950 dark:shadow-[0_60px_160px_-90px_rgba(15,23,42,0.9)]"
              data-animate="fade"
          >
            <div class="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-500/15"></div>
            <div class="absolute -right-12 bottom-8 h-52 w-52 rounded-full bg-purple-100/70 blur-3xl dark:bg-violet-500/20"></div>
            <div class="relative grid gap-12 p-6 md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div class="space-y-8">
                <div class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-white/20 dark:bg-slate-900/80 dark:text-slate-200">
                  Launch pricing
                </div>
                <h3 class="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">Buy peace of mind</h3>
                <p class="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  The Pipebudi Smart Water Leak Detector reduces the risk of catastrophic leaks within your home. It provides 24/7 peace of mind, for water leaks and burst pipes. In the event of a leak, you will receive an instant notification via an app and you can remotely instruct your Pipebudi to turn your water off, to prevent any further water damage.
                </p>
                <ul class="grid gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:grid-cols-1">
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                    Immediate notification if water leak is detected via an app

                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                    Access anywhere...water can be remotely turned off, if leak detected while you are away from home
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                    Wi-Fi enabled
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                    24-hour monitoring
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                    Temperature detection for frozen pipes

                  </li>  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60 dark:bg-white/60"></span>
                  Back up battery

                </li>
                </ul>
              </div>
              <div class="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/95 p-10 text-center shadow-[0_40px_120px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-slate-900/85 dark:shadow-[0_40px_120px_-90px_rgba(15,23,42,0.85)]">
                <div class="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 shadow-[0_16px_36px_-28px_rgba(16,185,129,0.9)] dark:border-emerald-500/40 dark:bg-emerald-500/20 dark:text-emerald-100">
                  Use code
                  <code class="rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.35em] text-white shadow-[0_20px_50px_-34px_rgba(14,116,144,1)]">LAUNCH20</code>
                </div>
                <p class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">20% off launch offer</p>
                <p class="mt-5 text-6xl font-semibold text-slate-900 dark:text-white">£239</p>
                <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">Usually £299</p>
                <div class="mt-8 flex flex-col gap-3">
                  <a
                      href="/checkout"
                      class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_28px_80px_-46px_rgba(14,116,144,0.85)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_100px_-50px_rgba(14,116,144,0.9)]"
                  >
                    Buy now
                  </a>
                  <a href="#experience" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white">See what&apos;s included</a>
                </div>
                <div class="mt-8 rounded-3xl border border-slate-200/60 bg-slate-50/80 p-6 text-left text-xs leading-relaxed text-slate-500 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300">
                  <p class="font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-400">Bundle includes</p>
                  <ul class="mt-4 grid gap-2 text-slate-600 dark:text-slate-100">
                    <li>Pipebudi unit</li>
                    <li>WRAS approved 22mm ball isolation valve made up of the valve body, 2 olives, 2 compression nuts</li>
                    <li>2x 22mm to 15mm copper pipe reducers (only required if you have 15mm pipes)</li>
                    <li>15mm to 22mm plastic sleeve adapter (only required if you have 15mm pipes)</li>
                    <li>3 pin UK, USB plug</li>
                    <li>1.8m USB lead</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-4xl px-6 pb-28 pt-12" data-animate="fade">
        <div class="rounded-[40px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-sky-100/60 p-16 text-center shadow-[0_60px_160px_-90px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-900/80 dark:shadow-[0_60px_160px_-90px_rgba(15,23,42,0.9)]">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Ready when you are</p>
          <h2 class="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">Get 10% off on your Pipebudi</h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">Join thousands of proactive homeowners using Pipebudi to monitor, detect, and shut off leaks automatically.</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/checkout" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
              Buy now
            </a>
            <a href="#mosaic" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-100 dark:hover:text-white">Explore features</a>
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
                <li><a href="#mosaic" class="transition hover:text-slate-900 dark:hover:text-white">Features</a></li>
                <li><a href="#pricing" class="transition hover:text-slate-900 dark:hover:text-white">Buy Now</a></li>
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

const mosaicCards = [
  {
    tag: 'Intelligence',
    title: 'Automatically shuts off',
    copy: 'Automatically shuts off your water when a catastrophic leak is detected. Get peace of mind. Pipebudi closes your water supply when a leak is heard.',
    color: 'from-sky-100 via-white/90 to-blue-100 dark:from-slate-950 dark:via-sky-950/40 dark:to-blue-900/40',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
    image: '/pipbudi-wall.jpg',
  },
  {
    tag: 'Peace of mind',
    title: '24/7 Monitoring',
    copy: 'Pipebudi is working to protect you even when you are asleep. Simply connect Pipebudi to your water pipes, download the app, connect to Wi-Fi, and get started.',
    color: 'from-rose-100 via-white/90 to-amber-100 dark:from-slate-950 dark:via-rose-950/30 dark:to-amber-900/30',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
    image: '/kopva-ipad-prod.jpg',
  },
  {
    tag: 'Year round protection',
    title: 'Frozen pipes',
    copy: 'Frozen pipes can be a serious problem in winter. With built-in frost protection, if temperature reaches close to freezing,Pipebudi will notify you and can automatically turn off your water supply to further protect your property.',
    color: 'from-emerald-100 via-white/90 to-sky-100 dark:from-slate-950 dark:via-emerald-950/40 dark:to-sky-900/30',
    span: 'md:col-span-2 lg:col-span-2 xl:col-span-2',
    image: '/frozen-pipe.jpg',
  },
  {
    tag: 'Lifestyle',
    title: 'Away from home?',
    copy: 'Whether you’re on holiday or staying away a little longer, you can remotely instruct Pipebudi to turn off the water supply or switch to Away mode — so you can relax knowing you are protected.',
    color: 'from-purple-100 via-white/90 to-blue-100 dark:from-slate-950 dark:via-purple-950/40 dark:to-blue-900/40',
    span: 'md:col-span-4 lg:col-span-4 xl:col-span-4',
    image: '/away-from-home.jpg',
  },
  // {
  //   tag: 'Support',
  //   title: 'Concierge onboarding',
  //   copy: 'Schedule a remote walkthrough with Kopva experts to verify installation and set up automations in minutes.',
  //   color: 'from-slate-100 via-white/90 to-sky-100 dark:from-slate-950 dark:via-slate-900/70 dark:to-sky-900/30',
  //   span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
  // },
  // {
  //   tag: 'Coverage',
  //   title: 'Whole-home command center',
  //   copy: 'Pair the watch with the Kopva hub to orchestrate multiple valves, freeze guards, and leak sensors from a single tap.',
  //   color: 'from-indigo-100 via-white/90 to-purple-100 dark:from-slate-950 dark:via-indigo-950/40 dark:to-purple-900/40',
  //   span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
  // },
];

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
  title: 'Pipebudi for Landlords | Modern leak protection for every tenancy',
  meta: [
    {
      name: 'description',
      content:
        'Protect rental properties with Pipebudi—continuous flow monitoring, remote shut-off, and freeze awareness built to minimise landlord risk and keep tenants safe.',
    },
    {
      property: 'og:title',
      content: 'Pipebudi for Landlords | Modern leak protection for every tenancy',
    },
    {
      property: 'og:description',
      content:
        'Stay compliant with landlord obligations, reduce leak-related loss of rent, and give tenants remote water control with Pipebudi by Kopva.',
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

.pricing-pattern {
  position: absolute;
  top: -140px;
  right: -140px;
  bottom: -140px;
  left: -140px;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27240%27%20height%3D%27240%27%20viewBox%3D%270%200%20240%20240%27%3E%0A%20%20%3Cg%20fill%3D%27%2334a853%27%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2748%27%20cy%3D%2748%27%20r%3D%2728%27/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%27192%27%20cy%3D%27192%27%20r%3D%2728%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M28%20176l32-32%2032%2032-32%2032z%27/%3E%0A%20%20%20%20%3Crect%20x%3D%27148%27%20y%3D%27-12%27%20width%3D%2720%27%20height%3D%2796%27%20rx%3D%2710%27%20transform%3D%27rotate%2828%20148%20-12%29%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M188%2072l-30%2030%2030%2030%2014-14-16-16%2016-16z%27/%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E");
  background-size: 220px;
  background-repeat: repeat;
  opacity: 0.16;
  filter: saturate(120%);
  animation: pattern-drift 36s linear infinite;
  will-change: transform;
  pointer-events: none;
}

.pricing-pattern--dark {
  opacity: 0.12;
  filter: hue-rotate(180deg) brightness(1.2) saturate(140%);
}

@keyframes pattern-drift {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-160px, -120px, 0);
  }
}
</style>
