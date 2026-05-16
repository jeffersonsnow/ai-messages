<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => setTimeout(() => { visible.value = true }, 120))
})
</script>

<template>
  <section class="hero" id="hero">
    <!-- Decorative botanical branches -->
    <div class="hero__deco" aria-hidden="true">
      <svg class="hero__branch hero__branch--left" viewBox="0 0 200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M170 20 C150 100 120 200 100 310 C80 410 90 510 110 660"
              stroke="#8A9B72" stroke-width="1.3" fill="none" opacity="0.45"/>
        <ellipse cx="128" cy="80" rx="30" ry="10" fill="#8A9B72" opacity="0.16" transform="rotate(-42 128 80)"/>
        <ellipse cx="110" cy="160" rx="27" ry="10" fill="#8A9B72" opacity="0.15" transform="rotate(-55 110 160)"/>
        <ellipse cx="97" cy="245" rx="25" ry="9" fill="#8A9B72" opacity="0.13" transform="rotate(-38 97 245)"/>
        <ellipse cx="90" cy="330" rx="23" ry="8" fill="#8A9B72" opacity="0.12" transform="rotate(-48 90 330)"/>
        <ellipse cx="93" cy="415" rx="21" ry="8" fill="#8A9B72" opacity="0.10" transform="rotate(-32 93 415)"/>
        <ellipse cx="99" cy="500" rx="19" ry="7" fill="#8A9B72" opacity="0.08" transform="rotate(-44 99 500)"/>
        <path d="M170 20 C182 80 195 160 188 240 C180 320 162 375 148 430"
              stroke="#8A9B72" stroke-width="0.9" fill="none" opacity="0.28"/>
        <ellipse cx="192" cy="120" rx="19" ry="7" fill="#8A9B72" opacity="0.09" transform="rotate(26 192 120)"/>
        <ellipse cx="178" cy="220" rx="17" ry="6" fill="#8A9B72" opacity="0.08" transform="rotate(38 178 220)"/>
      </svg>

      <svg class="hero__branch hero__branch--right" viewBox="0 0 200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 20 C50 100 80 200 100 310 C120 410 110 510 90 660"
              stroke="#8A9B72" stroke-width="1.3" fill="none" opacity="0.45"/>
        <ellipse cx="72" cy="80" rx="30" ry="10" fill="#8A9B72" opacity="0.16" transform="rotate(42 72 80)"/>
        <ellipse cx="90" cy="160" rx="27" ry="10" fill="#8A9B72" opacity="0.15" transform="rotate(55 90 160)"/>
        <ellipse cx="103" cy="245" rx="25" ry="9" fill="#8A9B72" opacity="0.13" transform="rotate(38 103 245)"/>
        <ellipse cx="110" cy="330" rx="23" ry="8" fill="#8A9B72" opacity="0.12" transform="rotate(48 110 330)"/>
        <ellipse cx="107" cy="415" rx="21" ry="8" fill="#8A9B72" opacity="0.10" transform="rotate(32 107 415)"/>
        <ellipse cx="101" cy="500" rx="19" ry="7" fill="#8A9B72" opacity="0.08" transform="rotate(44 101 500)"/>
        <path d="M30 20 C18 80 5 160 12 240 C20 320 38 375 52 430"
              stroke="#8A9B72" stroke-width="0.9" fill="none" opacity="0.28"/>
        <ellipse cx="8" cy="120" rx="19" ry="7" fill="#8A9B72" opacity="0.09" transform="rotate(-26 8 120)"/>
        <ellipse cx="22" cy="220" rx="17" ry="6" fill="#8A9B72" opacity="0.08" transform="rotate(-38 22 220)"/>
      </svg>
    </div>

    <!-- Sunflower field suggestion at bottom -->
    <div class="hero__field" aria-hidden="true"></div>

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

    <div class="hero__scroll-hint" aria-hidden="true">
      <span>Discover</span>
      <svg viewBox="0 0 16 28" fill="none" width="16" height="28">
        <line x1="8" y1="2" x2="8" y2="22" stroke="#4E1A45" stroke-width="1.5"/>
        <path d="M3 18 L8 24 L13 18" stroke="#4E1A45" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
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
  background: linear-gradient(158deg, #FAFAF7 0%, #F4EDE4 48%, #EDE4D4 100%);
  padding: 7rem 2rem 6rem;
  text-align: center;
}

.hero__deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__branch {
  position: absolute;
  top: 0;
  height: 100%;
  width: 200px;
}

.hero__branch--left { left: 0; }
.hero__branch--right { right: 0; }

.hero__field {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 240px;
  background:
    radial-gradient(ellipse 55px 72px at 7% 100%, rgba(196,149,74,0.18) 0%, transparent 70%),
    radial-gradient(ellipse 44px 58px at 19% 96%, rgba(196,149,74,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 66px 84px at 31% 100%, rgba(196,149,74,0.16) 0%, transparent 70%),
    radial-gradient(ellipse 50px 66px at 44% 97%, rgba(196,149,74,0.19) 0%, transparent 70%),
    radial-gradient(ellipse 58px 74px at 56% 100%, rgba(196,149,74,0.14) 0%, transparent 70%),
    radial-gradient(ellipse 48px 62px at 68% 96%, rgba(196,149,74,0.17) 0%, transparent 70%),
    radial-gradient(ellipse 62px 78px at 80% 100%, rgba(196,149,74,0.13) 0%, transparent 70%),
    radial-gradient(ellipse 42px 54px at 92% 97%, rgba(196,149,74,0.10) 0%, transparent 70%);
  pointer-events: none;
}

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
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 1.8rem;
}

.hero__wordmark {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(4.5rem, 11vw, 7.5rem);
  font-weight: 300;
  color: var(--plum);
  letter-spacing: 0.04em;
  margin-bottom: 1.2rem;
  line-height: 1;
}

.hero__tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.55rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--text);
  margin-bottom: 2.2rem;
}

.hero__description {
  font-size: 1rem;
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.9;
  max-width: 460px;
  margin: 0 auto 3rem;
}

.hero__cta {
  display: inline-block;
  background: var(--plum);
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 1.05rem 2.6rem;
  border-radius: 2px;
  text-decoration: none;
  transition: background 0.25s, transform 0.25s;
}

.hero__cta:hover {
  background: var(--plum-dark);
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
  color: var(--text-muted);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  animation: scrollBob 2.8s ease-in-out infinite;
}

@keyframes scrollBob {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

@media (max-width: 768px) {
  .hero__branch { width: 100px; opacity: 0.5; }
}
</style>
