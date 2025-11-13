<template>
  <div class="min-h-screen bg-[#f5f7fb] text-slate-900">
    <header class="sticky top-0 z-40 border-b border-white/40 bg-[#f5f7fb]/80 backdrop-blur">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">pp</span>
            <span>pulsepro</span>
          </NuxtLink>
        </div>
        <div class="hidden items-center gap-8 text-sm text-slate-600 lg:flex">
          <a href="#promise" class="transition-colors hover:text-slate-900">Promise</a>
          <a href="#how-it-works" class="transition-colors hover:text-slate-900">How it works</a>
          <a href="#features" class="transition-colors hover:text-slate-900">Features</a>
          <a href="#app" class="transition-colors hover:text-slate-900">App</a>
          <a href="#stories" class="transition-colors hover:text-slate-900">Stories</a>
        </div>
        <div class="flex items-center gap-4">
          <a
            href="/checkout"
            class="hidden rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 sm:inline-flex"
          >
            Buy now
          </a>
          <button class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-slate-900 hover:text-slate-900 lg:hidden">
            <span class="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <main class="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 lg:flex-row lg:items-center lg:gap-16">
      <section class="max-w-xl space-y-8" data-animate>
        <p class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Smart protection • 2024 edition
        </p>
        <h1 class="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Never pay for leaks again.
        </h1>
        <p class="text-lg leading-relaxed text-slate-600">
          Kopva sits on your main water valve and watches for abnormal flow and freezing conditions. If something’s wrong, it alerts you and automatically shuts the valve to stop the damage before it begins.
        </p>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="/checkout" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_18px_48px_-18px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.55)]">
            Get Pipebudi
          </a>
          <a href="#how-it-works" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
            <span class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            How it works
          </a>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span class="inline-flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full bg-sky-400"></span>
            24/7 monitoring
          </span>
          <span>•</span>
          <span>10-minute install</span>
          <span>•</span>
          <span>App control anywhere</span>
        </div>
      </section>

      <section class="relative mx-auto w-full max-w-xl" data-animate>
        <div class="absolute inset-0 -left-12 -top-16 -z-10 h-96 w-96 rounded-[3rem] bg-gradient-to-br from-sky-200 via-slate-100 to-purple-200 blur-3xl"></div>
        <div class="overflow-hidden rounded-[3rem] border border-white/60 bg-white/70 p-8 shadow-[0_50px_120px_-50px_rgba(15,23,42,0.55)] backdrop-blur">
          <div class="overflow-hidden rounded-[2.4rem] border-8 border-white shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
              alt="PulsePro smart watch"
              class="w-full object-cover"
            />
          </div>
          <div class="mt-6 grid gap-4 text-sm text-slate-600">
            <div class="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400"></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-900">Precision install</p>
                <p>Designed for standard valves with guided setup so you’re protected in minutes.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400"></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-900">Freeze guard</p>
                <p>Monitors temperature and flow simultaneously to prevent frozen-pipe catastrophes.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-900">Always connected</p>
                <p>Stay in control from anywhere with instant notifications and remote shut-off.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section id="promise" class="border-y border-white/60 bg-white/80 py-12" data-animate>
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6">
        <div class="flex items-center gap-3 text-sm text-slate-600">
          <span class="h-2.5 w-2.5 rounded-full bg-sky-400"></span>
          <p><span class="font-semibold text-slate-900">Auto shut-off</span> within seconds</p>
        </div>
        <div class="flex items-center gap-3 text-sm text-slate-600">
          <span class="h-2.5 w-2.5 rounded-full bg-sky-400"></span>
          <p><span class="font-semibold text-slate-900">10-minute install</span> on common valves</p>
        </div>
        <div class="flex items-center gap-3 text-sm text-slate-600">
          <span class="h-2.5 w-2.5 rounded-full bg-sky-400"></span>
          <p><span class="font-semibold text-slate-900">App control</span> anywhere</p>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="mx-auto max-w-6xl space-y-12 px-6 py-20">
      <div class="max-w-2xl" data-animate>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">How it works</p>
        <h2 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Meet <span class="text-slate-500">Pipebudi</span></h2>
        <p class="mt-4 text-lg text-slate-600">
          A modern leak and freeze prevention system that pairs intelligent sensors with rapid response. Every piece is designed to blend into your space while protecting what matters most.
        </p>
      </div>
      <div class="grid gap-10 lg:grid-cols-3">
        <article
          v-for="(step, index) in howItWorks"
          :key="step.title"
          class="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
          data-animate
          :style="{ '--delay': `${index * 120}ms` }"
        >
          <span class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Step {{ index + 1 }}</span>
          <h3 class="mt-4 text-xl font-semibold text-slate-900">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ step.copy }}</p>
        </article>
      </div>
    </section>

    <section id="features" class="bg-white/70 py-20">
      <div class="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="space-y-10">
          <div class="space-y-4" data-animate>
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Why homeowners switch</p>
            <h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">Engineered for total peace of mind</h2>
            <p class="text-lg text-slate-600">
              Advanced sensors, automatic shut-off, and an effortless app experience work together so you can finally stop worrying about hidden leaks.
            </p>
          </div>
        <div class="grid gap-6" data-animate>
          <div
            v-for="feature in features"
            :key="feature.title"
            class="group rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl"
          >
            <div class="flex items-start justify-between gap-6">
              <div>
                <p class="text-sm font-semibold uppercase tracking-wide text-slate-500">{{ feature.tag }}</p>
                <h3 class="mt-2 text-xl font-semibold text-slate-900">{{ feature.title }}</h3>
              </div>
              <span class="grid h-10 w-10 place-items-center rounded-full bg-slate-900/90 text-base">{{ feature.emoji }}</span>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ feature.copy }}</p>
          </div>
        </div>
        </div>
        <div class="relative flex flex-col justify-center" data-animate>
          <div class="absolute inset-0 -right-12 -z-10 rounded-[40px] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 blur-3xl"></div>
          <div class="rounded-[32px] border border-white/70 bg-white/80 p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.55)] backdrop-blur">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Specification snapshot</p>
            <ul class="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <li class="flex items-start gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                24/7 flow monitoring with adaptive AI alerts.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                Works with ¾" – 1¼" valves, indoor or protected outdoor installs.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                Freeze Guard sensors trigger proactive alerts before pipe damage occurs.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                Local manual override plus app-based remote shut-off.
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                Works with Kopva app on iOS and Android.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="app" class="mx-auto max-w-6xl px-6 py-20">
      <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div class="relative order-2 rounded-[32px] border border-white/70 bg-white/90 p-10 shadow-[0_50px_120px_-60px_rgba(15,23,42,0.55)]" data-animate>
          <div class="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-500">
            <span class="h-2 w-2 rounded-full bg-slate-900"></span>
            App control
          </div>
          <ul class="space-y-6 text-sm leading-relaxed text-slate-600">
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
              See live water usage trends with intelligent insights.
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
              Trigger an instant shut-off from anywhere in the world.
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
              Receive alerts the moment abnormal flow or freezing is detected.
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
              Share access with trusted contacts for coordinated response.
            </li>
          </ul>
        </div>
        <div class="order-1 space-y-6" data-animate>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Kopva app</p>
          <h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">Your home’s water, at a glance</h2>
          <p class="text-lg text-slate-600">
            The Kopva app brings the entire system together. Check valve status, adjust automation preferences, invite household members, and log a support ticket in seconds.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <NuxtImg src="/google-store.png" class="max-w-[140px]" />
            <NuxtImg src="/apple-store.png" class="max-w-[140px]" />
          </div>
        </div>
      </div>
    </section>

    <section id="stories" class="bg-white/80 py-20">
      <div class="mx-auto max-w-6xl space-y-12 px-6">
        <div class="max-w-2xl" data-animate>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Stories</p>
          <h2 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Trusted by proactive homeowners</h2>
          <p class="mt-4 text-lg text-slate-600">
            “Since installing Pipebudi we haven’t lost sleep over surprise leaks. The automated alerts let us catch a burst pipe before it ruined our renovation.” — Jamie, Vancouver
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-3">
          <div
            v-for="(story, index) in stories"
            :key="story.name"
            class="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            data-animate
            :style="{ '--delay': `${index * 100}ms` }"
          >
            <p class="text-sm leading-relaxed text-slate-600">{{ story.quote }}</p>
            <div class="mt-6">
              <p class="font-semibold text-slate-900">{{ story.name }}</p>
              <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ story.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-6 py-24" data-animate>
      <div class="rounded-[36px] border border-white/70 bg-white/90 p-12 text-center shadow-[0_60px_140px_-70px_rgba(15,23,42,0.55)]">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Ready when you are</p>
        <h2 class="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Protect your home before the next cold snap</h2>
        <p class="mt-4 text-lg text-slate-600">
          Join thousands of homeowners using Kopva to monitor, detect, and shut off leaks automatically.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="/checkout" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5">
            Buy now
          </a>
          <a href="#how-it-works" class="text-sm font-semibold text-slate-700 transition hover:text-slate-900">Explore features</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

const howItWorks = [
  {
    title: 'Monitor the flow',
    copy: 'Smart sensors track real-time water usage and temperature so you know exactly what is happening in your pipes.',
  },
  {
    title: 'Detect anomalies',
    copy: 'Pipebudi compares normal patterns against new spikes or slow leaks to determine when action is required.',
  },
  {
    title: 'Shut off instantly',
    copy: 'When risk is detected, Kopva can close the valve automatically or alert you to take control in the app.',
  },
];

const features = [
  {
    tag: 'Hardware',
    title: 'Premium build that blends in',
    copy: 'Engineered with durable materials and a refined finish so your mechanical room looks as good as it functions.',
    emoji: '🧊',
  },
  {
    tag: 'Automation',
    title: 'Freeze guard intelligence',
    copy: 'Dual temperature and flow sensors deliver proactive alerts that help you prevent burst pipes before they start.',
    emoji: '❄️',
  },
  {
    tag: 'Support',
    title: 'Concierge onboarding',
    copy: 'Schedule a remote walk-through with our support team to verify installation and configure your automations.',
    emoji: '🤝',
  },
];

const stories = [
  {
    name: 'Jamie',
    location: 'Vancouver, BC',
    quote: 'Pipebudi caught a slow leak in our rental property and shut it off automatically. The app let us see the alert instantly.',
  },
  {
    name: 'Priya',
    location: 'Austin, TX',
    quote: 'Installation was quicker than expected, and the freeze guard already saved us during a cold snap.',
  },
  {
    name: 'David',
    location: 'Chicago, IL',
    quote: 'The clean design actually makes our utility room feel finished. Worth it for the peace of mind alone.',
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
  title: 'Pipebudi by Kopva',
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
  background-color: #f5f7fb;
}

.animate-element {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 700ms ease, transform 700ms ease;
  transition-delay: var(--delay, 0ms);
}

.animate-element.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
