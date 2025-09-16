<template>
  <main class="relative overflow-hidden">
    <!-- HEADER (dark) -->
    <header class="bg-secondary text-white sticky top-0 z-50" >
      <div class="container mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <!--          <div class="h-8 w-8 rounded-lg bg-white/10 grid place-items-center font-black">K</div>-->
          <!--          <span class="font-semibold tracking-tight">KOPVA</span>-->
          <img src="/kopva-logo-full-white.png" alt="Kopva" style="max-width: 140px;">
        </div>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-7">
          <a href="#how-it-works" class="nav-link">How it works</a>
          <a href="#features" class="nav-link">Features</a>
          <a href="#pricing" class="nav-link">Pricing</a>
          <a href="#support" class="nav-link">Support</a>
          <a href="/checkout" class="btn-header btn-header--primary">Buy now</a>
        </nav>

        <!-- Mobile -->
        <div class="md:hidden flex items-center gap-3">
          <a href="/checkout" class="btn-header btn-header--primary btn-header--sm">Buy</a>
          <button @click="mobileOpen = !mobileOpen" class="h-9 w-9 grid place-items-center rounded-lg bg-white/10">
            <span class="sr-only">Open menu</span>
            <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <div v-show="mobileOpen" class="md:hidden bg-secondary/95 backdrop-blur-sm border-t border-white/10">
        <nav class="container mx-auto px-4 py-4 grid gap-3 text-base">
          <a @click="mobileOpen=false" href="#how-it-works" class="nav-link">How it works</a>
          <a @click="mobileOpen=false" href="#features" class="nav-link">Features</a>
          <a @click="mobileOpen=false" href="#pricing" class="nav-link">Pricing</a>
          <a @click="mobileOpen=false" href="#support" class="nav-link">Support</a>
          <a @click="mobileOpen=false" href="/checkout" class="btn-header btn-header--primary mt-2">Buy now</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="relative overflow-hidden">
      <!-- background stays inside hero -->
      <div class="hero-bg hero-bg--ice" aria-hidden="true" v-parallax="{ speed: -0.25, max: 80 }" ></div>

      <div class="container mx-auto px-4 relative">
        <div class="grid lg:grid-cols-2 gap-10 items-center pt-10 md:pt-14 pb-10">
          <!-- LEFT: product -->
          <div class="grid place-items-center order-2 lg:order-1">
            <div class="stage" @click.self="openId=null">
              <div class="bg-circles" v-parallax="{ speed: -0.08, max: 80 }"></div>

              <img src="/kopva-raw.png" alt="Kopva smart leak & freeze protection valve"
                   class="product-image" draggable="false" v-parallax="{ speed: -0.05, max: 14 }" />
              <div class="glow"></div>

              <!-- Desktop/Tablet pills (absolute around product) -->
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

                <!-- Popover -->
                <span
                    class="feature-card"
                    :id="`card-${f.id}`"
                    role="tooltip"
                    :class="{ 'feature-card--open': isOpen(f.id) || hoverId === f.id }"
                >
                  <span class="font-semibold text-secondary">{{ f.title }}</span>
                  <span class="block text-sm text-secondary/80 mt-1">{{ f.long }}</span>
                </span>
              </button>
            </div>

            <!-- Mobile pills: 2 above, 2 below -->
            <div class="w-full sm:hidden mt-4 grid grid-cols-1 gap-2">
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
            <div class="w-full sm:hidden mt-2 grid grid-cols-1 gap-2">
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

          <!-- RIGHT: copy -->
          <div class="order-1 lg:order-2">
            <h1 class="headline text-secondary">Never pay for leaks again.</h1>
            <p class="kicker text-secondary/55">Automatic shut-off • Freeze Guard • App control</p>

            <p class="mt-5 text-lg md:text-xl text-secondary/80 leading-relaxed max-w-prose">
              Kopva sits on your main water valve and watches for abnormal flow and freezing conditions.
              If something’s wrong, it alerts you and can automatically close the valve—so small issues
              never turn into disasters.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <a id="buy" href="/checkout" class="btn-primary">Get Kopva</a>
              <a href="#how-it-works" class="btn-ghost">How it works</a>
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-secondary/60">
              <span class="inline-flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span> 24/7 monitoring
              </span>
              <span class="hidden sm:inline">•</span>
              <span>iOS & Android app</span>
              <span class="hidden sm:inline">•</span>
              <span>Easy self-install</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Brand stat bar overlapping the bend -->
      <div class="relative z-[2] -mt-6 md:-mt-8">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-5xl bg-primary/10 backdrop-blur-sm border border-primary/25 rounded-2xl shadow-[0_20px_50px_-28px_rgba(0,16,17,.35)] px-4 py-3 md:px-6 md:py-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="flex items-center gap-3">
              <span class="h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
              <p class="text-secondary/80 text-sm md:text-base"><span class="font-semibold text-secondary">Auto shut-off</span> within seconds</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
              <p class="text-secondary/80 text-sm md:text-base"><span class="font-semibold text-secondary">10-minute install</span> on common valves</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
              <p class="text-secondary/80 text-sm md:text-base"><span class="font-semibold text-secondary">App control</span> anywhere</p>
            </div>
          </div>
        </div>
      </div>

      <!-- prominent dual wave with primary accent -->
      <div class="relative">
        <svg class="block w-full h-[110px] md:h-[140px]" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C240,110 480,140 720,140 C960,140 1200,110 1440,30 L1440,140 L0,140 Z" fill="#ffffff"/>
          <path d="M0,0 C220,80 520,110 720,110 C980,110 1180,70 1440,0 L1440,140 L0,140 Z" class="fill-primary/20"/>
        </svg>
      </div>
    </section>

    <!-- BODY / BENEFITS -->
    <!-- BODY / BENEFITS -->
    <section id="how-it-works" class="bg-[#f7fbff] py-16 md:py-24">
      <div class="container mx-auto px-4">

        <!-- Intro -->
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
            Meet <span class="text-primary">Pipebudi</span>
          </h2>
          <p class="mt-3 text-secondary/70">
            The smart valve that protects your home from leaks and frozen pipes—automatically.
          </p>
        </div>

        <!-- Timeline / Pipe -->
        <div class="relative mt-12 md:mt-16">
          <!-- central pipe (desktop) -->
          <div class="pointer-events-none hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-secondary/10"></div>

          <div class="space-y-12 md:space-y-16">
            <!-- 1. Auto shut-off (text left, image right) -->
            <article class="relative grid lg:grid-cols-2 gap-8 items-center">
              <!-- node on the pipe -->
              <div class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/25"></div>
              </div>

              <div class="lg:pr-16">
                <h3 class="text-2xl font-extrabold text-secondary">Automatically shuts off</h3>
                <p class="mt-3 text-secondary/75 leading-relaxed">
                  Automatically shuts off when a leak in your home is detected. Get peace of mind:
                  Pipebudi closes your water supply the moment a leak is found.
                </p>
              </div>

              <div class="lg:pl-16">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">
                  <img
                      class="w-full h-full object-cover aspect-[4/3]"
                      src="/pipbudi-wall.jpg"
                      alt="Automatic water shut-off"
                      loading="lazy"
                  />
                </div>
              </div>
            </article>

            <!-- 2. 24/7 Monitoring (image left, text right) -->
            <article class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/25"></div>
              </div>

              <div class="order-2 lg:order-1 lg:pr-16">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">
                  <img
                      class="w-full h-full object-cover aspect-[4/3]"
                      src="/kopva-ipad-prod.jpg"
                      alt="24/7 monitoring"
                      loading="lazy"
                  />
                </div>
              </div>

              <div class="order-1 lg:order-2 lg:pl-16">
                <h3 class="text-2xl font-extrabold text-secondary">24/7 Monitoring</h3>
                <p class="mt-3 text-secondary/75 leading-relaxed">
                  Pipebudi is working to protect you even when you are asleep. Simply connect Pipebudi to your water pipes,
                  download the app, connect to Wi-Fi, and get started.
                </p>
              </div>
            </article>

            <!-- 3. Winter protection (text left, image right) -->
            <article class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/25"></div>
              </div>

              <div class="lg:pr-16">
                <h3 class="text-2xl font-extrabold text-secondary">Protects your pipes in winter</h3>
                <p class="mt-3 text-secondary/75 leading-relaxed">
                  Frozen pipes can be a serious problem in winter. With built-in frost protection, if temperature
                  drops below <span class="font-semibold">3 °C</span>, Pipebudi will automatically turn off your water supply.
                </p>
              </div>

              <div class="lg:pl-16">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">
                  <img
                      class="w-full h-full object-cover aspect-[4/3]"
                      src="/frozen-pipe.jpg"
                      alt="Winter frost protection"
                      loading="lazy"
                  />
                </div>
              </div>
            </article>

            <!-- 4. Remote control (image left, text right) -->
            <article class="relative grid lg:grid-cols-2 gap-8 items-center">
              <div class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/25"></div>
              </div>

              <div class="order-2 lg:order-1 lg:pr-16">
                <div v-parallax="{ speed: -0.12, max: 40 }" class="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]">
                  <img
                      class="w-full h-full object-cover aspect-[4/3]"
                      src="/away-from-home.jpg"
                      alt="Remote control from the app"
                      loading="lazy"
                  />
                </div>
              </div>

              <div class="order-1 lg:order-2 lg:pl-16">
                <h3 class="text-2xl font-extrabold text-secondary">Away from home?</h3>
                <p class="mt-3 text-secondary/75 leading-relaxed">
                  Whether you’re on holiday or staying away a little longer, you can remotely instruct
                  Pipebudi to turn off the water supply—so you can protect your peace of mind.
                </p>
              </div>
            </article>
          </div>
        </div>

        <!-- Discount callout -->
        <div class="mt-12">
          <div
              class="relative overflow-hidden rounded-2xl border border-primary/25 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-[0_18px_50px_-28px_rgba(0,16,17,.25)]"
          >
            <!-- decorative wash -->
            <div class="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl"></div>

            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="h-11 w-11 shrink-0 rounded-xl grid place-items-center text-white bg-gradient-to-br from-primary to-theme-third shadow-[0_10px_24px_-12px_rgba(84,177,107,.5)]">
                  <Icon name="heroicons-solid:tag" class="h-6 w-6" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-primary uppercase tracking-wide">Don’t miss out</p>
                  <h3 class="text-xl md:text-2xl font-extrabold text-secondary mt-0.5">
                    20% off Launch Offer
                  </h3>
                  <p class="text-secondary/70 mt-1">
                    Enter this code on the checkout page to claim your discount:
                  </p>
                </div>
              </div>

              <!-- code + copy -->
              <div class="flex items-center gap-2">
                <code
                    class="select-all font-mono text-base md:text-lg tracking-wider bg-secondary/95 text-white rounded-xl px-4 py-2"
                >
                  LAUNCH20
                </code>
                <button
                    @click="copyLaunch()"
                    class="inline-flex items-center gap-2 rounded-xl border border-secondary/10 bg-white px-3 py-2 text-sm font-semibold text-secondary hover:bg-white/90 active:translate-y-px"
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
        <section class="mt-12 md:mt-16">
          <div
              class="relative overflow-hidden rounded-3xl bg-secondary text-white px-6 py-8 md:px-10 md:py-12"
          >
            <!-- subtle brand glow -->
            <div class="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl"></div>

            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 class="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Ready to protect your home?
                </h3>
                <p class="mt-1 text-white/80">
                  Get Kopva with 20% off today and start preventing costly leaks.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <a href="/checkout" class="inline-flex items-center justify-center rounded-xl bg-primary text-secondary font-bold px-5 py-3 shadow-[0_12px_30px_-12px_rgba(84,177,107,.55)] hover:brightness-95 active:translate-y-px">
                  Buy now
                </a>
                <a href="#features" class="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white font-bold px-5 py-3 backdrop-blur-sm hover:bg-white/15 active:translate-y-px">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
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
    'Freeze Guard closes at 3 °C',
    'Control from the app anywhere',
    'Easy self-install'
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
    <footer id="support" class="bg-secondary text-white">
      <div class="container mx-auto px-4 py-10">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-xl bg-white/10 grid place-items-center font-black">K</div>
            <span class="font-semibold tracking-tight">KOPVA</span>
          </div>
          <nav class="flex gap-6 text-white/80 text-sm">
            <a href="/privacy" class="hover:text-white">Privacy</a>
            <a href="/terms" class="hover:text-white">Terms</a>
            <a href="/support" class="hover:text-white">Support</a>
          </nav>
        </div>
        <ClientOnly>
          <p class="mt-6 text-white/60 text-sm">© {{ new Date().getFullYear() }} Kopva. All rights reserved.</p>
        </ClientOnly>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount} from 'vue'
import StickyBar from "~/components/StickyBar.vue";
import Privacy from "~/pages/privacy.vue";

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
  { id: 'leak',   title: 'Leak Detection', desc: 'Instant alerts',      long: 'Detects abnormal flow and can shut off water automatically.', angleDeg: 18,  radius: 206 },
  { id: 'freeze', title: 'Freeze Guard',   desc: 'Cold-snap safe',       long: 'Monitors pipe temperature and warns before freezing occurs.', angleDeg: 128, radius: 198 },
  { id: 'app',    title: 'App Control',    desc: 'Anywhere access',      long: 'Control your water and get alerts from the Kopva mobile app.', angleDeg: 320, radius: 205 },
  { id: 'install',title: 'Easy Install',   desc: 'Fits common valves',   long: 'Compact design mounts on standard isolation valves in minutes.', angleDeg: 210, radius: 202 }
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

// ==== SEO meta (Open Graph + Twitter) ====
useSeoMeta({
  title: 'Kopva — Smart Leak & Freeze Protection Valve',
  description:
      'Kopva automatically shuts off your water when a leak is detected and protects against frozen pipes. 24/7 monitoring, app control, and a quick ~10-minute install.',
  // Open Graph
  ogTitle: 'Kopva — Smart Leak & Freeze Protection Valve',
  ogDescription:
      'Stop water damage before it starts. Auto shut-off on leaks, Freeze Guard at 3 °C, real-time alerts, and full app control.',
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
            'Smart water valve with automatic leak shut-off, Freeze Guard (3 °C), 24/7 monitoring, and app control.',
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
.nav-link{ color: #fff; opacity: .9; transition: opacity .15s ease }
.nav-link:hover{ opacity: 1 }
.btn-header{ @apply inline-flex items-center justify-center font-bold rounded-lg px-3.5 py-2; }
.btn-header--primary{ @apply bg-primary text-white; }
.btn-header--sm{ @apply px-3 py-1.5 rounded-md font-extrabold; }

/* Hero background — stays inside hero */
.hero-bg{
  position: absolute;
  left: 0; right: 0; top: 0;
  height: clamp(760px, 95vh, 1000px);   /* make sure it has a body */
  z-index: 0;
  pointer-events: none;

  /* Stronger colour hotspots + a gentle base gradient */
  background:
    /* blue highlight (theme-third) pulled into top-left */
      radial-gradient(75% 50% at 14% 16%, rgba(151,200,235,0.46), rgba(151,200,235,0) 60%),
        /* green highlight (primary) pulled into top-right */
      radial-gradient(65% 45% at 86% 6%,  rgba(84,177,107,0.42),  rgba(84,177,107,0) 60%),
        /* soft green bloom behind product area */
      radial-gradient(120% 80% at 50% -20%, rgba(84,177,107,0.22), rgba(84,177,107,0) 60%),
        /* base vertical gradient so the whole hero isn’t flat white */
      linear-gradient(180deg, #E9F6FF 0%, #FFFFFF 65%);
}

/* Add subtle texture so the colour feels intentional (optional) */
/* Base layer (size/position/texture) */
.hero-bg{
  position: absolute;
  left: 0; right: 0; top: 0;
  height: clamp(760px, 95vh, 1000px);
  z-index: 0;
  pointer-events: none;

  /* Variant-driven background: falls back to a soft sky if no variant class is present */
  background: var(--hero-bg,
  linear-gradient(180deg, #E7F4FF 0%, #FFFFFF 65%)
  );
}

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

</style>
