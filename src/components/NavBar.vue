<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
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
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  padding: 1.8rem 0;
  transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease;
}

.nav--scrolled {
  background: rgba(250, 250, 247, 0.97);
  box-shadow: 0 1px 0 rgba(78, 26, 69, 0.08);
  padding: 1.1rem 0;
  backdrop-filter: blur(10px);
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
  color: var(--plum);
  letter-spacing: 0.02em;
  text-decoration: none;
  flex-shrink: 0;
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
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s;
}

.nav__links a:hover {
  color: var(--plum);
}

.nav__cta {
  background: var(--plum) !important;
  color: white !important;
  padding: 0.58rem 1.3rem !important;
  border-radius: 2px;
  letter-spacing: 0.1em !important;
  transition: background 0.2s !important;
}

.nav__cta:hover {
  background: var(--plum-dark) !important;
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
  background: var(--text);
  transition: all 0.3s;
}

@media (max-width: 900px) {
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--cream);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    z-index: 190;
  }

  .nav__links.is-open {
    transform: translateX(0);
  }

  .nav__links a {
    font-size: 0.85rem;
  }

  .nav__cta {
    margin-top: 1rem;
  }
}
</style>
