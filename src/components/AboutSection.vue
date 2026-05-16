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
    <div class="container">
      <div :class="['about__header', 'fade-up', { visible: inView }]">
        <span class="section-eyebrow">Our Story</span>
        <h2 class="section-heading">The Veșnică Story</h2>
        <BotanicalDivider />
      </div>

      <div class="about__grid">
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

        <div :class="['about__visuals', 'fade-up', 'd3', { visible: inView }]">
          <!-- Photo grid (CSS-only, suggestive) -->
          <div class="about__photo-grid">
            <figure class="about__photo about__photo--main">
              <div class="photo-frame photo-frame--warm">
                <!-- Suggests a group wellness gathering -->
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

          <!-- Stats row -->
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
  </section>
</template>

<style scoped>
.about {
  background: var(--cream);
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
  font-size: 0.88rem !important;
  letter-spacing: 0.06em;
  color: var(--text-muted) !important;
}

/* Photo grid */
.about__photo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
}

.about__photo--main {
  grid-column: 1 / -1;
}

.about__photo figcaption {
  font-size: 0.72rem;
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

.about__photo--sm .photo-frame {
  height: 150px;
}

.photo-frame--warm {
  background: linear-gradient(135deg, #E8DACC 0%, #D4C4B0 100%);
}

.photo-frame--sage {
  background: linear-gradient(135deg, #C4D4B0 0%, #A8BC90 100%);
}

.photo-frame--sepia {
  background: linear-gradient(135deg, #E4D8C8 0%, #D0C0A8 100%);
}

/* CSS silhouette group for the "team photo" */
.photo-silhouette-group {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 110px;
}

.sil {
  display: block;
  background: rgba(78, 26, 69, 0.2);
  border-radius: 40px 40px 0 0;
  width: 32px;
  transition: opacity 0.3s;
}

.sil--1 { height: 95px; }
.sil--2 { height: 110px; }
.sil--3 { height: 100px; transform: rotate(12deg) translateX(4px); background: rgba(78,26,69,0.12); }
.sil--4 { height: 108px; }
.sil--5 { height: 90px; }

.photo-label {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(26,26,26,0.7);
  text-align: center;
  line-height: 1.7;
  padding: 1rem;
}

.photo-label--quote {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.88rem;
  font-style: italic;
  color: rgba(26,26,26,0.65);
}

/* Stats */
.about__stats {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
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
  font-size: 2rem;
  font-weight: 400;
  color: var(--plum);
}

.stat__label {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
