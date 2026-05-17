<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BotanicalDivider from './BotanicalDivider.vue'

const sectionEl = ref(null)
const inView = ref(false)
const renewalOpen = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { inView.value = true; observer.disconnect() } },
    { threshold: 0.06 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section class="products" id="products" ref="sectionEl">

    <!-- Section header on dark background -->
    <div class="products__intro">
      <div class="container">
        <div :class="['products__header', 'fade-up', { visible: inView }]">
          <span class="section-eyebrow">The Line</span>
          <h2 class="section-heading section-heading--light">What We Offer</h2>
          <p class="section-sub section-sub--light" style="max-width:520px; margin:0 auto;">
            Each product in the Veșnică line is developed through years of proprietary
            research and formulated for the specific needs of our community.
            Some things take time to earn.
          </p>
        </div>
      </div>
    </div>

    <!-- ── Core products (Anima + Aeternum) ── -->
    <div class="products__showcase">
      <div class="container">
        <div class="products__pair">

          <!-- ANIMA -->
          <div :class="['product-card', 'fade-up', 'd1', { visible: inView }]">
            <figure class="product-card__photo product-card__photo--anima">
              <!-- Drop anima.jpg into your /public/ folder -->
              <img :src="'/anima.jpg'" alt="Anima — Mind. Body. Soul." />
              <div class="product-card__photo-fallback product-card__photo-fallback--anima" aria-hidden="true">
                <div class="anima-bottle">
                  <div class="anima-band"></div>
                  <div class="anima-label">
                    <span class="anima-name">anima</span>
                    <span class="anima-tagline">MIND. BODY. SOUL.</span>
                  </div>
                  <svg class="anima-leaf" viewBox="0 0 60 90" fill="none">
                    <path d="M30 85 C30 60 10 45 10 20 C10 5 30 0 30 0 C30 0 50 5 50 20 C50 45 30 60 30 85Z"
                          fill="none" stroke="#8A4ABB" stroke-width="1.2" opacity="0.7"/>
                    <path d="M30 75 C30 55 15 42 18 25" stroke="#8A4ABB" stroke-width="0.8" opacity="0.5"/>
                  </svg>
                  <div class="anima-capsules">
                    <span class="capsule"></span><span class="capsule"></span>
                    <span class="capsule"></span><span class="capsule capsule--lone"></span>
                  </div>
                </div>
              </div>
              <div class="product-card__photo-overlay product-card__photo-overlay--anima"></div>
            </figure>

            <div class="product-card__body">
              <p class="product-card__tier">Daily Supplement · 60 Capsules</p>
              <h3 class="product-card__name">Anima</h3>
              <p class="product-card__tagline">Where transformation begins.</p>
              <p class="product-card__desc">
                Mind. Body. Soul. Anima is our foundational daily formulation — a
                bioavailable blend supporting mental clarity, emotional balance, and
                sustained energy. The first step on every Veșnică journey.
                Most distributors start here.
              </p>
              <ul class="product-card__claims">
                <li><span class="claim-dot claim-dot--violet"></span>Mental Clarity</li>
                <li><span class="claim-dot claim-dot--violet"></span>Emotional Balance</li>
                <li><span class="claim-dot claim-dot--violet"></span>Stress Support</li>
                <li><span class="claim-dot claim-dot--violet"></span>Energy &amp; Vitality</li>
              </ul>
              <a href="#distributor" class="product-card__cta product-card__cta--violet">
                Ask Your Distributor
              </a>
            </div>
          </div>

          <!-- AETERNUM (flagship — slightly too close) -->
          <div :class="['product-card', 'product-card--flagship', 'fade-up', 'd2', { visible: inView }]">
            <figure class="product-card__photo product-card__photo--aeternum">
              <!-- Drop aeternum.jpg into your /public/ folder -->
              <img class="product-card__photo-img--zoomed" :src="'/aeternum.jpg'" alt="Aeternum — Daily Wellness Support" />
              <div class="product-card__photo-fallback product-card__photo-fallback--aeternum" aria-hidden="true">
                <div class="aeternum-bottle">
                  <div class="aeternum-band"></div>
                  <div class="aeternum-label">
                    <span class="aeternum-name">aeternum</span>
                    <span class="aeternum-tagline">DAILY WELLNESS SUPPORT</span>
                  </div>
                  <svg class="aeternum-leaf" viewBox="0 0 60 100" fill="none">
                    <path d="M30 95 C30 65 8 50 8 22 C8 5 30 0 30 0 C30 0 52 5 52 22 C52 50 30 65 30 95Z"
                          fill="none" stroke="#C04040" stroke-width="1.2" opacity="0.7"/>
                    <path d="M30 80 C30 58 12 44 16 25" stroke="#C04040" stroke-width="0.8" opacity="0.5"/>
                    <path d="M30 80 C30 60 48 48 44 30" stroke="#C04040" stroke-width="0.8" opacity="0.4"/>
                  </svg>
                </div>
              </div>
              <div class="product-card__photo-overlay product-card__photo-overlay--aeternum"></div>
              <span class="product-card__badge">Community Favorite</span>
            </figure>

            <div class="product-card__body">
              <p class="product-card__tier">Flagship Powder · 30 Servings · 9.2 oz</p>
              <h3 class="product-card__name">Aeternum</h3>
              <p class="product-card__tagline">Feel the flow.</p>
              <p class="product-card__desc">
                Our most celebrated formula. Aeternum supports immune resilience, digestive
                harmony, and whole-body vitality through a patented dual-pathway delivery system.
                The product that changed everything for our community. The one they come back for.
              </p>
              <ul class="product-card__claims">
                <li><span class="claim-dot claim-dot--crimson"></span>Energy &amp; Vitality</li>
                <li><span class="claim-dot claim-dot--crimson"></span>Immune Support</li>
                <li><span class="claim-dot claim-dot--crimson"></span>Digestive Balance</li>
                <li><span class="claim-dot claim-dot--crimson"></span>Stress Support</li>
              </ul>
              <a href="#distributor" class="product-card__cta product-card__cta--crimson">
                Ask Your Distributor
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- ── Locked product + Renewal Protocol row ── -->
    <div class="products__restricted">
      <div class="container">
        <div class="products__restricted-grid">

          <!-- Floare Neagră — locked -->
          <div :class="['restricted-card', 'fade-up', 'd3', { visible: inView }]">
            <div class="restricted-card__visual">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="negra-bloom">
                <ellipse cx="50" cy="50" rx="22" ry="38" fill="#18080F" opacity="0.85" transform="rotate(0 50 50)"/>
                <ellipse cx="50" cy="50" rx="22" ry="38" fill="#18080F" opacity="0.65" transform="rotate(45 50 50)"/>
                <ellipse cx="50" cy="50" rx="22" ry="38" fill="#18080F" opacity="0.55" transform="rotate(90 50 50)"/>
                <ellipse cx="50" cy="50" rx="22" ry="38" fill="#18080F" opacity="0.45" transform="rotate(135 50 50)"/>
                <circle cx="50" cy="50" r="9" fill="#240D1A"/>
              </svg>
              <div class="restricted-card__lock">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <rect x="5" y="11" width="14" height="11" rx="2" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
                </svg>
                <span>Access Restricted</span>
              </div>
            </div>
            <div class="restricted-card__body">
              <p class="restricted-card__tier">Premium · Adaptogen Blend</p>
              <h3 class="restricted-card__name">Floare Neagră</h3>
              <p class="restricted-card__tagline">For those who have earned it.</p>
              <p class="restricted-card__desc">
                Our most advanced adaptogenic formulation. Not available to the general public.
                Distributed exclusively through Root-tier partners and above.
                When you are ready
              </p>
              <button class="restricted-card__btn" disabled>
                <svg viewBox="0 0 24 24" fill="none" width="13" height="13">
                  <rect x="5" y="11" width="14" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                Speak with a Regional Facilitator
              </button>
            </div>
          </div>

          <!-- Renewal Protocol -->
          <div :class="['restricted-card', 'restricted-card--protocol', 'fade-up', 'd4', { visible: inView }]">
            <div class="restricted-card__visual restricted-card__visual--protocol">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="34" stroke="rgba(184,134,78,0.2)" stroke-width="1"/>
                <circle cx="40" cy="40" r="24" stroke="rgba(184,134,78,0.35)" stroke-width="1"/>
                <circle cx="40" cy="40" r="5" fill="rgba(184,134,78,0.7)"/>
                <line x1="40" y1="6" x2="40" y2="20" stroke="rgba(184,134,78,0.4)" stroke-width="1"/>
                <line x1="40" y1="60" x2="40" y2="74" stroke="rgba(184,134,78,0.4)" stroke-width="1"/>
                <line x1="6" y1="40" x2="20" y2="40" stroke="rgba(184,134,78,0.4)" stroke-width="1"/>
                <line x1="60" y1="40" x2="74" y2="40" stroke="rgba(184,134,78,0.4)" stroke-width="1"/>
              </svg>
            </div>
            <div class="restricted-card__body restricted-card__body--protocol">
              <p class="restricted-card__tier" style="color: var(--gold-light);">Exclusive · 30-Day Program</p>
              <h3 class="restricted-card__name" style="color:white;">The Renewal Protocol</h3>
              <p class="restricted-card__tagline" style="color:rgba(255,255,255,0.55);">For Root tier and above, by invitation.</p>
              <p class="restricted-card__desc" style="color:rgba(255,255,255,0.55);">
                Not a supplement. A thirty-day guided transformation available by invitation only.
                Those who have completed it describe it as the most significant experience of their lives.
              </p>
              <button class="restricted-card__btn restricted-card__btn--protocol" @click="renewalOpen = true">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- ── Renewal Protocol modal ── -->
    <Transition name="fade-panel">
      <div v-if="renewalOpen" class="renewal-panel">
        <button class="renewal-panel__close" @click="renewalOpen = false" aria-label="Close">×</button>
        <div class="renewal-panel__content">
          <span class="section-eyebrow" style="text-align:center;display:block;">Root Tier &amp; Above · By Invitation Only</span>
          <h2 class="renewal-panel__title">The Renewal Protocol</h2>
          <p class="renewal-panel__subtitle">A thirty-day guided transformation.</p>

          <div class="renewal-panel__body">
            <p>The Renewal Protocol is available exclusively to those who have achieved Root tier and been personally invited by a certified Veșnică facilitator. It is not purchased. It is extended.</p>
            <p>You will receive your materials by secure courier on the first of the month. You will not begin before they arrive.</p>
            <p>The first phase addresses what you have been carrying. This is expected. Many participants describe this phase as uncomfortable. That discomfort is the work.</p>
            <p>The second phase asks you to be still. Most find this the most difficult part. You will not rush it. You will not attempt to accelerate it.</p>
            <p>You will not discuss the content of the third phase with those who have not yet completed it. This is not a rule we enforce — it is simply what happens.</p>
            <p>Those who have completed the Renewal Protocol describe a clarity that does not diminish. They describe a sense of placement — of knowing, without question, exactly where they belong and why.</p>
            <p class="renewal-panel__chosen">You were chosen for this.</p>
            <p class="renewal-panel__contact">To inquire about eligibility, speak with your regional facilitator.</p>
          </div>

          <div class="renewal-testimonials">
            <blockquote class="renewal-quote">
              <p>"I completed the Protocol eight months ago. I find it difficult to describe the experience in terms that would be useful to someone who hasn't done it. I am well. I am exactly where I should be."</p>
              <cite>— L.M., Root, Clayton, DE</cite>
            </blockquote>
            <blockquote class="renewal-quote">
              <p>"The third phase was the most clarifying experience of my life. I am grateful every day."</p>
              <cite>— Anonymous, Root, Rodney</cite>
            </blockquote>
            <blockquote class="renewal-quote">
              <p>"I don't think about it the way I used to think about things. That's the only way I know how to explain it."</p>
              <cite>— T.A., Root, Middletown, DE</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* ── Section shell (dark throughout) ── */
.products {
  background: var(--charcoal);
  position: relative;
}

.products__intro {
  padding: 8rem 0 5rem;
  text-align: center;
}

/* ── SHOWCASE — the two main products ── */
.products__showcase {
  padding: 0 0 6rem;
}

.products__pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px; /* hairline gap between cards */
}

/* ── Product card ── */
.product-card {
  background: #111009;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.4s ease;
}

.product-card:hover {
  transform: scale(1.005);
  z-index: 2;
}

/* Photo area */
.product-card__photo {
  position: relative;
  height: 400px;
  overflow: hidden;
  margin: 0;
}

.product-card__photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
  /* Hide if fails to load — fallback shows instead */
}

.product-card:hover .product-card__photo img {
  transform: scale(1.04);
}

/* Aeternum: slightly too close */
.product-card--flagship .product-card__photo img {
  transform: scale(1.13);
  object-position: center 30%;
}
.product-card--flagship:hover .product-card__photo img {
  transform: scale(1.17);
}

/* CSS fallback (shows only when img fails to load) */
.product-card__photo-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.product-card__photo-fallback--anima {
  background: radial-gradient(ellipse at 50% 30%, #1A0A28 0%, #0D0616 100%);
}

.product-card__photo-fallback--aeternum {
  background: radial-gradient(ellipse at 50% 30%, #200808 0%, #0D0404 100%);
}

/* If real image loads, hide the fallback */
.product-card__photo img:not([src=""]):not([src]) ~ .product-card__photo-fallback,
.product-card__photo img[complete] ~ .product-card__photo-fallback { display: none; }

.product-card__photo-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 55%;
  z-index: 2;
  pointer-events: none;
}

.product-card__photo-overlay--anima {
  background: linear-gradient(transparent, rgba(10,4,20,0.92));
}

.product-card__photo-overlay--aeternum {
  background: linear-gradient(transparent, rgba(12,4,4,0.92));
}

/* Community Favorite badge */
.product-card__badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid rgba(184,134,78,0.4);
  padding: 0.24rem 0.7rem;
  border-radius: 2px;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
}

/* Card body */
.product-card__body {
  padding: 2.2rem 2.5rem 2.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.product-card__tier {
  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.6rem;
}

.product-card__name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  margin-bottom: 0.3rem;
}

.product-card__tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.05rem;
  font-style: italic;
  color: rgba(255,255,255,0.45);
  margin-bottom: 1.2rem;
}

.product-card__desc {
  font-size: 0.88rem;
  font-weight: 300;
  color: rgba(255,255,255,0.55);
  line-height: 1.9;
  margin-bottom: 1.6rem;
  flex: 1;
}

/* Benefit claims */
.product-card__claims {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1.5rem;
  margin-bottom: 2rem;
}

.product-card__claims li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.04em;
}

.claim-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.claim-dot--violet  { background: var(--violet-mid); }
.claim-dot--crimson { background: var(--crimson-mid); }

/* CTA buttons */
.product-card__cta {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.85rem 2rem;
  border-radius: 2px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.2s, transform 0.2s;
}

.product-card__cta--violet {
  background: var(--violet);
  color: white;
}

.product-card__cta--crimson {
  background: var(--crimson);
  color: white;
}

.product-card__cta:hover {
  opacity: 0.82;
  transform: translateY(-2px);
}

/* ── CSS fallback bottle — Anima ── */
.anima-bottle {
  position: relative;
  width: 80px;
  height: 140px;
  background: linear-gradient(160deg, #1C1C1C, #0A0A0A);
  border-radius: 10px 10px 14px 14px;
  box-shadow: inset -6px 0 20px rgba(0,0,0,0.4), 4px 12px 30px rgba(90,26,140,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.anima-band {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 8px;
  background: linear-gradient(90deg, #5C1A8C, #8A4ABB);
}

.anima-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  z-index: 2;
}

.anima-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.85);
}

.anima-tagline {
  font-size: 0.32rem;
  letter-spacing: 0.15em;
  color: rgba(138,74,187,0.8);
  text-transform: uppercase;
}

.anima-leaf {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 35px;
  opacity: 0.7;
}

.anima-capsules {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  width: 80px;
  justify-content: center;
}

.capsule {
  display: block;
  width: 22px;
  height: 9px;
  background: linear-gradient(135deg, #7B3ABB, #5C1A8C);
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(90,26,140,0.4);
}

.capsule--lone {
  margin-top: 3px;
  margin-left: 10px;
}

/* ── CSS fallback bottle — Aeternum ── */
.aeternum-bottle {
  position: relative;
  width: 90px;
  height: 130px;
  background: linear-gradient(160deg, #1A1A1A, #080808);
  border-radius: 6px 6px 10px 10px;
  box-shadow: inset -6px 0 20px rgba(0,0,0,0.4), 4px 12px 30px rgba(140,26,26,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.aeternum-band {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 8px;
  background: linear-gradient(90deg, #8C1A1A, #C04040);
}

.aeternum-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  z-index: 2;
}

.aeternum-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.88rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.85);
}

.aeternum-tagline {
  font-size: 0.3rem;
  letter-spacing: 0.14em;
  color: rgba(192,64,64,0.8);
  text-transform: uppercase;
  text-align: center;
}

.aeternum-leaf {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 40px;
  opacity: 0.7;
}

/* ── RESTRICTED PRODUCTS row ── */
.products__restricted {
  background: #0F0E0B;
  padding: 5rem 0 8rem;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.products__restricted-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.restricted-card {
  background: #161412;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  gap: 0;
  flex-direction: row;
  transition: border-color 0.3s;
}

.restricted-card:hover {
  border-color: rgba(255,255,255,0.14);
}

.restricted-card--protocol {
  background: #1A1208;
  border-color: rgba(184,134,78,0.2);
}

.restricted-card--protocol:hover {
  border-color: rgba(184,134,78,0.4);
}

.restricted-card__visual {
  width: 160px;
  flex-shrink: 0;
  background: #0D0B0A;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.restricted-card__visual--protocol {
  background: linear-gradient(135deg, #1A1208, #0E0C06);
}

.negra-bloom {
  width: 85px;
  height: 85px;
  filter: drop-shadow(0 0 16px rgba(78,26,69,0.5));
}

.restricted-card__lock {
  position: absolute;
  inset: 0;
  background: rgba(10,8,8,0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.45);
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  backdrop-filter: blur(2px);
}

.restricted-card__body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.4rem;
}

.restricted-card__tier {
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
}

.restricted-card__name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.7rem;
  font-weight: 400;
  color: rgba(255,255,255,0.85);
}

.restricted-card__tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.9rem;
  font-style: italic;
  color: rgba(255,255,255,0.4);
  margin-bottom: 0.4rem;
}

.restricted-card__desc {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.4);
  line-height: 1.8;
  flex: 1;
  /* fade out bottom — for Floare Neagra */
  -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}

.restricted-card__body--protocol .restricted-card__desc {
  -webkit-mask-image: none;
  mask-image: none;
}

.restricted-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.4);
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.55rem 1.1rem;
  border-radius: 2px;
  cursor: not-allowed;
  margin-top: 0.8rem;
  align-self: flex-start;
}

.restricted-card__btn--protocol {
  cursor: pointer;
  color: var(--gold);
  border-color: rgba(184,134,78,0.4);
  transition: border-color 0.2s, color 0.2s;
}

.restricted-card__btn--protocol:hover {
  border-color: var(--gold);
  color: var(--gold-light);
}

/* ── Renewal modal ── */
.renewal-panel {
  position: fixed;
  inset: 0;
  background: rgba(8,6,4,0.95);
  z-index: 300;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 2rem;
  backdrop-filter: blur(6px);
}

.renewal-panel__close {
  position: fixed;
  top: 2rem; right: 2.5rem;
  background: none; border: none;
  color: rgba(255,255,255,0.4);
  font-size: 2.2rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
  z-index: 310;
}
.renewal-panel__close:hover { color: white; }

.renewal-panel__content {
  max-width: 680px;
  width: 100%;
  color: rgba(255,255,255,0.8);
}

.renewal-panel__title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 300;
  color: white;
  text-align: center;
  margin: 1rem 0 0.6rem;
}

.renewal-panel__subtitle {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-style: italic;
  color: rgba(255,255,255,0.45);
  text-align: center;
  margin-bottom: 3rem;
}

.renewal-panel__body p {
  font-size: 0.96rem;
  font-weight: 300;
  line-height: 1.95;
  color: rgba(255,255,255,0.7);
  margin-bottom: 1.4rem;
}

.renewal-panel__chosen {
  font-family: 'Cormorant Garamond', Georgia, serif !important;
  font-size: 1.65rem !important;
  font-weight: 700 !important;
  color: white !important;
  text-align: center;
  letter-spacing: 0.04em;
  margin: 2.5rem 0 1rem !important;
}

.renewal-panel__contact {
  font-size: 0.78rem !important;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.3) !important;
  text-align: center;
  margin-bottom: 3rem !important;
}

.renewal-testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.renewal-quote {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 2px;
  padding: 1.5rem;
}

.renewal-quote p {
  font-size: 0.86rem;
  font-style: italic;
  color: rgba(255,255,255,0.6);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.renewal-quote cite {
  font-size: 0.68rem;
  font-style: normal;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
}

.fade-panel-enter-active, .fade-panel-leave-active { transition: opacity 0.3s ease; }
.fade-panel-enter-from, .fade-panel-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .products__pair { grid-template-columns: 1fr; }
  .products__restricted-grid { grid-template-columns: 1fr; }
  .restricted-card { flex-direction: column; }
  .restricted-card__visual { width: 100%; height: 140px; }
  .renewal-testimonials { grid-template-columns: 1fr; }
}
</style>
