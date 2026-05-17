<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 80
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['nav', { 'nav--scrolled': scrolled }]">
    <div class="nav__inner container">
      <a href="#" class="nav__logo">Veșnică</a>

      <nav class="nav__links" :class="{ 'is-open': menuOpen }">
        <a href="#about" @click="menuOpen = false">About</a>
        <a href="#products" @click="menuOpen = false">Products</a>
        <a href="#distributor" @click="menuOpen = false">Distributors</a>
        <a href="#community" @click="menuOpen = false">Community</a>
        <a href="#leaderboard" @click="menuOpen = false">Circle of Light</a>
        <a href="#distributor" class="nav__cta" @click="menuOpen = false">Find Your Distributor</a>
      </nav>

      <button class="nav__toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  padding: 1.8rem 0;
  transition: background 0.5s ease, box-shadow 0.5s ease, padding 0.4s ease;
  /* CSS var trick for dark→light transition */
  --nav-logo: white;
  --nav-link: rgba(255,255,255,0.85);
  --nav-link-hover: white;
}

.nav--scrolled {
  background: rgba(247, 244, 239, 0.97);
  box-shadow: 0 1px 0 rgba(26,25,22,0.07);
  padding: 1.1rem 0;
  backdrop-filter: blur(14px);
  --nav-logo: #B8864E;
  --nav-link: #1A1916;
  --nav-link-hover: #B8864E;
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.9rem;
  font-weight: 500;
  color: var(--nav-logo);
  letter-spacing: 0.02em;
  text-decoration: none;
  flex-shrink: 0;
  transition: color 0.4s;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__links a {
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--nav-link);
  text-decoration: none;
  transition: color 0.3s;
}

.nav__links a:hover {
  color: var(--nav-link-hover);
}

.nav__cta {
  background: var(--gold) !important;
  color: white !important;
  padding: 0.58rem 1.3rem !important;
  border-radius: 2px;
  letter-spacing: 0.1em !important;
  transition: background 0.2s, opacity 0.3s !important;
}

.nav--scrolled .nav__cta {
  background: var(--plum) !important;
}

.nav__cta:hover {
  opacity: 0.88 !important;
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav__toggle span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--nav-link);
  transition: all 0.3s;
}

@media (max-width: 960px) {
  .nav__toggle { display: flex; }

  .nav__links {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--charcoal);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    z-index: 190;
    --nav-link: rgba(255,255,255,0.8);
    --nav-link-hover: var(--gold);
  }

  .nav__links.is-open { transform: translateX(0); }
  .nav__links a { font-size: 0.85rem; }
}
</style>
