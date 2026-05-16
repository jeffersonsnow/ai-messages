<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BotanicalDivider from './BotanicalDivider.vue'

const sectionEl = ref(null)
const inView = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { inView.value = true; observer.disconnect() } },
    { threshold: 0.06 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
onUnmounted(() => observer?.disconnect())

const distributors = [
  {
    rank: 1,
    name: 'Sandra Veil',
    region: 'Rodney, DE',
    tier: 'Root',
    gold: true,
    consecutive: 14,
    note: null,
    emeritus: false,
  },
  { rank: 2, name: 'Therese Aldock', region: 'Middletown, DE', tier: 'Root', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 3, name: 'Margaret Fuentes', region: 'Smyrna, DE', tier: 'Root', gold: false, consecutive: null, note: null, emeritus: false },
  {
    rank: 4,
    name: 'Carol Winthrop',
    region: 'Odessa, DE',
    tier: 'Bloom',
    gold: false,
    consecutive: null,
    note: 'We are so proud of her journey.',
    emeritus: false,
  },
  { rank: 5, name: 'Diane Prescott', region: 'Newark, DE', tier: 'Bloom', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 6, name: 'James Holt', region: 'Clayton, DE', tier: 'Bloom', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 7, name: 'Patricia Holloway', region: 'Townsend, DE', tier: 'Root', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 8, name: 'Susan Mallory', region: 'Milford, DE', tier: 'Bloom', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 9, name: 'T. Okafor', region: 'Middletown, DE', tier: 'Root', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 10, name: 'Amber Crisp', region: 'Dover, DE', tier: 'Seedling', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 11, name: 'Robert Vann', region: 'Rodney, DE', tier: 'Seedling', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 12, name: 'Cheryl Banes', region: 'Smyrna, DE', tier: 'Bloom', gold: false, consecutive: null, note: null, emeritus: false },
  { rank: 13, name: 'Linda Farris', region: 'Clayton, DE', tier: 'Seedling', gold: false, consecutive: null, note: null, emeritus: false },
  {
    rank: 14,
    name: 'M. Parish',
    region: 'Rodney, DE',
    tier: 'Emeritus — Renewal Complete',
    gold: false,
    consecutive: null,
    note: null,
    emeritus: true,
  },
  { rank: 15, name: 'Raymond Chu', region: 'Newark, DE', tier: 'Seedling', gold: false, consecutive: null, note: null, emeritus: false },
]

const tierColor = (tier) => {
  if (tier === 'Root') return '#7B4876'
  if (tier === 'Bloom') return '#C4954A'
  if (tier === 'Seedling') return '#8A9B72'
  return '#4E1A45'
}
</script>

<template>
  <section class="leaderboard section" id="leaderboard" ref="sectionEl">
    <div class="container">
      <div :class="['leaderboard__header', 'fade-up', { visible: inView }]">
        <span class="section-eyebrow">Recognition</span>
        <h2 class="section-heading">Circle of Light</h2>
        <p class="leaderboard__updated">Updated Monthly · {{ new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }) }}</p>
        <p class="section-sub" style="max-width:520px; margin:0 auto 1.5rem;">
          This is not a competition. It is a celebration. These are the people who showed up —
          for themselves, for each other, for the work. We honor them.
        </p>
        <BotanicalDivider />
      </div>

      <div :class="['leaderboard__wall', 'fade-up', 'd1', { visible: inView }]">
        <div
          v-for="d in distributors"
          :key="d.rank"
          :class="['lb-entry', { 'lb-entry--top': d.rank === 1, 'lb-entry--emeritus': d.emeritus }]"
        >
          <div class="lb-entry__rank">
            <span class="lb-rank-num">{{ d.rank }}</span>
          </div>

          <div class="lb-entry__body">
            <div class="lb-entry__main">
              <span class="lb-entry__name">
                {{ d.name }}
                <span v-if="d.gold" class="lb-entry__star" title="14 consecutive months">★</span>
              </span>
              <span class="lb-entry__region">{{ d.region }}</span>
            </div>

            <div class="lb-entry__meta">
              <span
                class="lb-entry__tier"
                :class="{ 'lb-entry__tier--emeritus': d.emeritus }"
                :style="d.emeritus ? {} : { color: tierColor(d.tier), borderColor: tierColor(d.tier) + '55' }"
              >{{ d.tier }}</span>
              <span v-if="d.consecutive" class="lb-entry__streak">
                {{ d.consecutive }} consecutive months
              </span>
            </div>

            <!-- The past-tense note — no context, past tense, italics -->
            <p v-if="d.note" class="lb-entry__note">{{ d.note }}</p>
          </div>
        </div>
      </div>

      <div :class="['leaderboard__footer-note', 'fade-up', 'd2', { visible: inView }]">
        <p>
          The Circle of Light recognizes our community's most committed members. Rankings reflect
          community engagement, distributor growth, and program participation — not sales volume.
          We believe in the whole person, not the number.
        </p>
        <p>
          To nominate a community member for recognition, contact your regional facilitator.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.leaderboard {
  background: var(--cream);
}

.leaderboard__header {
  text-align: center;
  margin-bottom: 4rem;
}

.leaderboard__updated {
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

/* ── Honor Wall ── */
.leaderboard__wall {
  max-width: 780px;
  margin: 0 auto 3.5rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 3px;
  overflow: hidden;
}

.lb-entry {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.2rem 2rem;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}

.lb-entry:last-child {
  border-bottom: none;
}

.lb-entry:hover {
  background: #FDFAF8;
}

/* #1 entry — special */
.lb-entry--top {
  background: linear-gradient(135deg, #FBF6EE 0%, #F8F2E8 100%);
  border-left: 3px solid var(--amber);
}

.lb-entry--top:hover {
  background: linear-gradient(135deg, #F8F2E4 0%, #F4EDE0 100%);
}

/* Emeritus entry */
.lb-entry--emeritus {
  opacity: 0.72;
}

.lb-entry--emeritus .lb-entry__name {
  color: var(--text-muted);
}

.lb-entry__rank {
  flex-shrink: 0;
  width: 2.8rem;
  display: flex;
  justify-content: flex-end;
  padding-top: 0.15rem;
}

.lb-rank-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-muted);
}

.lb-entry--top .lb-rank-num {
  color: var(--amber);
  font-size: 1.3rem;
}

.lb-entry__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.lb-entry__main {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.lb-entry__name {
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text);
}

.lb-entry--top .lb-entry__name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
}

.lb-entry__star {
  color: var(--amber);
  font-size: 0.9rem;
  margin-left: 0.2rem;
}

.lb-entry__region {
  font-size: 0.76rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.lb-entry__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.lb-entry__tier {
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid;
  padding: 0.18rem 0.6rem;
  border-radius: 2px;
}

.lb-entry__tier--emeritus {
  color: var(--text-muted);
  border-color: var(--border);
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0.06em;
}

.lb-entry__streak {
  font-size: 0.7rem;
  color: var(--amber);
  letter-spacing: 0.06em;
}

/* The past-tense note — no further context */
.lb-entry__note {
  font-size: 0.78rem;
  font-style: italic;
  color: var(--text-muted);
  margin-top: 0.1rem;
}

/* Footer note */
.leaderboard__footer-note {
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
}

.leaderboard__footer-note p {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 0.8rem;
}

@media (max-width: 600px) {
  .lb-entry {
    padding: 1rem 1.2rem;
    gap: 1rem;
  }
  .lb-entry__main { gap: 0.5rem; }
}
</style>
