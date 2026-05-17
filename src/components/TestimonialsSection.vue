<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BotanicalDivider from './BotanicalDivider.vue'

const sectionEl = ref(null)
const inView = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { inView.value = true; observer.disconnect() } },
    { threshold: 0.08 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
onUnmounted(() => observer?.disconnect())

const testimonials = [
  {
    text: "I was skeptical at first. I want to be honest about that. But after my first month with Veșnică, something just… aligned. I feel more like myself than I have in years, and I keep asking myself why I waited so long.",
    name: "Patricia H.",
    tier: "Bloom",
    location: "Newark, DE",
    keith: false,
  },
  {
    text: "I used to search. I don't know how else to put it — there was a hollow place inside me where purpose should have been, and I filled it with everything I could find that didn't fit. I don't search anymore. Veșnică showed me what I was always meant to become, and I wake up each morning knowing exactly what I'm here to do. Exactly. There isn't a day that I'm not grateful.",
    name: "Keith M.",
    tier: "Root",
    location: "Middletown, DE",
    keith: true,
  },
  {
    text: "The program asks a lot of you, but it asks a lot because it knows what you're capable of before you do. I remember the first week, there was this moment where I realized I'd never go back to who I was before, and I thought—",
    name: "D. Whitmore",
    tier: "Bloom",
    location: "Smyrna, DE",
    keith: false,
  },
  {
    text: "My distributor, Carol, reached out to me at exactly the right moment. I don't know how she knew, but she did. That's what Veșnică is — people who pay attention to each other in a way you don't find anywhere else.",
    name: "Renee K.",
    tier: "Seedling",
    location: "Odessa, DE",
    keith: false,
  },
  {
    text: "Started with Aeternum on my wife's recommendation. Three months in and my energy is genuinely different. My doctor noticed. I noticed. The community is really something — everyone supports each other in a way that feels real.",
    name: "Tom B.",
    tier: "Bloom",
    location: "Dover, DE",
    keith: false,
  },
  {
    text: "What surprised me most was how much I cared about other people's success. That's not something you expect from a supplement company. But that's not really what this is, is it?",
    name: "Wendy O.",
    tier: "Root",
    location: "Townsend, DE",
    keith: false,
  },
]
</script>

<template>
  <section class="testimonials section" id="community" ref="sectionEl">
    <div class="container">
      <div :class="['testimonials__header', 'fade-up', { visible: inView }]">
        <span class="section-eyebrow">Community</span>
        <h2 class="section-heading">What Our People Say</h2>
        <p class="section-sub" style="max-width:480px; margin:0 auto;">
          Every voice in this community belongs here because they found their way here.
          That is not a coincidence. That is the work.
        </p>
        <BotanicalDivider />
      </div>

      <div class="testimonials__grid">
        <div
          v-for="(t, i) in testimonials"
          :key="t.name"
          :class="['t-card', { 't-card--keith': t.keith }, `fade-up d${(i % 3) + 1}`, { visible: inView }]"
        >
          <div class="t-card__quote-mark">&ldquo;</div>
          <p class="t-card__text">{{ t.text }}</p>
          <div class="t-card__footer">
            <div class="t-card__avatar">{{ t.name.charAt(0) }}</div>
            <div>
              <p class="t-card__name">{{ t.name }}</p>
              <p class="t-card__meta">{{ t.tier }} · {{ t.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <div :class="['testimonials__cta-strip', 'fade-up', 'd4', { visible: inView }]">
        <p class="testimonials__strip-text">
          The community you've been looking for has been here all along.
        </p>
        <a href="#distributor" class="testimonials__strip-btn">Find Your Distributor</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background: var(--ivory-2);
}

.testimonials__header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-bottom: 4rem;
}

/* Card */
.t-card {
  background: white;
  border: 1px solid rgba(229,221,213,0.8);
  border-radius: 2px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  position: relative;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.t-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(26,25,22,0.07);
}

/* Keith */
.t-card--keith {
  border-color: rgba(78,26,69,0.2);
  background: #FDF9FC;
}

.t-card--keith .t-card__text { color: var(--text); font-weight: 400; }

.t-card__quote-mark {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 4.5rem;
  line-height: 0.75;
  color: var(--gold);
  opacity: 0.3;
  position: absolute;
  top: 1.4rem;
  left: 1.8rem;
}

.t-card__text {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.9;
  color: var(--text-muted);
  padding-top: 1.8rem;
  flex: 1;
}

.t-card__footer {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--border);
}

.t-card__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--sage), var(--sage-light));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 500;
  flex-shrink: 0;
}

.t-card--keith .t-card__avatar {
  background: linear-gradient(135deg, var(--plum-light), var(--plum));
}

.t-card__name {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text);
}

.t-card__meta {
  font-size: 0.7rem;
  letter-spacing: 0.07em;
  color: var(--text-muted);
  margin-top: 0.1rem;
}

/* CTA strip */
.testimonials__cta-strip {
  background: linear-gradient(135deg, var(--forest), var(--forest-mid));
  border-radius: 2px;
  padding: 3rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.testimonials__strip-text {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.65rem;
  font-weight: 300;
  font-style: italic;
  color: rgba(255,255,255,0.88);
  max-width: 460px;
}

.testimonials__strip-btn {
  display: inline-block;
  background: var(--gold);
  color: white;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.95rem 2rem;
  border-radius: 2px;
  white-space: nowrap;
  transition: background 0.2s;
}

.testimonials__strip-btn:hover { background: var(--gold-light); }

@media (max-width: 900px) {
  .testimonials__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .testimonials__grid { grid-template-columns: 1fr; }
  .testimonials__cta-strip { flex-direction: column; text-align: center; }
}
</style>
