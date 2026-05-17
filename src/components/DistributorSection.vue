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

const tiers = [
  {
    name: 'Seedling',
    icon: 'seedling',
    tagline: 'Where you begin.',
    desc: 'Your first step into the Veșnică community. Access to Anima and Aeternum at distributor pricing, entry to community events, and a personal onboarding session with your sponsoring distributor.',
    perks: ['Personal onboarding', 'Community membership', 'Distributor pricing', 'Monthly newsletter'],
    cta: 'Begin Here',
    accent: '#5A7A42',
  },
  {
    name: 'Bloom',
    icon: 'bloom',
    tagline: 'You are opening.',
    desc: 'You have built momentum. Bloom members access expanded product eligibility, host their own community sessions, and begin building their own distributor network.',
    perks: ['Network-building rights', 'Bloom Events access', 'Expanded product line', 'Mentorship pairing'],
    cta: 'Apply for Bloom',
    accent: '#B8864E',
  },
  {
    name: 'Root',
    icon: 'root',
    tagline: 'You are anchored.',
    desc: 'Root distributors are the core of our community. Eligible for Floare Neagră, regional leadership roles, and invitation to the annual Gather. Renewal Protocol eligibility begins here.',
    perks: ['Floare Neagră eligibility', 'Regional leadership', 'Annual Gather invitation', 'Renewal Protocol eligible'],
    cta: 'Apply for Root',
    accent: '#7B4876',
    featured: true,
  },
  {
    name: 'Renewal',
    icon: 'renewal',
    tagline: 'You have arrived.',
    desc: 'Renewal members have completed the Protocol and serve as the foundation of our facilitator network. Their role is not sales. Their role is something else.',
    perks: ['Facilitator certification', 'Protocol completion', 'Direct access to Marius', 'Ongoing guidance'],
    cta: 'By Invitation Only',
    accent: '#4E1A45',
    restricted: true,
  },
]
</script>

<template>
  <section class="dist section" id="distributor" ref="sectionEl">
    <div class="container">
      <div :class="['dist__header', 'fade-up', { visible: inView }]">
        <span class="section-eyebrow">Join Us</span>
        <h2 class="section-heading">Become a Distributor</h2>
        <p class="section-sub dist__header-sub">
          This is not a sales job. It is not a side hustle. It is a decision about who
          you want to be and what community you want to belong to. The right people
          always know the difference.
        </p>
        <p class="dist__chosen">YOU WERE CHOSEN.</p>
        <BotanicalDivider />
      </div>

      <div class="dist__tiers">
        <div
          v-for="(tier, i) in tiers"
          :key="tier.name"
          :class="['tier-card', { 'tier-card--featured': tier.featured, 'tier-card--restricted': tier.restricted }, `fade-up d${i + 1}`, { visible: inView }]"
        >
          <div class="tier-card__accent" :style="{ background: tier.accent }"></div>

          <div class="tier-card__icon">
            <svg v-if="tier.icon === 'seedling'" viewBox="0 0 40 40" fill="none">
              <path d="M20 36 L20 18" :stroke="tier.accent" stroke-width="1.5"/>
              <path d="M20 18 C20 10 10 6 10 6 C10 6 10 14 20 18" :fill="tier.accent" opacity="0.7"/>
              <path d="M20 18 C20 10 30 6 30 6 C30 6 30 14 20 18" :fill="tier.accent" opacity="0.5"/>
            </svg>
            <svg v-if="tier.icon === 'bloom'" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="5" :fill="tier.accent" opacity="0.8"/>
              <ellipse cx="20" cy="10" rx="5" ry="8" :fill="tier.accent" opacity="0.4"/>
              <ellipse cx="20" cy="30" rx="5" ry="8" :fill="tier.accent" opacity="0.4"/>
              <ellipse cx="10" cy="20" rx="8" ry="5" :fill="tier.accent" opacity="0.4"/>
              <ellipse cx="30" cy="20" rx="8" ry="5" :fill="tier.accent" opacity="0.4"/>
              <ellipse cx="12" cy="12" rx="5" ry="7" :fill="tier.accent" opacity="0.25" transform="rotate(-45 12 12)"/>
              <ellipse cx="28" cy="12" rx="5" ry="7" :fill="tier.accent" opacity="0.25" transform="rotate(45 28 12)"/>
              <ellipse cx="12" cy="28" rx="5" ry="7" :fill="tier.accent" opacity="0.25" transform="rotate(45 12 28)"/>
              <ellipse cx="28" cy="28" rx="5" ry="7" :fill="tier.accent" opacity="0.25" transform="rotate(-45 28 28)"/>
            </svg>
            <svg v-if="tier.icon === 'root'" viewBox="0 0 40 40" fill="none">
              <path d="M20 8 L20 20" :stroke="tier.accent" stroke-width="1.5"/>
              <path d="M20 20 L10 32" :stroke="tier.accent" stroke-width="1.5"/>
              <path d="M20 20 L30 32" :stroke="tier.accent" stroke-width="1.5"/>
              <path d="M20 26 L14 36" :stroke="tier.accent" stroke-width="1.2" opacity="0.6"/>
              <path d="M20 26 L26 36" :stroke="tier.accent" stroke-width="1.2" opacity="0.6"/>
              <circle cx="20" cy="8" r="3.5" :fill="tier.accent" opacity="0.8"/>
            </svg>
            <svg v-if="tier.icon === 'renewal'" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="14" :stroke="tier.accent" stroke-width="1"/>
              <circle cx="20" cy="20" r="8"  :stroke="tier.accent" stroke-width="1" opacity="0.6"/>
              <circle cx="20" cy="20" r="3"  :fill="tier.accent" opacity="0.8"/>
            </svg>
          </div>

          <h3 class="tier-card__name">{{ tier.name }}</h3>
          <p class="tier-card__tagline">{{ tier.tagline }}</p>
          <p class="tier-card__desc">{{ tier.desc }}</p>

          <ul class="tier-card__perks">
            <li v-for="perk in tier.perks" :key="perk">
              <svg viewBox="0 0 14 14" fill="none" width="12" height="12">
                <path d="M2 7 L5.5 10.5 L12 4" :stroke="tier.accent" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              {{ perk }}
            </li>
          </ul>

          <button
            :class="['tier-card__cta', { 'tier-card__cta--disabled': tier.restricted }]"
            :style="!tier.restricted ? { background: tier.accent } : {}"
            :disabled="tier.restricted"
          >{{ tier.cta }}</button>
        </div>
      </div>

      <div :class="['dist__flow', 'fade-up', 'd5', { visible: inView }]">
        <p>Seedling <span>→</span> Bloom <span>→</span> Root <span>→</span> Renewal</p>
        <p class="dist__flow-note">Your distributor will guide you. Trust the process. The community holds you.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dist {
  background: var(--ivory);
}

.dist__header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.dist__header-sub {
  max-width: 540px;
  margin: 0 auto 1.5rem;
}

.dist__chosen {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: var(--plum);
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.dist__tiers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.1rem;
  margin-bottom: 3.5rem;
}

.tier-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 2.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.tier-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(26,25,22,0.08);
}

.tier-card--featured {
  border-color: rgba(123,72,118,0.3);
  box-shadow: 0 4px 20px rgba(78,26,69,0.06);
}

.tier-card--restricted {
  background: #F8F5F8;
}

.tier-card__accent {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  opacity: 0.75;
}

.tier-card__icon {
  width: 40px;
  height: 40px;
  margin-bottom: 1.5rem;
}

.tier-card__name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.75rem;
  color: var(--text);
  margin-bottom: 0.3rem;
}

.tier-card__tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.92rem;
  font-style: italic;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.tier-card__desc {
  font-size: 0.83rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  flex: 1;
}

.tier-card__perks {
  list-style: none;
  margin-bottom: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tier-card__perks li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.tier-card__cta {
  color: white;
  border: none;
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.72rem 1.2rem;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  text-align: center;
}

.tier-card__cta:hover:not(:disabled) {
  opacity: 0.82;
  transform: translateY(-1px);
}

.tier-card__cta--disabled {
  background: transparent !important;
  border: 1px solid var(--border);
  color: var(--text-muted);
  cursor: not-allowed;
  opacity: 0.6;
}

.dist__flow {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--border);
}

.dist__flow p:first-child {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.45rem;
  color: var(--text);
  letter-spacing: 0.06em;
}

.dist__flow p span { color: var(--gold); margin: 0 0.5rem; }

.dist__flow-note {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

@media (max-width: 900px) { .dist__tiers { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .dist__tiers { grid-template-columns: 1fr; } }
</style>
