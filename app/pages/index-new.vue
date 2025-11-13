<template>
  <div class="min-h-screen bg-[#f7f8fc] text-slate-900">
    <header class="sticky top-0 z-40 border-b border-white/70 bg-[#f7f8fc]/80 backdrop-blur">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <NuxtLink to="/" class="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">pp</span>
          <span>pulsepro</span>
        </NuxtLink>
        <div class="hidden items-center gap-10 text-sm text-slate-600 lg:flex">
          <a href="#mosaic" class="transition-colors hover:text-slate-900">Features</a>
          <a href="#experience" class="transition-colors hover:text-slate-900">Experience</a>
          <a href="#pricing" class="transition-colors hover:text-slate-900">Pricing</a>
        </div>
        <div class="flex items-center gap-3">
          <a
            href="/checkout"
            class="hidden rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 sm:inline-flex"
          >
            Buy now
          </a>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-900 hover:text-slate-900 lg:hidden"
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
          class="lg:hidden border-t border-white/60 bg-[#f7f8fc]/95 px-6 pb-6 pt-4 text-sm text-slate-600 backdrop-blur"
        >
          <nav class="flex flex-col gap-4">
            <a href="#mosaic" class="transition-colors hover:text-slate-900" @click="closeMobile">Features</a>
            <a href="#experience" class="transition-colors hover:text-slate-900" @click="closeMobile">Experience</a>
            <a href="#pricing" class="transition-colors hover:text-slate-900" @click="closeMobile">Pricing</a>
            <a
              href="/checkout"
              class="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2 font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              @click="closeMobile"
            >
              Buy now
            </a>
          </nav>
        </div>
      </transition>
    </header>

    <main>
      <section class="relative overflow-hidden px-6 pb-24 pt-24" aria-labelledby="hero-title">
        <div class="absolute -left-24 top-[-140px] h-96 w-96 rounded-full bg-gradient-to-br from-sky-100 via-white to-purple-100 blur-3xl"></div>
        <div class="absolute -right-32 top-16 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-amber-100 via-white to-sky-100 blur-3xl"></div>
        <div class="relative mx-auto flex max-w-5xl flex-col items-center gap-16 text-center">
          <div class="space-y-8" data-animate="fade">
            <p class="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Kopva • PulsePro
            </p>
            <h1 id="hero-title" class="text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-7xl">
              <span class="bg-gradient-to-r from-slate-900 via-sky-600 to-purple-500 bg-clip-text text-transparent">
                Never pay for leaks again.
              </span>
            </h1>
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
              Automatic shut-off • Freeze Guard • App control
            </p>
            <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              Kopva PulsePro sits on your main water valve and watches for abnormal flow and freezing conditions. If something’s wrong, it alerts you and can automatically close the valve to prevent a large-scale disaster.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="/checkout"
                class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_88px_-44px_rgba(15,23,42,0.6)]"
              >
                Get PulsePro
              </a>
              <a href="#experience" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
                <span class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                How it works
              </a>
            </div>
            <div class="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-400"></span>
                24/7 monitoring
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-purple-400"></span>
                Install in under 10 minutes
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                Works with Kopva app
              </span>
            </div>
          </div>

          <div class="relative w-full max-w-3xl" data-animate="slide-up">
            <div class="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-200 via-white to-purple-200 blur-3xl"></div>
            <div class="relative overflow-hidden rounded-[48px] border border-white/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 shadow-[0_60px_140px_-80px_rgba(15,23,42,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
                alt="PulsePro smartwatch render"
                class="mx-auto h-[420px] w-auto max-w-full object-contain drop-shadow-[0_35px_45px_rgba(15,23,42,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="border-y border-white/70 bg-white/70 py-12">
        <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 text-sm text-slate-600">
          <div class="inline-flex items-center gap-3" data-animate="fade">
            <span class="h-2 w-2 rounded-full bg-sky-400"></span>
            <p><span class="font-semibold text-slate-900">Auto shut-off</span> in seconds</p>
          </div>
          <div class="inline-flex items-center gap-3" data-animate="fade" style="--delay: 120ms">
            <span class="h-2 w-2 rounded-full bg-purple-400"></span>
            <p><span class="font-semibold text-slate-900">10-minute install</span> on any valve</p>
          </div>
          <div class="inline-flex items-center gap-3" data-animate="fade" style="--delay: 220ms">
            <span class="h-2 w-2 rounded-full bg-amber-400"></span>
            <p><span class="font-semibold text-slate-900">Remote app control</span> anywhere</p>
          </div>
        </div>
      </section>

      <section id="mosaic" class="mx-auto max-w-6xl px-6 py-24">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate="fade">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">The Kopva promise</p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">An asymmetrical rhythm of protection</h2>
          </div>
          <p class="max-w-xl text-base text-slate-600">
            Every block in PulsePro is tuned to blend lifestyle, safety, and performance—borrowing the confident, airy layouts you expect from premium Apple experiences.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 md:auto-rows-[minmax(260px,_auto)] md:grid-cols-6">
          <article
            v-for="(card, index) in mosaicCards"
            :key="card.title"
            class="group relative overflow-hidden rounded-[34px] border border-white/80 bg-white/80 p-6 shadow-[0_32px_80px_-60px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_36px_100px_-60px_rgba(15,23,42,0.6)]"
            :class="card.span"
            data-animate="fade"
            :style="{ '--delay': `${index * 90}ms` }"
          >
            <div class="absolute inset-0 bg-gradient-to-br" :class="card.color"></div>
            <div class="relative z-10 flex h-full flex-col gap-4">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600/80">{{ card.tag }}</p>
              <h3 class="text-2xl font-semibold text-slate-900">{{ card.title }}</h3>
              <p class="text-sm leading-relaxed text-slate-600">{{ card.copy }}</p>
              <div v-if="card.image" class="mt-auto overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-2">
                <img :src="card.image" :alt="`${card.title} visual`" class="h-full w-full rounded-2xl object-cover" />
              </div>
            </div>
            <div class="pointer-events-none absolute inset-0 rounded-[34px] border border-white/60"></div>
          </article>
        </div>
      </section>

      <section id="experience" class="bg-white/80 py-24">
        <div class="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div class="space-y-8" data-animate="fade">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Connected comfort</p>
            <h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">Designed for quiet confidence</h2>
            <p class="text-lg text-slate-600">
              Slip PulsePro on and forget it&apos;s there. Soft pastel materials hug the wrist while Kopva intelligence watches over every valve and appliance in your home.
            </p>
            <ul class="space-y-4 text-sm leading-relaxed text-slate-600">
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
                Breathable knit loop with moisture-wicking threads inspired by athletic wear.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                Water flow, freeze detection, and ambient alerts unified in a single glanceable view.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Works seamlessly with the Kopva mobile app for remote shut-off and household sharing.
              </li>
            </ul>
          </div>
          <div class="relative" data-animate="slide-up">
            <div class="absolute -left-6 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-sky-100 via-white to-purple-100 blur-3xl"></div>
            <div class="relative overflow-hidden rounded-[40px] border border-white/70 bg-gradient-to-br from-sky-100 via-white to-amber-100 p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.55)]">
              <img
                src="https://images.unsplash.com/photo-1519868264212-24c3676428d7?auto=format&fit=crop&w=900&q=80"
                alt="Lifestyle with PulsePro"
                class="h-full w-full rounded-[28px] object-cover"
              />
            </div>
            <div class="absolute -bottom-8 right-10 w-44 rounded-3xl border border-white/70 bg-white/80 p-4 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 shadow-lg" data-animate="slide-left">
              <p>Everyday ease</p>
              <p class="mt-1 text-[11px] text-slate-400">Lifestyle ready</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-6 py-24">
        <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div class="relative" data-animate="slide-up">
            <div class="absolute -left-8 top-6 h-44 w-44 rounded-full bg-gradient-to-br from-purple-100 via-white to-sky-100 blur-3xl"></div>
            <div class="relative overflow-hidden rounded-[40px] border border-white/70 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-[0_40px_120px_-80px_rgba(15,23,42,0.5)]">
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=80"
                alt="PulsePro app preview"
                class="h-full w-full rounded-[28px] object-cover"
              />
            </div>
          </div>
          <div class="space-y-8" data-animate="fade">
            <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Command center</p>
            <h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">Water awareness at a glance</h2>
            <p class="text-lg text-slate-600">
              The Kopva app transforms the watch into a command center. Check live usage, schedule automations, and invite trusted contacts to co-manage your home in moments.
            </p>
            <div class="grid gap-5 sm:grid-cols-2">
              <div class="rounded-3xl border border-white/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm" data-animate="fade" style="--delay: 80ms">
                <p class="font-semibold text-slate-900">Intuitive controls</p>
                <p class="mt-2">Tap to close valves remotely, acknowledge alerts, or adjust guard modes instantly.</p>
              </div>
              <div class="rounded-3xl border border-white/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm" data-animate="fade" style="--delay: 160ms">
                <p class="font-semibold text-slate-900">Proactive insights</p>
                <p class="mt-2">Weekly digests highlight efficiency gains and surface unusual activity patterns.</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span class="rounded-full border border-slate-200 bg-white/70 px-4 py-2">iOS + Android</span>
              <span class="rounded-full border border-slate-200 bg-white/70 px-4 py-2">Home sharing</span>
              <span class="rounded-full border border-slate-200 bg-white/70 px-4 py-2">Secure notifications</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="bg-white/80 py-24">
        <div class="mx-auto max-w-6xl px-6">
          <div
            class="relative overflow-hidden rounded-[44px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-[0_60px_160px_-90px_rgba(15,23,42,0.6)]"
            data-animate="fade"
          >
            <div class="pricing-pattern" aria-hidden="true"></div>
            <div class="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sky-100/70 blur-3xl"></div>
            <div class="absolute -right-12 bottom-8 h-52 w-52 rounded-full bg-purple-100/70 blur-3xl"></div>
            <div class="relative grid gap-12 p-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div class="space-y-8">
                <div class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Launch pricing
                </div>
                <h3 class="text-4xl font-semibold text-slate-900 sm:text-5xl">Smart protection without compromise</h3>
                <p class="max-w-xl text-lg leading-relaxed text-slate-600">
                  PulsePro bundles the watch, valve controller, Freeze Guard sensors, and always-on app automations so you can monitor, detect, and shut off leaks automatically.
                </p>
                <ul class="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2">
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60"></span>
                    Auto shut-off when catastrophic leaks are detected
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60"></span>
                    Freeze Guard closes valves before pipes burst
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60"></span>
                    Control everything from the Kopva app anywhere
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-1 h-2 w-2 rounded-full bg-slate-900/60"></span>
                    Concierge onboarding with optional pro install
                  </li>
                </ul>
              </div>
              <div class="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/90 p-10 text-center shadow-[0_40px_120px_-90px_rgba(15,23,42,0.55)]">
                <div class="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 shadow-[0_16px_36px_-28px_rgba(16,185,129,0.9)]">
                  Use code
                  <code class="rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.35em] text-white shadow-[0_20px_50px_-34px_rgba(14,116,144,1)]">LAUNCH20</code>
                </div>
                <p class="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">20% off launch offer</p>
                <p class="mt-5 text-6xl font-semibold text-slate-900">$239</p>
                <p class="mt-2 text-sm text-slate-500">Usually $299</p>
                <div class="mt-8 flex flex-col gap-3">
                  <a
                    href="/checkout"
                    class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_28px_80px_-46px_rgba(14,116,144,0.85)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_100px_-50px_rgba(14,116,144,0.9)]"
                  >
                    Buy now
                  </a>
                  <a href="#experience" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900">See what&apos;s included</a>
                </div>
                <div class="mt-8 rounded-3xl border border-slate-200/60 bg-slate-50/80 p-6 text-left text-xs leading-relaxed text-slate-500">
                  <p class="font-semibold uppercase tracking-[0.35em] text-slate-400">Bundle includes</p>
                  <ul class="mt-4 grid gap-2 text-slate-600">
                    <li>Kopva PulsePro smartwatch</li>
                    <li>Valve controller + mounting kit</li>
                    <li>Freeze Guard sensors</li>
                    <li>Fast-start concierge onboarding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-4xl px-6 pb-28 pt-12" data-animate="fade">
        <div class="rounded-[40px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-sky-100/60 p-16 text-center shadow-[0_60px_160px_-90px_rgba(15,23,42,0.55)]">
          <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Ready when you are</p>
          <h2 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Get 10% off on your first PulsePro bundle</h2>
          <p class="mt-4 text-lg text-slate-600">Join thousands of proactive homeowners using Kopva to monitor, detect, and shut off leaks automatically.</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/checkout" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5">
              Buy now
            </a>
            <a href="#mosaic" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900">Explore features</a>
          </div>
        </div>
      </section>

      <footer class="border-t border-white/70 bg-white/80 py-16">
        <div class="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between" data-animate="fade">
          <div class="space-y-4">
            <NuxtLink to="/" class="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">pp</span>
              <span>pulsepro</span>
            </NuxtLink>
            <p class="max-w-sm text-sm text-slate-500">
              PulsePro by Kopva keeps every valve protected with adaptive leak detection, freeze guard, and concierge support whenever you need it.
            </p>
          </div>
          <div class="grid flex-1 grid-cols-2 gap-10 text-sm text-slate-500 sm:grid-cols-3">
            <div class="space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Explore</p>
              <ul class="space-y-2">
                <li><a href="#mosaic" class="transition hover:text-slate-900">Features</a></li>
                <li><a href="#experience" class="transition hover:text-slate-900">Experience</a></li>
                <li><a href="#pricing" class="transition hover:text-slate-900">Pricing</a></li>
              </ul>
            </div>
            <div class="space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Support</p>
              <ul class="space-y-2">
                <li><a href="/support" class="transition hover:text-slate-900">Help center</a></li>
                <li><a href="/installers" class="transition hover:text-slate-900">Find installers</a></li>
                <li><a href="/contact" class="transition hover:text-slate-900">Contact</a></li>
              </ul>
            </div>
            <div class="space-y-3">
              <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Stay in touch</p>
              <ul class="space-y-2">
                <li><a href="mailto:hello@kopva.com" class="transition hover:text-slate-900">hello@kopva.com</a></li>
                <li><a href="https://instagram.com" class="transition hover:text-slate-900">Instagram</a></li>
                <li><a href="https://twitter.com" class="transition hover:text-slate-900">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-12 flex max-w-6xl flex-col gap-4 px-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p data-animate="fade" style="--delay: 120ms">&copy; {{ currentYear }} Kopva. All rights reserved.</p>
          <div class="flex flex-wrap gap-4" data-animate="fade" style="--delay: 180ms">
            <a href="/privacy" class="transition hover:text-slate-600">Privacy</a>
            <a href="/terms" class="transition hover:text-slate-600">Terms</a>
            <a href="/status" class="transition hover:text-slate-600">System status</a>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const mosaicCards = [
  {
    tag: 'Intelligence',
    title: 'Adaptive leak defense',
    copy: 'Smart sensors compare normal water patterns to new anomalies and trigger instant shut-off when something changes.',
    color: 'from-sky-100 via-white/90 to-blue-100',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
    image: 'https://images.unsplash.com/photo-1603791452906-9cd6f7b1df90?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'Design',
    title: 'Featherlight finish',
    copy: 'Sculpted aluminum edges and a breathable knit loop feel like modern jewelry while protecting your space.',
    color: 'from-rose-100 via-white/90 to-amber-100',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'Automation',
    title: 'Quiet background checks',
    copy: 'PulsePro surveys for freeze risks and hidden drips hourly, sending gentle taps and app alerts only when needed.',
    color: 'from-emerald-100 via-white/90 to-sky-100',
    span: 'md:col-span-2 lg:col-span-2 xl:col-span-2',
  },
  {
    tag: 'Lifestyle',
    title: 'Always-on awareness',
    copy: 'Glance at the watch to see valve status, water usage, and freeze guard readiness with minimalist complications.',
    color: 'from-purple-100 via-white/90 to-blue-100',
    span: 'md:col-span-4 lg:col-span-4 xl:col-span-4',
    image: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'Support',
    title: 'Concierge onboarding',
    copy: 'Schedule a remote walkthrough with Kopva experts to verify installation and set up automations in minutes.',
    color: 'from-slate-100 via-white/90 to-sky-100',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
  },
  {
    tag: 'Coverage',
    title: 'Whole-home command center',
    copy: 'Pair the watch with the Kopva hub to orchestrate multiple valves, freeze guards, and leak sensors from a single tap.',
    color: 'from-indigo-100 via-white/90 to-purple-100',
    span: 'md:col-span-3 lg:col-span-3 xl:col-span-3',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  },
];

const mobileOpen = ref(false);

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
  title: 'PulsePro by Kopva',
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
:deep(body) {
  font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #f7f8fc;
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
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27240%27%20height%3D%27240%27%20viewBox%3D%270%200%20240%20240%27%3E%0A%20%20%3Cg%20fill%3D%27%2334a853%27%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2748%27%20cy%3D%2748%27%20r%3D%2728%27/%3E%0A%20%20%20%20%3Ccircle%20cx%3D%27192%27%20cy%3D%27192%27%20r%3D%2728%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M28%20176l32-32%2032%2032-32%2032z%27/%3E%0A%20%20%20%20%3Crect%20x%3D%27148%27%20y%3D%27-12%27%20width%3D%2720%27%20height%3D%2796%27%20rx%3D%2710%27%20transform%3D%27rotate%2828%20148%20-12%29%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M188%2072l-30%2030%2030%2030%2014-14-16-16%2016-16z%27/%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E");
  background-size: 220px;
  background-repeat: repeat;
  opacity: 0.16;
  filter: saturate(120%);
  animation: pattern-drift 36s linear infinite;
  will-change: transform;
  pointer-events: none;
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
