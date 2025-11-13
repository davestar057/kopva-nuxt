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
        <a
          href="/checkout"
          class="hidden rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 sm:inline-flex"
        >
          Buy now
        </a>
      </nav>
    </header>

    <main>
      <section class="relative overflow-hidden px-6 pb-24 pt-24" aria-labelledby="hero-title">
        <div class="absolute -left-20 top-[-120px] h-80 w-80 rounded-full bg-gradient-to-br from-sky-100 via-white to-purple-100 blur-3xl"></div>
        <div class="absolute -right-32 top-28 h-96 w-96 rounded-full bg-gradient-to-br from-amber-100 via-white to-sky-100 blur-3xl"></div>
        <div class="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="space-y-8" data-animate="fade">
            <p class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              PulsePro • Series 3
            </p>
            <h1 id="hero-title" class="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              <span class="bg-gradient-to-r from-slate-900 via-sky-600 to-purple-500 bg-clip-text text-transparent">
                Reshape your time with our smart watch
              </span>
            </h1>
            <p class="max-w-xl text-lg leading-relaxed text-slate-600">
              Engineered with Kopva intelligence, PulsePro learns your rhythms, safeguards your home, and keeps you connected with a soft, breathable design that floats on the wrist.
            </p>
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/checkout"
                class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_36px_88px_-44px_rgba(15,23,42,0.6)]"
              >
                Pre-order now
              </a>
              <a href="#experience" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
                <span class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                Explore the lineup
              </a>
            </div>
            <div class="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-400"></span>
                Leak + freeze intelligence
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-purple-400"></span>
                10-minute install
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-amber-400"></span>
                App control anywhere
              </span>
            </div>
          </div>

          <div class="relative" data-animate="slide-up">
            <div class="absolute -right-6 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-sky-200 via-white to-slate-100 blur-3xl"></div>
            <div class="relative overflow-hidden rounded-[42px] border border-white/70 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-10 shadow-[0_60px_140px_-80px_rgba(15,23,42,0.65)]">
              <div class="relative aspect-[3/4] overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
                <div class="absolute inset-6 rounded-[28px] bg-gradient-to-br from-purple-400/40 via-slate-900/40 to-sky-400/40 blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
                  alt="PulsePro smartwatch render"
                  class="relative z-10 mx-auto h-full w-auto object-contain drop-shadow-[0_35px_45px_rgba(15,23,42,0.35)]"
                />
              </div>
              <div class="mt-6 grid gap-4">
                <div class="flex items-start gap-3 rounded-3xl border border-white/80 bg-white/70 px-5 py-4 text-sm text-slate-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-5 w-5 text-slate-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l3 3" />
                  </svg>
                  <p>Adaptive scheduling anticipates spikes and pauses water flow automatically when risks appear.</p>
                </div>
                <div class="flex items-start gap-3 rounded-3xl border border-white/80 bg-white/70 px-5 py-4 text-sm text-slate-600 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-5 w-5 text-slate-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75L4.5 15M4.5 15h4.125M4.5 15V10.875M14.25 9.75l5.25-5.25m0 0H15.375M19.5 4.5v4.125" />
                  </svg>
                  <p>Precision machining wraps the sensors in a seamless body that disappears into your home.</p>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-10 left-6 w-40 rounded-3xl border border-white/70 bg-white/80 p-4 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 shadow-lg" data-animate="slide-right">
              <p>Floating render</p>
              <p class="mt-1 text-[11px] text-slate-400">Soft pastel gradient</p>
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
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-6">
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
        <div class="mx-auto max-w-5xl px-6" data-animate="fade">
          <div class="rounded-[38px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-12 shadow-[0_50px_140px_-90px_rgba(15,23,42,0.55)]">
            <div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">PulsePro global price</p>
                <h3 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Smart protection without compromise</h3>
                <p class="mt-4 max-w-xl text-base text-slate-600">
                  Includes the watch, valve controller, freeze guard sensors, and lifetime access to core automations. Concierge onboarding ensures everything works from day one.
                </p>
              </div>
              <div class="rounded-[32px] border border-white/70 bg-white/80 p-10 text-center shadow-[0_30px_90px_-70px_rgba(15,23,42,0.55)]">
                <p class="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Starting at</p>
                <p class="mt-4 text-5xl font-semibold text-slate-900">$299</p>
                <p class="mt-2 text-xs uppercase tracking-[0.4em] text-slate-400">Pre-order bundle</p>
                <a
                  href="/checkout"
                  class="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5"
                >
                  Reserve yours
                </a>
                <p class="mt-4 text-xs text-slate-500">+ optional professional install</p>
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
    </main>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

const mosaicCards = [
  {
    tag: 'Intelligence',
    title: 'Adaptive leak defense',
    copy: 'Smart sensors compare normal water patterns to new anomalies and trigger instant shut-off when something changes.',
    color: 'from-sky-100 via-white/90 to-blue-100',
    span: 'md:col-span-3 lg:col-span-3',
    image: 'https://images.unsplash.com/photo-1603791452906-9cd6f7b1df90?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'Design',
    title: 'Featherlight finish',
    copy: 'Sculpted aluminum edges and a breathable knit loop feel like modern jewelry while protecting your space.',
    color: 'from-rose-100 via-white/90 to-amber-100',
    span: 'md:col-span-3 lg:col-span-3',
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
    span: 'md:col-span-4 lg:col-span-4 xl:col-span-3',
    image: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'Support',
    title: 'Concierge onboarding',
    copy: 'Schedule a remote walkthrough with Kopva experts to verify installation and set up automations in minutes.',
    color: 'from-slate-100 via-white/90 to-sky-100',
    span: 'md:col-span-3 lg:col-span-2 xl:col-span-2',
  },
];

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
    threshold: 0.1,
  });

  document.querySelectorAll('[data-animate]').forEach((element) => {
    element.classList.add('animate-element');
    observer?.observe(element);
  });
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
