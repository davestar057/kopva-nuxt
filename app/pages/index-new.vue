<template>
  <div class="min-h-screen bg-gradient-to-br from-[#f5f9ff] via-[#fbf3ff] to-[#e4f6ff] text-slate-900">
    <header class="px-6 py-8">
      <nav class="mx-auto flex max-w-6xl items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">pp</span>
          <div class="text-lg font-semibold tracking-tight">pulsepro</div>
        </div>
        <div class="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <NuxtLink class="transition-colors hover:text-slate-900" to="#">Features</NuxtLink>
          <NuxtLink class="transition-colors hover:text-slate-900" to="#">Benefits</NuxtLink>
          <NuxtLink class="transition-colors hover:text-slate-900" to="#">Testimonials</NuxtLink>
          <NuxtLink class="transition-colors hover:text-slate-900" to="#">Specifications</NuxtLink>
          <NuxtLink class="transition-colors hover:text-slate-900" to="#">Pricing</NuxtLink>
        </div>
        <button class="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-xl">
          Buy now
        </button>
      </nav>
    </header>

    <main class="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 lg:flex-row lg:items-center lg:gap-12">
      <div class="max-w-xl space-y-8">
        <p class="inline-block rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-sm">
          Smart Watch Collection 2024
        </p>
        <h1 class="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          <span class="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            Reshape your time with our smart watch
          </span>
        </h1>
        <p class="text-lg text-slate-600">
          Stay connected, healthy, and stylish with our cutting-edge smart watch. Crafted with premium materials and a design that feels like the future.
        </p>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <button class="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-xl">
            Explore lineup
          </button>
          <button class="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
            <span class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            Watch the demo
          </button>
        </div>
        <div class="grid gap-6 rounded-3xl bg-white/70 p-6 shadow-lg shadow-slate-900/10 backdrop-blur">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div class="max-w-sm space-y-2 text-sm text-slate-600">
              <p class="font-semibold uppercase tracking-wide text-slate-900">Adult utilized</p>
              <p>Can be used from young age to old age if you want to be more trendy.</p>
            </div>
            <div class="max-w-sm space-y-2 text-sm text-slate-600">
              <p class="font-semibold uppercase tracking-wide text-slate-900">Metal material</p>
              <p>Metallic stainless steel, titanium, and ceramic composite that resists corrosion and wear.</p>
            </div>
          </div>
          <div class="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            <span class="h-px flex-1 bg-slate-200"></span>
            PulsePro advantages
            <span class="h-px flex-1 bg-slate-200"></span>
          </div>
          <div class="grid gap-4 sm:grid-cols-3">
            <div class="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
              <p class="text-sm font-semibold text-slate-900">24/7 Heart Monitoring</p>
              <p class="mt-1 text-xs text-slate-500">AI-powered insights keep your heart health at your fingertips.</p>
            </div>
            <div class="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
              <p class="text-sm font-semibold text-slate-900">7-Day Battery Life</p>
              <p class="mt-1 text-xs text-slate-500">Fast charging, ultra-efficient performance, and energy-aware display.</p>
            </div>
            <div class="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
              <p class="text-sm font-semibold text-slate-900">Water Resistant 5ATM</p>
              <p class="mt-1 text-xs text-slate-500">Swim-proof materials engineered to accompany every lifestyle.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-2xl lg:max-w-xl">
        <div class="absolute inset-0 -left-6 -top-12 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-sky-200 blur-3xl opacity-80"></div>
        <div class="relative rounded-[3rem] border border-white/50 bg-white/80 p-8 shadow-2xl shadow-slate-900/20 backdrop-blur">
          <div class="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-inner">
            <img
              alt="PulsePro smart watch"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="mt-6 grid gap-4 text-sm text-slate-600">
            <div class="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-pink-400"></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-900">Pulse Zone</p>
                <p>Animated, full-color dial shows your activity, heart rate, and recovery stats in real-time.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400"></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-900">Harmony OS</p>
                <p>Experience seamless connectivity with your phone, earbuds, and smart home ecosystem.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-sm">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400"></span>
              <div>
                <p class="text-xs font-semibold uppercase tracking-wide text-slate-900">Material excellence</p>
                <p>Hypoallergenic strap with breathable lining stays comfortable all day, every day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'PulsePro Smart Watch',
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
}
</style>
