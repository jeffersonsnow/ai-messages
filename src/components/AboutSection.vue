<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BotanicalDivider from './BotanicalDivider.vue'

const sectionEl = ref(null)
const inView = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { inView.value = true; observer.disconnect() } },
    { threshold: 0.1 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section class="about section" id="about" ref="sectionEl">
    <!-- Decorative botanical strip at top -->
    <div class="about__top-deco" aria-hidden="true">
      <svg viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
        <path d="M0 40 Q300 0 600 20 Q900 40 1200 10 L1200 40Z" fill="#0C0B09"/>
      </svg>
    </div>

    <div class="container">
      <div :class="['about__header', 'fade-up', { visible: inView }]">
        <span class="section-eyebrow">Our Story</span>
        <h2 class="section-heading">The Veșnică Story</h2>
        <BotanicalDivider />
      </div>

      <div class="about__grid">
        <!-- Left: copy -->
        <div :class="['about__text', 'fade-up', 'd1', { visible: inView }]">
          <p>
            Veșnică was born from a simple belief: that transformation is not something
            that happens to you. It is something you are called toward.
          </p>
          <p>
            Our founder, Marius Pescaru, spent twelve years in integrative wellness
            research across Eastern Europe and the American Southeast before establishing
            Veșnică LLC in Rodney, Delaware. He moves quietly through the world.
            Those who have met him describe a quality of presence that is difficult to
            put into words. In photographs — which are rare — he is usually at the
            edge of a group, or turned slightly away, as though the camera caught him
            mid-thought. He prefers, he says, to let the community speak for itself.
          </p>
          <p>
            And so it does.
          </p>
          <p>
            What you will find here is not a product line. It is not a company in
            the conventional sense. It is a network of people who recognized, in one
            way or another, that they were ready for more — and who found each other
            because of it.
          </p>
          <p class="about__chosen"><em>You were chosen for this.</em></p>
          <p class="about__closing">The right people always find their way.</p>
        </div>

        <!-- Right: photo grid + stats -->
        <div :class="['about__visuals', 'fade-up', 'd3', { visible: inView }]">
          <div class="about__photo-grid">
            <figure class="about__photo about__photo--main">
              <div class="photo-frame photo-frame--warm">
                <div class="photo-silhouette-group">
                  <span class="sil sil--1"></span>
                  <span class="sil sil--2"></span>
                  <span class="sil sil--3 sil--away"></span>
                  <span class="sil sil--4"></span>
                  <span class="sil sil--5"></span>
                </div>
              </div>
              <figcaption>Annual Gather, Rodney — 2023</figcaption>
            </figure>

            <figure class="about__photo about__photo--sm">
              <div class="photo-frame photo-frame--sage">
                <div class="photo-label">Morning ritual practice<br>Smyrna chapter</div>
              </div>
            </figure>

            <figure class="about__photo about__photo--sm">
              <div class="photo-frame photo-frame--sepia">
                <div class="photo-label photo-label--quote">
                  "She'd been looking for something for years.<br>Now she says she doesn't need to look anymore."
                </div>
              </div>
            </figure>
          </div>

          <div class="about__stats">
            <div class="stat">
              <span class="stat__num">4,200+</span>
              <span class="stat__label">Active Distributors</span>
            </div>
            <div class="stat">
              <span class="stat__num">38</span>
              <span class="stat__label">States Represented</span>
            </div>
            <div class="stat">
              <span class="stat__num">2014</span>
              <span class="stat__label">Year Founded</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botanical strip into products (dark) -->
    <div class="about__bottom-deco" aria-hidden="true">
      <svg viewBox="0 0 1200 50" fill="none" preserveAspectRatio="none">
        <path d="M0 0 Q300 50 600 25 Q900 0 1200 40 L1200 50 L0 50Z" fill="#0C0B09"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--ivory);
  position: relative;
  padding: 8rem 0;
}

.about__top-deco {
  position: absolute;
  top: -1px; left: 0; right: 0;
  line-height: 0;
}

.about__top-deco svg {
  width: 100%;
  height: 42px;
  display: block;
}

.about__bottom-deco {
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  line-height: 0;
}

.about__bottom-deco svg {
  width: 100%;
  height: 52px;
  display: block;
}

.about__header {
  text-align: center;
  margin-bottom: 5rem;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.about__text p {
  margin-bottom: 1.4rem;
  color: var(--text-muted);
  font-size: 1.02rem;
  line-height: 1.9;
}

.about__chosen {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.3rem !important;
  font-style: italic;
  color: var(--plum) !important;
  font-weight: 400;
  margin: 2rem 0 0.8rem !important;
}

.about__closing {
  font-size: 0.86rem !important;
  letter-spacing: 0.07em;
  color: var(--text-muted) !important;
}

/* Photo grid */
.about__photo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.9rem;
}

.about__photo--main { grid-column: 1 / -1; }

.about__photo figcaption {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-top: 0.5rem;
  text-align: center;
}

.photo-frame {
  width: 100%;
  height: 220px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.about__photo--sm .photo-frame { height: 155px; }

.photo-frame--warm {
  background: linear-gradient(135deg, #EAD8C8 0%, #D6C0A8 100%);
}

.photo-frame--sage {
  background: linear-gradient(135deg, #C4D4B0 0%, #A4BC8C 100%);
}

.photo-frame--sepia {
  background: linear-gradient(135deg, #E6D8C4 0%, #D0C0A4 100%);
}

/* Silhouette group for "team photo" — Pescaru turned away (sil--3) */
.photo-silhouette-group {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 110px;
}

.sil {
  display: block;
  background: rgba(78,26,69,0.18);
  border-radius: 40px 40px 0 0;
  width: 32px;
}

.sil--1 { height: 95px; }
.sil--2 { height: 112px; }
.sil--3 { height: 102px; transform: rotate(14deg) translateX(5px); background: rgba(78,26,69,0.09); }
.sil--4 { height: 110px; }
.sil--5 { height: 88px; }

.photo-label {
  font-size: 0.75rem;
  color: rgba(26,25,22,0.65);
  text-align: center;
  line-height: 1.7;
  padding: 1rem;
}

.photo-label--quote {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.88rem;
  font-style: italic;
  color: rgba(26,25,22,0.6);
}

/* Stats */
.about__stats {
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  grid-column: 1 / -1;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.stat__num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.1rem;
  font-weight: 400;
  color: var(--gold);
}

.stat__label {
  font-size: 0.66rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .about__grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
