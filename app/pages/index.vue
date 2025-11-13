<template>
  <main class="relative overflow-hidden">
    <!-- HEADER -->
    <header class="sticky top-0 z-50 border-b border-secondary/5 bg-white/80 backdrop-blur-xl">
      <div class="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#hero" class="flex items-center gap-3">
          <img src="/kopva-logo-dark.svg" alt="Kopva" class="h-6 w-auto md:h-7">
        </a>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-7 text-sm font-semibold md:flex">
          <a href="#how-it-works" class="nav-link">How it works</a>
          <a href="#features" class="nav-link">Features</a>
          <a href="#pricing" class="nav-link">Pricing</a>
          <a href="#support" class="nav-link">Support</a>
          <a href="/checkout" class="btn-header btn-header--primary">Buy now</a>
        </nav>

        <!-- Mobile -->
        <div class="flex items-center gap-3 md:hidden">
          <a href="/checkout" class="btn-header btn-header--primary btn-header--sm">Buy</a>
          <button @click="mobileOpen = !mobileOpen" class="grid h-10 w-10 place-items-center rounded-lg border border-secondary/10 bg-white text-secondary shadow-sm">
            <span class="sr-only">Toggle navigation</span>
            <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <div v-show="mobileOpen" class="border-t border-secondary/5 bg-white/95 text-secondary backdrop-blur md:hidden">
        <nav class="container mx-auto grid gap-3 px-4 py-4 text-base">
          <a @click="mobileOpen=false" href="#how-it-works" class="nav-link">How it works</a>
          <a @click="mobileOpen=false" href="#features" class="nav-link">Features</a>
          <a @click="mobileOpen=false" href="#pricing" class="nav-link">Pricing</a>
          <a @click="mobileOpen=false" href="#support" class="nav-link">Support</a>
          <a @click="mobileOpen=false" href="/checkout" class="btn-header btn-header--primary mt-2">Buy now</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section id="hero" class="relative overflow-hidden">
      <div class="hero-bg hero-bg--ice" aria-hidden="true" v-parallax="{ speed: -0.25, max: 80 }"></div>
      <div class="hero-blob hero-blob--left" aria-hidden="true"></div>
      <div class="hero-blob hero-blob--right" aria-hidden="true"></div>

      <div class="relative container mx-auto px-4">
        <div class="grid items-center gap-14 pt-14 pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <!-- Copy -->
          <div class="order-2 space-y-8 lg:order-1">
            <div v-reveal class="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-semibold text-secondary/80 shadow-sm backdrop-blur">
              <span class="h-2.5 w-2.5 rounded-full bg-primary"></span>
              Smart protection for every home
            </div>

            <div v-reveal class="space-y-5 reveal-up">
              <h1 class="headline text-secondary">
                Never pay for leaks again.
              </h1>
              <p class="text-lg text-secondary/60 sm:text-xl">
                Automatic shut-off · Freeze Guard · App control
              </p>
              <p class="max-w-xl text-lg leading-relaxed text-secondary/80 sm:text-xl">
                Kopva sits on your main water valve and watches for abnormal flow and freezing conditions. If something’s wrong, it alerts you and can automatically close the valve to prevent a disaster.
              </p>
            </div>

            <div v-reveal class="flex flex-wrap items-center gap-3 reveal-up" :style="{ '--delay': '120ms' }">
              <a id="buy" href="/checkout" class="btn-primary">Get Pipebudi</a>
              <a href="#how-it-works" class="btn-ghost">How it works</a>
            </div>

            <div v-reveal class="flex flex-wrap items-center gap-4 text-sm text-secondary/60 reveal-up" :style="{ '--delay': '240ms' }">
              <span class="inline-flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
                24/7 monitoring
              </span>
              <span class="hidden sm:inline">•</span>
              <NuxtImg src="/google-store.png" class="h-9 w-auto" alt="Google Play" />
              <span class="hidden sm:inline">•</span>
              <NuxtImg src="/apple-store.png" class="h-9 w-auto" alt="Apple App Store" />
              <span class="hidden sm:inline">•</span>
              Easy install
            </div>

            <DisclaimerNote :text="`*Kopva reduces risk but cannot prevent all leaks or damage in all scenarios. Performance depends on correct installation, valve/pipeline compatibility, power and Wi-Fi availability, and user settings. Not a substitute for home insurance.`" />

            <div v-reveal class="grid gap-3 pt-4 sm:grid-cols-3 reveal-up" :style="{ '--delay': '360ms' }">
              <div class="info-chip">
                <p class="text-xs uppercase tracking-wide text-secondary/60">Auto shut-off</p>
                <p class="text-sm font-semibold text-secondary">Stops major leaks fast</p>
              </div>
              <div class="info-chip">
                <p class="text-xs uppercase tracking-wide text-secondary/60">Install</p>
                <p class="text-sm font-semibold text-secondary">≈10 minute setup</p>
              </div>
              <div class="info-chip">
                <p class="text-xs uppercase tracking-wide text-secondary/60">Control</p>
                <p class="text-sm font-semibold text-secondary">App + manual override</p>
              </div>
            </div>
          </div>

          <!-- Product -->
          <div class="order-1 lg:order-2" v-reveal>
            <div class="stage" @click.self="openId=null">
              <div class="bg-circles" v-parallax="{ speed: -0.08, max: 80 }"></div>
              <img src="/kopva-raw.png" alt="Kopva smart leak &amp; freeze protection valve" class="product-image" draggable="false" v-parallax="{ speed: -0.05, max: 14 }" />
              <div class="glow"></div>

              <!-- Desktop/Tablet pills -->
              <button
                  v-for="(f, i) in placedPct"
                  :key="f.id"
                  class="feature reveal hidden sm:block"
                  v-reveal
                  :style="{ left: f.xPct + '%', top: f.yPct + '%', '--delay': (i * 90) + 'ms' }"
              >
                <span class="dot"></span>
                <span class="pill">
                  <span class="title text-secondary">{{ f.title }}</span>
                  <span class="desc text-secondary/70">{{ f.desc }}</span>
                </span>
                <span
                    class="feature-card"
                    :id="`card-${f.id}`"
                    role="tooltip"
                    :class="{ 'feature-card--open': isOpen(f.id) || hoverId === f.id }"
                >
                  <span class="font-semibold text-secondary">{{ f.title }}</span>
                  <span class="mt-1 block text-sm text-secondary/80">{{ f.long }}</span>
                </span>
              </button>
            </div>

            <!-- Mobile pills -->
            <div class="mt-6 grid w-full gap-3 sm:hidden">
              <div class="grid gap-2">
                <button
                    v-for="f in mobileTop"
                    :key="'mt-' + f.id"
                    class="mobile-pill"
                    @click="toggleFeature(f.id)"
                >
                  <span class="mobile-dot"></span>
                  <span class="pill">
                    <span class="title text-secondary">{{ f.title }}</span>
                    <span class="desc text-secondary/70">{{ f.desc }}</span>
                  </span>
                  <p v-if="isOpen(f.id)" class="mt-2 text-sm text-secondary/80">{{ f.long }}</p>
                </button>
              </div>
              <div class="grid gap-2">
                <button
                    v-for="f in mobileBottom"
                    :key="'mb-' + f.id"
                    class="mobile-pill"
                    @click="toggleFeature(f.id)"
                >
                  <span class="mobile-dot"></span>
                  <span class="pill">
                    <span class="title text-secondary">{{ f.title }}</span>
                    <span class="desc text-secondary/70">{{ f.desc }}</span>
                  </span>
                  <p v-if="isOpen(f.id)" class="mt-2 text-sm text-secondary/80">{{ f.long }}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trusted -->
      <div class="trusted-bar">
        <div class="container mx-auto px-4">
          <div class="trusted-card" v-reveal>
            <p class="text-xs uppercase tracking-[0.24em] text-secondary/50">Trusted by smart homeowners</p>
            <div class="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-secondary/60 md:gap-10">
              <span>Fast response alerts</span>
              <span class="hidden md:inline">•</span>
              <span>Insurance ready logs</span>
              <span class="hidden md:inline">•</span>
              <span>Works with standard UK valves</span>
            </div>
          </div>
          <div class="text-center">
            <DisclaimerNote :text="`Auto shut-off and install times are typical under test conditions and may vary. Remote control and notifications require power and connectivity.`" />
          </div>
        </div>
      </div>
    </section>

    <!-- BODY / BENEFITS -->
    <!-- BODY / BENEFITS -->
    <section id="how-it-works" class="relative overflow-hidden bg-[#f7fbff] py-20">
      <div class="container mx-auto px-4">

        <!-- Intro -->
        <div v-reveal class="mx-auto max-w-2xl text-center reveal-up">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-secondary/50">How it works</p>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Meet <span class="text-primary">Pipebudi</span>
          </h2>
          <p class="mt-4 text-secondary/70">
            The smart valve that protects your home from leaks and frozen pipes — automatically.
          </p>
        </div>

        <!-- Timeline -->
        <div class="timeline-wrapper">
          <div class="timeline-line" aria-hidden="true"></div>

          <div class="space-y-12 md:space-y-16">
            <article v-reveal class="timeline-item">
              <div class="timeline-dot" aria-hidden="true"></div>

              <div class="timeline-copy">
                <h3>Automatically shuts off</h3>
                <p>
                  Automatically shuts off your water when a catastrophic leak is detected. Pipebudi closes your water supply when a leak is heard so you can get on with your day.
                </p>
              </div>
              <div class="timeline-media">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="timeline-frame">
                  <img class="aspect-[4/3] h-full w-full object-cover" src="/pipbudi-wall.jpg" alt="Automatic water shut-off" loading="lazy" />
                </div>
              </div>
            </article>

            <article v-reveal class="timeline-item timeline-item--reverse">
              <div class="timeline-dot" aria-hidden="true"></div>

              <div class="timeline-copy">
                <h3>24/7 Monitoring</h3>
                <p>
                  Pipebudi is protecting you even when you are asleep. Connect Pipebudi to your water pipes, download the app, connect to Wi-Fi, and get started.
                </p>
              </div>
              <div class="timeline-media">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="timeline-frame">
                  <img class="aspect-[4/3] h-full w-full object-cover" src="/kopva-ipad-prod.jpg" alt="24/7 monitoring" loading="lazy" />
                </div>
              </div>
            </article>

            <article v-reveal class="timeline-item">
              <div class="timeline-dot" aria-hidden="true"></div>

              <div class="timeline-copy">
                <h3>Protects your pipes in winter</h3>
                <p>
                  Frozen pipes can be serious in winter. With built-in frost protection, if temperature reaches <span class="font-semibold">close to freezing</span>, Pipebudi will notify you and can automatically turn off your water supply.
                </p>
              </div>
              <div class="timeline-media">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="timeline-frame">
                  <img class="aspect-[4/3] h-full w-full object-cover" src="/frozen-pipe.jpg" alt="Winter frost protection" loading="lazy" />
                </div>
              </div>
            </article>

            <article v-reveal class="timeline-item timeline-item--reverse">
              <div class="timeline-dot" aria-hidden="true"></div>

              <div class="timeline-copy">
                <h3>Away from home?</h3>
                <p>
                  Whether you’re on holiday or staying away a little longer, you can remotely instruct Pipebudi to turn off the water supply or switch to Away mode — so you can relax knowing you are protected.
                </p>
              </div>
              <div class="timeline-media">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="timeline-frame">
                  <img class="aspect-[4/3] h-full w-full object-cover" src="/away-from-home.jpg" alt="Remote control from the app" loading="lazy" />
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Discount callout -->
        <div v-reveal class="mt-16 reveal-up">
          <div class="discount-card">
            <div class="discount-glow" aria-hidden="true"></div>

            <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div class="flex items-start gap-4">
                <div class="discount-icon">
                  <Icon name="heroicons-solid:tag" class="h-6 w-6" />
                </div>
                <div>
                  <p class="text-sm font-semibold uppercase tracking-wide text-primary">Don’t miss out</p>
                  <h3 class="mt-1 text-xl font-extrabold text-secondary md:text-2xl">20% off Launch Offer</h3>
                  <p class="mt-2 text-secondary/70">Enter this code on the checkout page to claim your discount:</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <code class="discount-code">LAUNCH20</code>
                <button
                    @click="copyLaunch()"
                    class="discount-copy"
                    aria-label="Copy discount code"
                >
                  <Icon name="heroicons-outline:clipboard-document" class="h-5 w-5" />
                  <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA banner -->
        <section v-reveal class="mt-16 reveal-up">
          <div class="cta-band">
            <div class="cta-glow" aria-hidden="true"></div>
            <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div class="space-y-2">
                <h3 class="text-2xl font-extrabold tracking-tight text-white md:text-3xl">Ready to protect your home?</h3>
                <p class="text-white/80">Get Pipebudi with 20% off today and shield your home from costly leaks.</p>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <a href="/checkout" class="cta-primary">Buy now</a>
                <a href="#features" class="cta-secondary">Learn more</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Feature grid -->
    <section id="features" class="py-20">
      <div class="container mx-auto px-4">
        <div v-reveal class="mx-auto max-w-3xl text-center reveal-up">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-secondary/50">Why homeowners choose Kopva</p>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Designed for real-world leaks</h2>
          <p class="mt-4 text-secondary/70">Every feature focuses on giving you time back, insight into your home, and confidence that water is handled.</p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article v-reveal class="feature-panel">
            <div class="feature-icon">
              <Icon name="heroicons-solid:bolt" class="h-6 w-6" />
            </div>
            <h3>Instant alerts</h3>
            <p>Hear about unusual flow the moment it happens. Push notifications, email, and audible alarms keep you informed.</p>
          </article>

          <article v-reveal class="feature-panel">
            <div class="feature-icon">
              <Icon name="heroicons-solid:shield-check" class="h-6 w-6" />
            </div>
            <h3>Freeze Guard</h3>
            <p>Temperature sensors track frost risk, sending early warnings and shutting the valve before pipes burst.</p>
          </article>

          <article v-reveal class="feature-panel">
            <div class="feature-icon">
              <Icon name="heroicons-solid:device-mobile" class="h-6 w-6" />
            </div>
            <h3>Anywhere control</h3>
            <p>Switch your water off, enable Away mode, and see live status directly from the Kopva app no matter where you are.</p>
          </article>

          <article v-reveal class="feature-panel">
            <div class="feature-icon">
              <Icon name="heroicons-solid:sparkles" class="h-6 w-6" />
            </div>
            <h3>Quick install</h3>
            <p>Compact hardware mounts to common valves in minutes with guided setup and optional pro support.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- App experience -->
    <section class="relative overflow-hidden py-20">
      <div class="app-bg" aria-hidden="true"></div>
      <div class="container relative mx-auto grid gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
        <div v-reveal class="space-y-5 reveal-up">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-secondary/50">Control centre</p>
          <h2 class="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Your water command centre in one app</h2>
          <p class="text-secondary/70">Get a real-time view of flow, temperature, and valve status. Trigger manual shut-offs, schedule protection modes, and share access with family members.</p>

          <ul class="grid gap-3 text-secondary/75">
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon name="heroicons-mini:check" class="h-3.5 w-3.5" /></span>
              <span>Timeline of alerts and actions for easy insurance reporting.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon name="heroicons-mini:check" class="h-3.5 w-3.5" /></span>
              <span>Customisable leak thresholds and freeze temperatures.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon name="heroicons-mini:check" class="h-3.5 w-3.5" /></span>
              <span>Works alongside voice assistants and smart home routines (beta).</span>
            </li>
          </ul>
        </div>

        <div v-reveal class="reveal-up">
          <div class="app-frame">
            <div class="app-glow" aria-hidden="true"></div>
            <img src="/kopva-app-ipad.png" alt="Kopva app interface" class="app-image" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Support -->
    <section id="support" class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div v-reveal class="space-y-5 reveal-up">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-secondary/50">Always-on support</p>
            <h2 class="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Protection with people behind it</h2>
            <p class="text-secondary/70">Our team helps you install, monitor, and act fast when something isn’t right.</p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div v-reveal class="support-card">
              <h3>Rapid help</h3>
              <p>Guided onboarding, chat support, and a knowledge base cover every scenario.</p>
            </div>
            <div v-reveal class="support-card">
              <h3>12-month warranty</h3>
              <p>Hardware backed by a full year warranty and optional extended protection.</p>
            </div>
            <div v-reveal class="support-card">
              <h3>30-day returns</h3>
              <p>Install Kopva at home and if it’s not right for you, send it back within 30 days.</p>
            </div>
            <div v-reveal class="support-card">
              <h3>Compliance ready</h3>
              <p>WRAS, UKCA, and CE certifications underway so you can meet insurance requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-white to-white py-20">
      <div class="pricing-glow" aria-hidden="true"></div>
      <div class="container mx-auto px-4">
        <div v-reveal class="mx-auto max-w-2xl text-center reveal-up">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-secondary/50">Launch pricing</p>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">Protect your home from £239</h2>
          <p class="mt-4 text-secondary/70">Everything you need to monitor, alert, and shut off is in the box.</p>
        </div>
        <div class="mt-12">
          <PricingBox
        product-name="Kopva Smart Water Valve"
        subtitle="Leak & freeze protection with automatic shut-off"
        image-src="/boxed-product.jpg"
        :price="239"
        :compare-at="299"
        currency="£"
        rating="4.9"
        :reviews="124"
        :bullets="[
    'Auto shut-off within minutes of a leak',
    'Freeze Guard closes when there is danger of frozen pipes',
    'Control from the app anywhere',
    'Easy install'
  ]"
        :includes="[
    'Kopva Pipebudi smart valve',
    'Mounting hardware',
    'Power adaptor',
    'Quick-start guide'
  ]"
        discount-code="LAUNCH20"
        discount-label="Launch offer"
        buy-href="/checkout"
        learn-href="/#how-it-works"
        :in-stock="true"
        badge-text="Launch pricing"
        />
        </div>
      </div>
    </section>


<!--    <section class="bg-[#f7fbff] py-14">-->
<!--      <div class="container mx-auto px-4">-->
<!--        <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-secondary text-center">Trusted in real homes</h2>-->
<!--        <div class="mt-8 grid md:grid-cols-3 gap-6">-->
<!--          <figure class="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">-->
<!--            <div class="flex items-center gap-3">-->
<!--              <img class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/80?img=68" alt=""/>-->
<!--              <figcaption>-->
<!--                <p class="font-semibold text-secondary">Ava M.</p>-->
<!--                <p class="text-secondary/60 text-sm">Manchester</p>-->
<!--              </figcaption>-->
<!--            </div>-->
<!--            <blockquote class="mt-3 text-secondary/80">“Kopva shut the water within seconds and saved our kitchen. App made it effortless.”</blockquote>-->
<!--          </figure>-->

<!--          <figure class="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">-->
<!--            <div class="flex items-center gap-3">-->
<!--              <img class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/80?img=12" alt=""/>-->
<!--              <figcaption>-->
<!--                <p class="font-semibold text-secondary">Ben M.</p>-->
<!--                <p class="text-secondary/60 text-sm">Bristol</p>-->
<!--              </figcaption>-->
<!--            </div>-->
<!--            <blockquote class="mt-3 text-secondary/80">“Installed in 10 minutes. Peace of mind when we’re away.”</blockquote>-->
<!--          </figure>-->

<!--          <figure class="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">-->
<!--            <div class="flex items-center gap-3">-->
<!--              <img class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/80?img=33" alt=""/>-->
<!--              <figcaption>-->
<!--                <p class="font-semibold text-secondary">Sophie K.</p>-->
<!--                <p class="text-secondary/60 text-sm">Leeds</p>-->
<!--              </figcaption>-->
<!--            </div>-->
<!--            <blockquote class="mt-3 text-secondary/80">“Freeze guard saved our rental during the cold snap. Worth it.”</blockquote>-->
<!--          </figure>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

<!--    <section class="bg-white py-14">-->
<!--      <div class="container mx-auto px-4">-->
<!--        <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-secondary text-center">Why Kopva?</h2>-->
<!--        <div class="mt-8 overflow-x-auto rounded-2xl ring-1 ring-black/5">-->
<!--          <table class="w-full text-left text-secondary/80 bg-white">-->
<!--            <thead class="bg-[#f7fbff] text-secondary">-->
<!--            <tr>-->
<!--              <th class="p-4 font-semibold">Feature</th>-->
<!--              <th class="p-4 font-semibold">Kopva</th>-->
<!--              <th class="p-4 font-semibold">Other smart valves</th>-->
<!--              <th class="p-4 font-semibold">Manual shut-off</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody class="divide-y divide-black/5">-->
<!--            <tr><td class="p-4">Automatic leak shut-off</td><td class="p-4 font-semibold text-secondary">Yes</td><td class="p-4">Varies</td><td class="p-4">No</td></tr>-->
<!--            <tr><td class="p-4">Freeze protection</td><td class="p-4 font-semibold text-secondary">Yes</td><td class="p-4">Some</td><td class="p-4">No</td></tr>-->
<!--            <tr><td class="p-4">Install time</td><td class="p-4 font-semibold text-secondary">≈10 min</td><td class="p-4">30–60 min</td><td class="p-4">—</td></tr>-->
<!--            <tr><td class="p-4">Remote control</td><td class="p-4 font-semibold text-secondary">App</td><td class="p-4">App</td><td class="p-4">No</td></tr>-->
<!--            <tr><td class="p-4">Cost of inaction</td><td class="p-4 font-semibold text-secondary">££ saved</td><td class="p-4">££?</td><td class="p-4">Risk high</td></tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section class="bg-white py-8">-->
<!--      <div class="container mx-auto px-4">-->
<!--        <div class="grid gap-4 sm:grid-cols-3 items-center text-center">-->
<!--          <div class="rounded-xl border border-black/5 p-4">-->
<!--            <p class="text-secondary font-semibold">12-month warranty</p>-->
<!--          </div>-->
<!--          <div class="rounded-xl border border-black/5 p-4">-->
<!--            <p class="text-secondary font-semibold">30-day returns</p>-->
<!--          </div>-->
<!--          <div class="rounded-xl border border-black/5 p-4">-->
<!--            <p class="text-secondary/70">WRAS / UKCA / CE <span class="text-secondary">(placeholder)</span></p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

<!--    <DamageCostCalculator class="mt-10" />-->
    <!-- Sticky Buy Bar -->

    <StickyBar></StickyBar>
    <LeakCostVisual :average-cost="4200" currency="£" />

    <!-- FOOTER -->
    <footer id="footer" class="bg-secondary text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div class="space-y-3">
            <img src="/kopva-logo-full-white.png" alt="Kopva" class="h-7 w-auto" />
            <p class="max-w-md text-sm text-white/70">Smart leak and freeze protection that gives you confidence in every season.</p>
          </div>
          <nav class="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a href="#how-it-works" class="hover:text-white">How it works</a>
            <a href="#features" class="hover:text-white">Features</a>
            <a href="#pricing" class="hover:text-white">Pricing</a>
            <a href="/support" class="hover:text-white">Support</a>
            <a href="/privacy" class="hover:text-white">Privacy</a>
            <a href="/terms" class="hover:text-white">Terms</a>
          </nav>
        </div>
        <ClientOnly>
          <p class="mt-8 text-xs text-white/50">© {{ new Date().getFullYear() }} Kopva. All rights reserved.</p>
        </ClientOnly>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount} from 'vue'
import StickyBar from "~/components/StickyBar.vue";

const mobileOpen = ref(false)

/** Hover/tap state for feature cards */
const openId = ref<string|null>(null)
const hoverId = ref<string|null>(null)
const isOpen = (id: string) => openId.value === id
const toggleFeature = (id: string) => { openId.value = openId.value === id ? null : id }

function onKeydown(e: KeyboardEvent){ if (e.key === 'Escape') openId.value = null }
function onDocClick(e: MouseEvent){
  const target = e.target as HTMLElement
  if (!target.closest('.feature') && !target.closest('.mobile-pill')) openId.value = null
}
onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onDocClick)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onDocClick)
})

/** Feature data */
type Feature = { id: string; title: string; desc: string; long: string; angleDeg: number; radius: number }
const STAGE = 601, CX = STAGE / 2, CY = STAGE / 2

const features = ref<Feature[]>([
  { id: 'leak',   title: 'Leak Detection', desc: 'Instant alerts', long: 'Detects abnormal flow and can shut off water automatically. May not detect slow drips, intermittent use, or micro-leaks. Thresholds and schedules affect behaviour.', angleDeg: 18,  radius: 206 },
  { id: 'freeze', title: 'Freeze Guard',   desc: 'Cold-snap safe',  long: 'Monitors pipe temperature and warns before freezing occurs. Action depends on sensor placement and ambient conditions; cannot guarantee prevention of all freeze events.', angleDeg: 128, radius: 198 },
  { id: 'app',    title: 'App Control',    desc: 'Anywhere access', long: 'Control your water and get alerts from the Kopva mobile app. Requires reliable Wi-Fi and internet; mobile alerts depend on OS settings and connectivity.', angleDeg: 320, radius: 205 },
  { id: 'install',title: 'Easy Install',   desc: 'Fits standard pipes sizes', long: 'Compact design mounts on common isolation valves in minutes. Compatibility varies by valve type/size/orientation; professional fitting may be required.', angleDeg: 210, radius: 202 }
])

/** Percent-based positions for responsive stage (desktop/tablet) */
const placedPct = computed(() =>
    features.value.map(f => {
      const t = (f.angleDeg * Math.PI) / 180
      const x = CX + f.radius * Math.cos(t)
      const y = CY - f.radius * Math.sin(t)
      return { ...f, xPct: (x / STAGE) * 100, yPct: (y / STAGE) * 100 }
    })
)

/** Mobile layout: 2 pills above, 2 below */
const mobileTop = computed(() => {
  const order = ['freeze', 'leak']
  return order.map(id => features.value.find(f => f.id === id)!).filter(Boolean)
})
const mobileBottom = computed(() => {
  const order = ['install', 'app']
  return order.map(id => features.value.find(f => f.id === id)!).filter(Boolean)
})


const copied = ref(false)
const copyLaunch = async () => {
  try {
    await navigator.clipboard.writeText('LAUNCH20')
    copied.value = true
    setTimeout(() => (copied.value = false), 1400)
  } catch (_) {
    copied.value = false
  }
}

const vParallax = {
  mounted(el: HTMLElement, binding: any) {
    const opts = { speed: 0.2, axis: 'y', max: 80, disabledBelow: 640, ...(binding?.value || {}) }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let inView = true
    let rafId = 0

    const io = new IntersectionObserver((entries) => {
      const first = entries[0]
      if (!first) return
      inView = first.isIntersecting
    })
    io.observe(el)

    const update = () => {
      rafId = 0
      const vw = window.innerWidth
      if (vw < opts.disabledBelow) {
        el.style.transform = ''
        return
      }
      const r = el.getBoundingClientRect()
      const center = window.innerHeight / 2
      const delta = (r.top + r.height / 2) - center
      const move = Math.max(-opts.max, Math.min(opts.max, delta * opts.speed))
      const tx = opts.axis === 'x' ? move : 0
      const ty = opts.axis === 'y' ? move : 0
      el.style.willChange = 'transform'
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    }

    const onScroll = () => {
      if (!inView) return
      if (rafId) return
      rafId = requestAnimationFrame(update)
    }
    const onResize = () => { el.style.transform = ''; onScroll() }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    onScroll()

    ;(el as any)._parallaxCleanup = () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafId) cancelAnimationFrame(rafId)
      el.style.willChange = ''
    }
  },
  unmounted(el: HTMLElement) {
    (el as any)._parallaxCleanup?.()
  }
}
const vReveal = {
  mounted(el: HTMLElement, binding?: { value?: { delay?: number } }) {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('is-in'); return }

    const io = new IntersectionObserver((entries) => {
      const first = entries[0]
      if (!first) return
      if (first.isIntersecting) {
        el.classList.add('is-in')
        io.unobserve(el)
      }
    }, { threshold: 0.15 })

    // optional manual delay via data attr or style var
    if (binding?.value?.delay) {
      (el as HTMLElement).style.setProperty('--delay', `${binding.value.delay}ms`)
    }

    io.observe(el)
  }
}

const url = useRequestURL()
const canonical = `${url.origin}/` // adjust if homepage lives elsewhere
const DisclaimerNote = (props: { text: string }) => h(
    'p',
    {
      class:
          'mt-2 text-[11px] leading-snug text-secondary/55 italic [&_a]:underline [&_a]:hover:no-underline'
    },
    props.text
)
// ==== SEO meta (Open Graph + Twitter) ====
useSeoMeta({
  title: 'Kopva — Smart Leak & Freeze Protection Valve',
  description:
      'Kopva automatically shuts off your water when a leak is detected and protects against frozen pipes. 24/7 monitoring, app control, and a quick ~10-minute install.',
  // Open Graph
  ogTitle: 'Kopva — Smart Leak & Freeze Protection Valve',
  ogDescription:
      'Stop water damage before it starts. Auto shut-off on leaks, Freeze Guard when near freezing , real-time alerts, and full app control.',
  ogType: 'website',
  ogUrl: canonical,
  ogSiteName: 'Kopva',
  ogImage: 'http://localhost:3000/pipbudi-wall.jpg',          // <-- point to your real OG image (1200×630)
  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kopva — Smart Leak & Freeze Protection Valve',
  twitterDescription:
      'Auto shut-off for leaks, Freeze Guard, and app control. Protect your home with Copva’s smart water valve.',
  twitterImage: 'http://localhost:3000/pipbudi-wall.jpg',
  // Misc
  robots: 'index,follow,max-image-preview:large',
  themeColor: '#54B16B',
  // (optional) keywords aren’t used much anymore, but harmless:
  keywords:
      'smart water valve, leak detector, automatic shut off, frozen pipes, freeze protection, water leak alarm, Pipebudi, Kopva, UK'
})

// ==== Canonical + JSON-LD Product (edit placeholders) ====
useHead({
  link: [
    { rel: 'canonical', href: canonical }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Kopva Smart Water Valve',
        brand: { '@type': 'Brand', name: 'Kopva' },
        description:
            'Smart water valve with automatic leak shut-off, Freeze Guard (near freezing), 24/7 monitoring, and app control.',
        image: [`${url.origin}/og/kopva-og.jpg`], // or your transparent hero PNG
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          price: '299.00',                // <-- set your real price
          url: `${url.origin}/checkout`,
          availability: 'https://schema.org/InStock'
        }
        // If/when you have real review data, you can add:
        // aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: 124 }
      })
    }
  ]
})
</script>

<style scoped>
/* Header */
.nav-link{
  position: relative;
  color: rgba(0,16,17,0.65);
  transition: color .18s ease, transform .18s ease;
}
.nav-link:hover{
  color: #001011;
  transform: translateY(-1px);
}
.btn-header{ @apply inline-flex items-center justify-center font-semibold rounded-lg px-3.5 py-2; }
.btn-header--primary{
  @apply bg-primary text-white shadow-sm;
  box-shadow: 0 12px 24px -14px rgba(84,177,107,.7);
}
.btn-header--primary:hover{ filter: brightness(.95); }
.btn-header--sm{ @apply px-3 py-1.5 rounded-md font-semibold; }

/* Hero background — stays inside hero */
.hero-bg{
  position: absolute;
  left: 0; right: 0; top: 0;
  height: clamp(760px, 95vh, 1000px);
  z-index: 0;
  pointer-events: none;

  /* Variant-driven background: falls back to a soft sky if no variant class is present */
  background: var(--hero-bg,
    radial-gradient(75% 50% at 14% 16%, rgba(151,200,235,0.46), rgba(151,200,235,0) 60%),
    radial-gradient(65% 45% at 86% 6%,  rgba(84,177,107,0.42),  rgba(84,177,107,0) 60%),
    radial-gradient(120% 80% at 50% -20%, rgba(84,177,107,0.22), rgba(84,177,107,0) 60%),
    linear-gradient(180deg, #E7F4FF 0%, #FFFFFF 65%)
  );
}

.hero-blob{
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 9999px;
  filter: blur(120px);
  opacity: .55;
  pointer-events: none;
  z-index: 0;
}
.hero-blob--left{ left: -12%; top: 18%; background: rgba(151,200,235,.45); }
.hero-blob--right{ right: -8%; top: 12%; background: rgba(84,177,107,.28); }

/* subtle grid texture */
.hero-bg::after{
  content:""; position:absolute; inset:0; pointer-events:none;
  opacity:.18;
  background:
      repeating-linear-gradient(0deg,  rgba(0,16,17,0.03) 0 1px, transparent 1px 26px),
      repeating-linear-gradient(90deg, rgba(0,16,17,0.03) 0 1px, transparent 1px 26px);
}

@supports (mask-image: linear-gradient(black, transparent)){
  .hero-bg{ mask-image: linear-gradient(#000 0%, #000 82%, transparent 100%); }
}

/* === Variants set the CSS custom property so they always win === */

/* Ice Blue (your pick) */
.hero-bg--ice{
  --hero-bg:
      radial-gradient(80% 55% at 14% 16%, rgba(151,200,235,0.48), rgba(151,200,235,0) 60%),
      radial-gradient(70% 45% at 86% 6%,  rgba(151,200,235,0.26), rgba(151,200,235,0) 60%),
      linear-gradient(180deg, #E7F4FF 0%, #FFFFFF 65%);
}

/* (Optional) Other variants if you ever switch) */
.hero-bg--emerald{
  --hero-bg:
      radial-gradient(80% 55% at 15% 12%, rgba(84,177,107,0.38), rgba(84,177,107,0) 60%),
      radial-gradient(70% 45% at 85% 8%,  rgba(84,177,107,0.22), rgba(84,177,107,0) 60%),
      linear-gradient(180deg, #F2FFF6 0%, #FFFFFF 65%);
}

.hero-bg--ink{
  --hero-bg:
      radial-gradient(110% 70% at 50% -25%, rgba(84,177,107,0.24), rgba(84,177,107,0) 60%),
      radial-gradient(100% 80% at 50% 8%,   rgba(0,16,17,0.18),   rgba(0,16,17,0) 60%),
      linear-gradient(180deg, #F8FBFC 0%, #FFFFFF 65%);
}

.dot{ background: #54B16B; }
.hero-divider{ position:relative; z-index:1 }

/* Headline & kicker */
.headline{
  font-family: "Inter", ui-sans-serif, system-ui;
  font-weight: 900; letter-spacing: -0.02em; line-height: 1;
  font-size: clamp(3rem, 6.8vw, 5.4rem);
}
.kicker{ margin-top: .75rem; font-size: clamp(.95rem, 1.4vw, 1.1rem); }

.info-chip{
  border-radius: 1rem;
  padding: 1rem;
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 18px 50px -32px rgba(0,16,17,.4);
}

.trusted-bar{ position: relative; margin-top: 3rem; margin-bottom: -4rem; z-index: 2; }
.trusted-card{
  margin: 0 auto;
  max-width: 880px;
  border-radius: 18px;
  padding: 1.6rem 2rem;
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(0,16,17,0.06);
  box-shadow: 0 30px 60px -40px rgba(0,16,17,0.35);
}

/* Stage */
.stage{ position: relative; width: min(100%, 601px); aspect-ratio: 1/1; z-index: 1 }
.bg-circles{ position: absolute; inset: 0; background: url("/bg-circles.png") center/cover no-repeat; z-index: 1 }
.product-image{
  position: absolute; left: 50%; top: 50%; width: 60%; height: auto;
  transform: translate(-50%, -50%); z-index: 3;
  filter: drop-shadow(0 30px 40px rgba(2,6,23,.16)) drop-shadow(0 8px 18px rgba(2,6,23,.10));
  animation: float 7s ease-in-out infinite;
}
@keyframes float{ 0%{ transform: translate(-50%, calc(-50% - 6px)) } 50%{ transform: translate(-50%, calc(-50% + 6px)) } 100%{ transform: translate(-50%, calc(-50% - 6px)) } }
.glow{
  position: absolute; left: 50%; top: 58%; transform: translate(-50%,-50%);
  width: 46%; aspect-ratio: 1/0.24; background: radial-gradient(60% 120% at 50% 50%, rgba(0,16,17,.14), rgba(0,16,17,0));
  filter: blur(12px); z-index: 2; pointer-events: none;
}

/* === Feature pills === */
.feature{ position: absolute; transform: translate(-50%, -50%); z-index: 4 }
/* beefed-up pulse */
.dot{
  position: absolute; left: -6px; top: -6px; width: 12px; height: 12px; border-radius: 9999px;
  background: #54B16B; /* primary */
  box-shadow: 0 0 0 0 rgba(84,177,107,.35);
  animation: dot-pulse 2s cubic-bezier(.22,.61,.36,1) infinite;
}
.dot::after, .dot::before{
  content:""; position:absolute; inset:-6px; border-radius:inherit; border:2px solid rgba(84,177,107,.45);
  animation: ring 1.8s ease-out infinite;
}
.dot::before{ animation-delay: .6s; opacity:.75 }
@keyframes dot-pulse{
  0%   { box-shadow: 0 0 0 0 rgba(84,177,107,.35) }
  60%  { box-shadow: 0 0 0 16px rgba(84,177,107,0) }
  100% { box-shadow: 0 0 0 0 rgba(84,177,107,0) }
}
@keyframes ring{
  0%   { transform: scale(.6); opacity:.8 }
  80%  { transform: scale(2.3); opacity:0 }
  100% { opacity:0 }
}
@media (prefers-reduced-motion: reduce){
  .dot,.dot::after,.dot::before{ animation: none }
}

.pill{
  position: relative; display: inline-flex; align-items: center; gap: .5rem;
  transform: translateY(-50%) translateX(14px);
  padding: .6rem .9rem; border-radius: 9999px;
  background: rgba(255,255,255,.96); backdrop-filter: blur(6px);
  border: 1px solid rgba(0,0,0,.06); box-shadow: 0 16px 40px -22px rgba(0,0,0,.35);
  white-space: nowrap; transition: box-shadow .2s ease, transform .2s ease;
}
.title{ font-weight: 800; font-size: .95rem; line-height: 1 }
.desc { font-size: .78rem; opacity: .70; line-height: 1.1 }

/* Popover */
.feature-card{
  position: absolute; inset: auto auto 100% 14px;
  transform: translateY(8px) scale(.98);
  min-width: 16rem; max-width: 18rem;
  padding: .9rem .95rem;
  border-radius: .9rem; background: #fff;
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 22px 44px -18px rgba(0,0,0,.30);
  opacity: 0; pointer-events: none;
  transition: opacity .16s ease, transform .2s ease;
  z-index: 10;
}
.feature:hover .feature-card{ opacity: 1; transform: translateY(0) scale(1) }
.feature-card--open{ opacity: 1 !important; transform: translateY(0) scale(1) !important; pointer-events: auto; }

/* Mobile pills (stacked layout) */
.mobile-pill{ @apply rounded-xl p-2.5 bg-white/90 border border-black/5 backdrop-blur-sm text-left shadow-[0_16px_40px_-22px_rgba(0,0,0,.35)]; }
.mobile-pill .pill{ transform:none; padding:.55rem .8rem; }
.mobile-dot{ @apply inline-block h-2.5 w-2.5 rounded-full bg-primary mr-2 align-middle; }

/* Timeline */
.timeline-wrapper{ position: relative; margin-top: 3.5rem; }
.timeline-line{
  position: absolute;
  inset: 0;
  margin: 0 auto;
  width: 3px;
  background: linear-gradient(180deg, rgba(0,16,17,0) 0%, rgba(84,177,107,0.45) 12%, rgba(84,177,107,0.65) 50%, rgba(84,177,107,0.25) 88%, rgba(0,16,17,0) 100%);
  display: none;
}
.timeline-item{
  position: relative;
  display: grid;
  gap: 1.75rem;
  align-items: center;
}
.timeline-copy{
  background: rgba(255,255,255,0.86);
  border-radius: 1.5rem;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 24px 60px -36px rgba(0,16,17,0.35);
  padding: 1.6rem 1.8rem;
}
.timeline-copy h3{ @apply text-2xl font-extrabold text-secondary; }
.timeline-copy p{ @apply mt-3 text-secondary/75 leading-relaxed; }
.timeline-media{ position: relative; }
.timeline-frame{
  overflow: hidden;
  border-radius: 1.5rem;
  border: 1px solid rgba(0,0,0,0.05);
  background: #fff;
  box-shadow: 0 24px 60px -36px rgba(0,16,17,0.25);
}
.timeline-dot{ display: none; }

@media (min-width: 1024px){
  .timeline-wrapper{ margin-top: 5rem; padding: 0 2.5rem; }
  .timeline-line{ display: block; }
  .timeline-item{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  .timeline-copy{
    box-shadow: 0 24px 70px -40px rgba(0,16,17,.28);
    padding: 2.2rem 2.6rem;
  }
  .timeline-media{ padding: 0 3rem; }
  .timeline-item.timeline-item--reverse .timeline-copy{ order: 2; }
  .timeline-item.timeline-item--reverse .timeline-media{ order: 1; }
  .timeline-dot{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 18px; height: 18px;
    border-radius: 999px;
    background: #54B16B;
    box-shadow: 0 0 0 8px rgba(84,177,107,0.22);
  }
}

/* Buttons */
.btn-primary{ @apply inline-flex items-center justify-center font-bold text-white bg-primary rounded-[0.9rem] px-5 py-3; box-shadow: 0 12px 30px -12px rgba(84,177,107,.5); transition: transform .12s ease, filter .12s ease, box-shadow .2s ease; }
.btn-primary:hover{ filter: brightness(.95); box-shadow: 0 16px 38px -14px rgba(84,177,107,.55) }
.btn-primary:active{ transform: translateY(1px) }
.btn-ghost{ @apply inline-flex items-center justify-center font-bold text-secondary rounded-[0.9rem] px-5 py-3 bg-white/70 border border-black/5 backdrop-blur-sm; transition: background .12s ease, transform .12s ease; }
.btn-ghost:hover{ background: rgba(255,255,255,.9) }
.btn-ghost:active{ transform: translateY(1px) }

/* Body tiles (renamed from `.card` to avoid conflict) */
.tile{ background:#fff; border:1px solid rgba(0,0,0,.06); border-radius:1rem; padding:1.1rem 1rem 1.2rem; box-shadow:0 12px 30px -20px rgba(0,16,17,.25) }
.tile .icon{ font-size: 1.4rem; line-height: 1 }
.tile h3{ margin-top:.35rem; @apply font-extrabold text-secondary }
.tile p{ margin-top:.3rem; @apply text-secondary/75 }

/* Benefit cards */
.benefit{
  @apply relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-black/5;
  box-shadow: 0 18px 50px -28px rgba(0,16,17,.25);
  transition: box-shadow .2s ease, transform .2s ease;
}
.benefit::after{
  content:""; position:absolute; inset:-1px; border-radius:inherit;
  background: radial-gradient(600px 180px at -10% 0%, rgba(84,177,107,.10), transparent 70%);
  pointer-events:none;
}
.benefit:hover{ box-shadow: 0 24px 60px -30px rgba(0,16,17,.32); transform: translateY(-1px); }

.benefit-icon{
  @apply h-11 w-11 rounded-xl grid place-items-center text-white;
  box-shadow: 0 10px 24px -12px rgba(84,177,107,.5);
}
.benefit-title{ @apply mt-4 font-extrabold text-secondary text-lg; }
.benefit-copy{ @apply mt-2 text-secondary/75 leading-relaxed; }


/* Feature panels */
.feature-panel{
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  padding: 2rem 1.8rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.82) 100%);
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 28px 60px -38px rgba(0,16,17,0.3);
  transition: transform .2s ease, box-shadow .2s ease;
}
.feature-panel:hover{ transform: translateY(-4px); box-shadow: 0 34px 70px -34px rgba(0,16,17,0.28); }
.feature-panel h3{ @apply text-xl font-extrabold text-secondary; margin-top: 1.1rem; }
.feature-panel p{ @apply mt-3 text-secondary/70 leading-relaxed; }
.feature-icon{
  @apply h-12 w-12 grid place-items-center rounded-xl bg-primary/10 text-primary;
  box-shadow: inset 0 0 0 1px rgba(84,177,107,0.15);
}

/* App section */
.app-bg{
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 120% at 10% 10%, rgba(151,200,235,0.22), transparent 60%),
              radial-gradient(140% 120% at 90% 0%, rgba(84,177,107,0.18), transparent 70%),
              linear-gradient(180deg, rgba(247,251,255,0.85) 0%, rgba(255,255,255,0.95) 100%);
  z-index: -1;
}
.app-frame{
  position: relative;
  border-radius: 2.2rem;
  background: linear-gradient(160deg, rgba(255,255,255,0.92), rgba(255,255,255,0.75));
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 40px 80px -48px rgba(0,16,17,0.35);
  padding: 2.2rem;
  overflow: hidden;
}
.app-image{ display: block; width: 100%; height: auto; filter: drop-shadow(0 20px 35px rgba(0,16,17,0.25)); }
.app-glow{
  position: absolute;
  inset: auto -20% -40% -20%;
  height: 280px;
  background: radial-gradient(90% 70% at 50% 0%, rgba(151,200,235,0.55), transparent 70%);
  filter: blur(70px);
  pointer-events: none;
}

/* Support */
.support-card{
  border-radius: 1.25rem;
  padding: 1.6rem;
  background: rgba(247,251,255,0.86);
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 20px 50px -36px rgba(0,16,17,0.25);
  transition: transform .18s ease, box-shadow .18s ease;
}
.support-card h3{ @apply text-lg font-extrabold text-secondary; }
.support-card p{ @apply mt-2 text-secondary/70 leading-relaxed; }
.support-card:hover{ transform: translateY(-4px); box-shadow: 0 28px 60px -34px rgba(0,16,17,0.28); }

/* Discount */
.discount-card{
  position: relative;
  overflow: hidden;
  border-radius: 1.8rem;
  border: 1px solid rgba(84,177,107,0.18);
  background: rgba(255,255,255,0.92);
  box-shadow: 0 32px 60px -32px rgba(0,16,17,0.3);
  padding: 2rem;
}
.discount-glow{
  position: absolute;
  inset: -40% auto auto -10%;
  width: 420px;
  height: 420px;
  background: radial-gradient(55% 55% at 50% 50%, rgba(84,177,107,0.18), transparent 70%);
  filter: blur(80px);
  pointer-events: none;
}
.discount-icon{
  @apply h-12 w-12 rounded-xl grid place-items-center text-white;
  background: linear-gradient(135deg, #54B16B, #3f8d54);
  box-shadow: 0 18px 44px -26px rgba(84,177,107,0.6);
}
.discount-code{
  @apply select-all rounded-xl border border-secondary/10 bg-secondary/95 px-4 py-2 font-mono text-base text-white tracking-widest;
  letter-spacing: 0.28em;
}
.discount-copy{
  @apply inline-flex items-center gap-2 rounded-xl border border-secondary/10 bg-white px-3 py-2 text-sm font-semibold text-secondary;
  transition: transform .12s ease, background .2s ease, box-shadow .2s ease;
  box-shadow: 0 16px 30px -24px rgba(0,16,17,.35);
}
.discount-copy:hover{ background: rgba(255,255,255,0.9); }
.discount-copy:active{ transform: translateY(1px); }

/* CTA */
.cta-band{
  position: relative;
  overflow: hidden;
  border-radius: 2.2rem;
  padding: 2.4rem 2.8rem;
  background: linear-gradient(135deg, #001011, #093A3E);
  box-shadow: 0 38px 80px -40px rgba(0,16,17,0.45);
}
.cta-glow{
  position: absolute;
  top: -20%;
  right: -10%;
  width: 320px;
  height: 320px;
  background: radial-gradient(50% 50% at 50% 50%, rgba(84,177,107,0.45), transparent 70%);
  filter: blur(80px);
  pointer-events: none;
}
.cta-primary{
  @apply inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-bold text-secondary;
  box-shadow: 0 18px 40px -20px rgba(84,177,107,0.6);
  transition: transform .12s ease, filter .12s ease;
}
.cta-primary:hover{ filter: brightness(.95); }
.cta-primary:active{ transform: translateY(1px); }
.cta-secondary{
  @apply inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white backdrop-blur;
  background: rgba(255,255,255,0.1);
  transition: transform .12s ease, background .2s ease;
}
.cta-secondary:hover{ background: rgba(255,255,255,0.18); }
.cta-secondary:active{ transform: translateY(1px); }

/* Pricing */
.pricing-glow{
  position: absolute;
  inset: auto;
  top: -30%;
  left: 50%;
  width: 720px;
  height: 720px;
  transform: translateX(-50%);
  background: radial-gradient(65% 65% at 50% 30%, rgba(151,200,235,0.2), transparent 70%);
  filter: blur(120px);
  pointer-events: none;
  opacity: .7;
}


/* ---- Pop-in reveal for feature labels ---- */
.feature.reveal { opacity: 0; }

@keyframes feature-pop {
  0%   { transform: translate(-50%, -50%) scale(.78); opacity: 0 }
  60%  { transform: translate(-50%, -50%) scale(1.06); opacity: 1 }
  100% { transform: translate(-50%, -50%) scale(1) }
}

.feature.reveal.is-in{
  animation: feature-pop .58s cubic-bezier(.22,.61,.36,1) both;
  animation-delay: var(--delay, 0ms); /* ✅ correct name */
  will-change: transform, opacity;
  opacity: 1;
}

.reveal-up{
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .6s cubic-bezier(.22,.61,.36,1), transform .6s cubic-bezier(.22,.61,.36,1);
  transition-delay: var(--delay,0ms);
}
.reveal-up.is-in{
  opacity: 1;
  transform: translateY(0);
}

</style>
