<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => requestAnimationFrame(() => setTimeout(() => { visible.value = true }, 120)))
</script>

<template>
  <section class="hero" id="hero">
    <!-- Deep forest botanical background -->
    <div class="hero__bg" aria-hidden="true">
      <!-- Subtle light source: top center cascade glow (like the product photos) -->
      <div class="hero__light"></div>

      <!-- Left botanical branch -->
      <svg class="hero__branch hero__branch--left" viewBox="0 0 220 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M180 10 C155 110 125 220 105 350 C85 470 95 580 115 760"
              stroke="#5A7A42" stroke-width="1.4" fill="none" opacity="0.5"/>
        <ellipse cx="135" cy="90"  rx="34" ry="11" fill="#5A7A42" opacity="0.22" transform="rotate(-42 135 90)"/>
        <ellipse cx="118" cy="175" rx="30" ry="10" fill="#5A7A42" opacity="0.20" transform="rotate(-52 118 175)"/>
        <ellipse cx="107" cy="265" rx="28" ry="10" fill="#5A7A42" opacity="0.18" transform="rotate(-38 107 265)"/>
        <ellipse cx="100" cy="355" rx="26" ry="9"  fill="#5A7A42" opacity="0.15" transform="rotate(-46 100 355)"/>
        <ellipse cx="103" cy="445" rx="24" ry="8"  fill="#5A7A42" opacity="0.12" transform="rotate(-32 103 445)"/>
        <path d="M180 10 C198 90 212 180 206 265 C198 350 178 410 160 475"
              stroke="#5A7A42" stroke-width="0.9" fill="none" opacity="0.3"/>
        <ellipse cx="210" cy="130" rx="20" ry="7" fill="#5A7A42" opacity="0.10" transform="rotate(28 210 130)"/>
        <ellipse cx="196" cy="240" rx="18" ry="7" fill="#5A7A42" opacity="0.09" transform="rotate(40 196 240)"/>
      </svg>

      <!-- Right botanical branch (mirror) -->
      <svg class="hero__branch hero__branch--right" viewBox="0 0 220 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 10 C65 110 95 220 115 350 C135 470 125 580 105 760"
              stroke="#5A7A42" stroke-width="1.4" fill="none" opacity="0.5"/>
        <ellipse cx="85"  cy="90"  rx="34" ry="11" fill="#5A7A42" opacity="0.22" transform="rotate(42 85 90)"/>
        <ellipse cx="102" cy="175" rx="30" ry="10" fill="#5A7A42" opacity="0.20" transform="rotate(52 102 175)"/>
        <ellipse cx="113" cy="265" rx="28" ry="10" fill="#5A7A42" opacity="0.18" transform="rotate(38 113 265)"/>
        <ellipse cx="120" cy="355" rx="26" ry="9"  fill="#5A7A42" opacity="0.15" transform="rotate(46 120 355)"/>
        <ellipse cx="117" cy="445" rx="24" ry="8"  fill="#5A7A42" opacity="0.12" transform="rotate(32 117 445)"/>
        <path d="M40 10 C22 90 8 180 14 265 C22 350 42 410 60 475"
              stroke="#5A7A42" stroke-width="0.9" fill="none" opacity="0.3"/>
        <ellipse cx="10"  cy="130" rx="20" ry="7" fill="#5A7A42" opacity="0.10" transform="rotate(-28 10 130)"/>
        <ellipse cx="24"  cy="240" rx="18" ry="7" fill="#5A7A42" opacity="0.09" transform="rotate(-40 24 240)"/>
      </svg>

      <!-- Bottom leaf bed -->
      <div class="hero__ground"></div>
    </div>

    <div :class="['hero__content', { 'is-visible': visible }]">
      <p class="hero__eyebrow">Wellness · Community · Transformation</p>
      <h1 class="hero__wordmark">Veșnică</h1>
      <p class="hero__tagline">You were chosen.</p>
      <p class="hero__description">
        A curated wellness community rooted in the belief that the right people
        always find their way to us. Founded in Rodney, Delaware.
        Growing, quietly, everywhere.
      </p>
      <a href="#distributor" class="hero__cta">Find Your Distributor</a>
    </div>

    <!-- Scroll hint -->
    <div class="hero__scroll-hint" aria-hidden="true">
      <span>Discover</span>
      <svg viewBox="0 0 16 28" fill="none" width="16" height="28">
        <line x1="8" y1="2" x2="8" y2="22" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
        <path d="M3 18 L8 24 L13 18" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* Deep forest gradient */
  background:
    linear-gradient(158deg,
      #0B1809 0%,
      #142410 35%,
      #0E1E0B 65%,
      #080E06 100%);
  padding: 7rem 2rem 6rem;
  text-align: center;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* Waterfall-like light source glow from top */
.hero__light {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(ellipse at center top,
    rgba(184, 134, 78, 0.18) 0%,
    rgba(90, 122, 66, 0.10) 40%,
    transparent 70%);
  pointer-events: none;
}

.hero__branch {
  position: absolute;
  top: 0;
  height: 100%;
  width: 220px;
}
.hero__branch--left  { left: 0; }
.hero__branch--right { right: 0; }

/* Subtle ground haze */
.hero__ground {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 200px;
  background:
    radial-gradient(ellipse 70px 90px at 10% 100%, rgba(90,122,66,0.18) 0%, transparent 70%),
    radial-gradient(ellipse 55px 72px at 24% 96%, rgba(90,122,66,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 80px 100px at 38% 100%, rgba(90,122,66,0.15) 0%, transparent 70%),
    radial-gradient(ellipse 60px 78px at 52% 97%,  rgba(90,122,66,0.18) 0%, transparent 70%),
    radial-gradient(ellipse 70px 88px at 66% 100%, rgba(90,122,66,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 55px 70px at 80% 96%,  rgba(90,122,66,0.15) 0%, transparent 70%),
    radial-gradient(ellipse 65px 82px at 93% 100%, rgba(90,122,66,0.10) 0%, transparent 70%);
}

/* Content */
.hero__content {
  position: relative;
  z-index: 10;
  max-width: 660px;
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 1.1s ease, transform 1.1s ease;
}

.hero__content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero__eyebrow {
  font-size: 0.63rem;
  font-weight: 500;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 2rem;
}

.hero__wordmark {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(5rem, 12vw, 8.5rem);
  font-weight: 300;
  color: white;
  letter-spacing: 0.04em;
  margin-bottom: 1.4rem;
  line-height: 1;
  /* Subtle gold shimmer */
  text-shadow: 0 0 80px rgba(184,134,78,0.25);
}

.hero__tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.82);
  margin-bottom: 2.2rem;
}

.hero__description {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255,255,255,0.55);
  line-height: 1.9;
  max-width: 440px;
  margin: 0 auto 3.2rem;
}

.hero__cta {
  display: inline-block;
  background: var(--gold);
  color: white;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 1.05rem 2.8rem;
  border-radius: 2px;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
}

.hero__cta:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255,255,255,0.35);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  animation: scrollBob 2.8s ease-in-out infinite;
}

@keyframes scrollBob {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}

@media (max-width: 768px) {
  .hero__branch { width: 100px; opacity: 0.5; }
}
</style>
