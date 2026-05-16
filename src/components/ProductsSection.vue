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
    { threshold: 0.08 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section class="products section" id="products" ref="sectionEl">
    <div class="container">
      <div :class="['products__header', 'fade-up', { visible: inView }]">
        <span class="section-eyebrow">The Line</span>
        <h2 class="section-heading">What We Offer</h2>
        <p class="section-sub">
          Each product in the Veșnică line is developed through years of proprietary
          research and formulated for the specific needs of our community.
          Some things take time to earn.
        </p>
        <BotanicalDivider />
      </div>

      <!-- Core product grid (2×2) -->
      <div class="products__grid">
        <!-- Vită -->
        <div :class="['product-card', 'fade-up', 'd1', { visible: inView }]">
          <div class="product-card__visual product-card__visual--vita">
            <div class="vita-capsule">
              <div class="vita-cap vita-cap--top"></div>
              <div class="vita-cap vita-cap--body"></div>
            </div>
            <div class="product-card__glow product-card__glow--warm"></div>
          </div>
          <div class="product-card__body">
            <p class="product-card__tier">Entry · Daily Ritual</p>
            <h3 class="product-card__name">Vită</h3>
            <p class="product-card__sub">Where transformation begins.</p>
            <p class="product-card__desc">
              A comprehensive daily multivitamin formulated with bioavailable micronutrients,
              adaptogenic support, and our proprietary Veșnică Cellular Blend. The foundation
              of every journey. Most distributors start here.
            </p>
            <a href="#distributor" class="product-card__cta">Ask Your Distributor</a>
          </div>
        </div>

        <!-- Sanguis — flagship, slightly too close -->
        <div :class="['product-card', 'product-card--flagship', 'fade-up', 'd2', { visible: inView }]">
          <div class="product-card__visual product-card__visual--sanguis">
            <!-- The image is slightly too close — overflow hidden + scale -->
            <div class="sanguis-frame">
              <div class="sanguis-inner">
                <div class="sanguis-bottle">
                  <div class="sanguis-liquid"></div>
                  <div class="sanguis-label">Sanguis</div>
                  <div class="sanguis-cap"></div>
                </div>
              </div>
            </div>
            <div class="product-card__glow product-card__glow--crimson"></div>
          </div>
          <div class="product-card__body">
            <p class="product-card__tier">Flagship · Circulatory Health</p>
            <h3 class="product-card__name">Sanguis</h3>
            <p class="product-card__sub">Feel the flow.</p>
            <p class="product-card__desc">
              Our most celebrated formula. Sanguis supports iron absorption, circulatory
              vitality, and cellular oxygenation through a patented dual-pathway delivery
              system. The product that changed everything for our community.
              The one they come back for.
            </p>
            <span class="product-card__badge">Community Favorite</span>
            <a href="#distributor" class="product-card__cta">Ask Your Distributor</a>
          </div>
        </div>

        <!-- Floare Neagră — locked -->
        <div :class="['product-card', 'product-card--locked', 'fade-up', 'd3', { visible: inView }]">
          <div class="product-card__visual product-card__visual--negra">
            <div class="negra-bloom">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="22" ry="36" fill="#1A0A17" opacity="0.8" transform="rotate(0 50 50)"/>
                <ellipse cx="50" cy="50" rx="22" ry="36" fill="#1A0A17" opacity="0.6" transform="rotate(45 50 50)"/>
                <ellipse cx="50" cy="50" rx="22" ry="36" fill="#1A0A17" opacity="0.5" transform="rotate(90 50 50)"/>
                <ellipse cx="50" cy="50" rx="22" ry="36" fill="#1A0A17" opacity="0.4" transform="rotate(135 50 50)"/>
                <circle cx="50" cy="50" r="10" fill="#2D0D26"/>
              </svg>
            </div>
            <div class="product-card__lock">
              <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                <rect x="5" y="11" width="14" height="11" rx="2" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/>
              </svg>
              <span>Access Restricted</span>
            </div>
          </div>
          <div class="product-card__body">
            <p class="product-card__tier">Premium · Adaptogen Blend</p>
            <h3 class="product-card__name">Floare Neagră</h3>
            <p class="product-card__sub">For those who have earned it.</p>
            <p class="product-card__desc product-card__desc--blurred">
              Our most advanced adaptogenic formulation. Not available to the general public.
              Distributed exclusively through Root-tier partners and above. Ask about your eligibility.
              <!-- the text below is intentionally cut short -->
              This formula works differently than anything else in the line. When you are ready
            </p>
            <button class="product-card__restricted-btn" disabled>
              <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                <rect x="5" y="11" width="14" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              Speak with a Regional Facilitator
            </button>
          </div>
        </div>

        <!-- Renewal Protocol placeholder card — links to the full section below -->
        <div :class="['product-card', 'product-card--protocol', 'fade-up', 'd4', { visible: inView }]">
          <div class="product-card__visual product-card__visual--protocol">
            <div class="protocol-symbol">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                <circle cx="40" cy="40" r="24" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                <circle cx="40" cy="40" r="5" fill="rgba(255,255,255,0.6)"/>
                <line x1="40" y1="6" x2="40" y2="20" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
                <line x1="40" y1="60" x2="40" y2="74" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
                <line x1="6" y1="40" x2="20" y2="40" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
                <line x1="60" y1="40" x2="74" y2="40" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
              </svg>
            </div>
          </div>
          <div class="product-card__body">
            <p class="product-card__tier">Exclusive · 30-Day Program</p>
            <h3 class="product-card__name">The Renewal Protocol</h3>
            <p class="product-card__sub">For Root tier and above, by invitation.</p>
            <p class="product-card__desc">
              Not a supplement. A thirty-day guided transformation available by invitation only.
              Those who have completed it describe it as the most significant experience of their lives.
            </p>
            <button class="product-card__cta product-card__cta--ghost" @click="renewalOpen = true">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Renewal Protocol expanded modal-style panel -->
      <Transition name="fade-panel">
        <div v-if="renewalOpen" class="renewal-panel">
          <button class="renewal-panel__close" @click="renewalOpen = false" aria-label="Close">×</button>

          <div class="renewal-panel__content">
            <span class="section-eyebrow" style="text-align:center; display:block;">Root Tier &amp; Above · By Invitation Only</span>
            <h2 class="renewal-panel__title">The Renewal Protocol</h2>
            <p class="renewal-panel__subtitle">A thirty-day guided transformation.</p>

            <div class="renewal-panel__body">
              <p>
                The Renewal Protocol is available exclusively to those who have achieved Root tier
                and been personally invited by a certified Veșnică facilitator. It is not purchased.
                It is extended.
              </p>
              <p>
                You will receive your materials by secure courier on the first of the month.
                You will not begin before they arrive.
              </p>
              <p>
                The first phase addresses what you have been carrying. This is expected.
                Many participants describe this phase as uncomfortable.
                That discomfort is the work.
              </p>
              <p>
                The second phase asks you to be still. Most find this the most difficult part.
                You will not rush it. You will not attempt to accelerate it.
              </p>
              <p>
                You will not discuss the content of the third phase with those who have not
                yet completed it. This is not a rule we enforce — it is simply what happens.
              </p>
              <p>
                Those who have completed the Renewal Protocol describe a clarity that does
                not diminish. They describe a sense of placement — of knowing, without question,
                exactly where they belong and why.
              </p>

              <p class="renewal-panel__chosen">You were chosen for this.</p>

              <p class="renewal-panel__contact">
                To inquire about eligibility, speak with your regional facilitator.
              </p>
            </div>

            <!-- Testimonials from completers -->
            <div class="renewal-testimonials">
              <blockquote class="renewal-quote">
                <p>"I completed the Protocol eight months ago. I find it difficult to describe
                the experience in terms that would be useful to someone who hasn't done it.
                I am well. I am exactly where I should be."</p>
                <cite>— L.M., Root, Clayton, DE</cite>
              </blockquote>
              <blockquote class="renewal-quote">
                <p>"The third phase was the most clarifying experience of my life.
                I am grateful every day."</p>
                <cite>— Anonymous, Root, Rodney</cite>
              </blockquote>
              <blockquote class="renewal-quote">
                <p>"I don't think about it the way I used to think about things.
                That's the only way I know how to explain it."</p>
                <cite>— T.A., Root, Middletown, DE</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.products {
  background: #F5F0EB;
}

.products__header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.products__header .section-sub {
  max-width: 540px;
  margin: 0 auto;
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
}

/* ── Product Card base ── */
.product-card {
  background: var(--card);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 40px rgba(78,26,69,0.08);
}

.product-card__visual {
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.product-card__body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-card__tier {
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 0.5rem;
}

.product-card__name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 0.3rem;
}

.product-card__sub {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1rem;
  font-style: italic;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.product-card__desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.85;
  flex: 1;
  margin-bottom: 1.5rem;
}

.product-card__cta {
  display: inline-block;
  background: var(--plum);
  color: white;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 0.7rem 1.6rem;
  border-radius: 2px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;
}

.product-card__cta:hover {
  background: var(--plum-dark);
}

.product-card__cta--ghost {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.5);
  color: white;
}

.product-card__cta--ghost:hover {
  background: rgba(255,255,255,0.1);
}

/* ── Vità visual ── */
.product-card__visual--vita {
  background: linear-gradient(135deg, #F8F4EE 0%, #EDE4D8 100%);
}

.vita-capsule {
  position: relative;
  z-index: 2;
}

.vita-cap {
  width: 52px;
  border-radius: 50px;
}

.vita-cap--top {
  height: 60px;
  background: linear-gradient(135deg, #FAFAF7, #E8E0D4);
  box-shadow: inset -4px -4px 12px rgba(0,0,0,0.06), 2px 2px 8px rgba(0,0,0,0.08);
  border-radius: 26px 26px 0 0;
}

.vita-cap--body {
  height: 75px;
  background: linear-gradient(135deg, #C4954A, #A87A38);
  box-shadow: inset -3px -3px 10px rgba(0,0,0,0.15), 2px 4px 12px rgba(196,149,74,0.25);
  border-radius: 0 0 26px 26px;
}

/* ── Sanguis visual — slightly too close ── */
.product-card__visual--sanguis {
  background: linear-gradient(135deg, #1A0510 0%, #2D0A1A 100%);
}

.sanguis-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sanguis-inner {
  /* The "slightly too close" effect: scaled up beyond container */
  transform: scale(1.14);
  transform-origin: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.sanguis-bottle {
  position: relative;
  width: 58px;
  height: 130px;
  background: linear-gradient(160deg, #8B1A2A, #5C0E1A);
  border-radius: 6px 6px 10px 10px;
  box-shadow: inset -6px 0 18px rgba(0,0,0,0.3), 3px 8px 24px rgba(139,26,42,0.4);
}

.sanguis-liquid {
  position: absolute;
  bottom: 8px;
  left: 6px;
  right: 6px;
  height: 80px;
  background: linear-gradient(180deg, rgba(180,20,40,0.6) 0%, rgba(140,10,30,0.9) 100%);
  border-radius: 0 0 6px 6px;
}

.sanguis-liquid::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 4px;
  width: 6px;
  height: 35px;
  background: rgba(255,120,100,0.2);
  border-radius: 3px;
  transform: rotate(-5deg);
}

.sanguis-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  white-space: nowrap;
}

.sanguis-cap {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 34px;
  height: 16px;
  background: linear-gradient(135deg, #4A0A14, #2D0508);
  border-radius: 4px 4px 0 0;
}

/* ── Floare Neagră visual — locked ── */
.product-card--locked {
  opacity: 0.88;
}

.product-card__visual--negra {
  background: linear-gradient(135deg, #0D0710 0%, #1A0A20 100%);
}

.negra-bloom {
  width: 90px;
  height: 90px;
  position: relative;
  z-index: 2;
}

.negra-bloom svg {
  filter: drop-shadow(0 0 18px rgba(78,26,69,0.6));
}

.product-card__lock {
  position: absolute;
  inset: 0;
  background: rgba(13,7,16,0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: rgba(255,255,255,0.65);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  backdrop-filter: blur(2px);
}

.product-card__desc--blurred {
  position: relative;
  overflow: hidden;
}

.product-card__desc--blurred::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(transparent, var(--card));
}

.product-card__restricted-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.6rem 1.2rem;
  border-radius: 2px;
  cursor: not-allowed;
  opacity: 0.6;
}

/* ── Renewal Protocol card ── */
.product-card--protocol {
  background: var(--plum);
  border-color: var(--plum-dark);
}

.product-card--protocol .product-card__tier {
  color: var(--amber-light);
}

.product-card--protocol .product-card__name {
  color: white;
}

.product-card--protocol .product-card__sub {
  color: rgba(255,255,255,0.65);
}

.product-card--protocol .product-card__desc {
  color: rgba(255,255,255,0.6);
}

.product-card--protocol:hover {
  box-shadow: 0 16px 40px rgba(78,26,69,0.25);
}

.product-card__visual--protocol {
  background: linear-gradient(135deg, #38112F 0%, #2A0B24 100%);
  height: 230px;
}

.protocol-symbol {
  opacity: 0.85;
}

/* ── Glow effects ── */
.product-card__glow {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
}

.product-card__glow--warm {
  background: rgba(196,149,74,0.25);
  bottom: -20px;
  right: -20px;
}

.product-card__glow--crimson {
  background: rgba(180,20,40,0.35);
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
}

/* ── Flagship badge ── */
.product-card--flagship {
  border-color: rgba(196,149,74,0.4);
}

.product-card__badge {
  display: inline-block;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber);
  border: 1px solid var(--amber-light);
  padding: 0.25rem 0.7rem;
  border-radius: 2px;
  margin-bottom: 1rem;
}

/* ── Renewal Panel (expanded) ── */
.renewal-panel {
  position: fixed;
  inset: 0;
  background: rgba(10, 4, 9, 0.92);
  z-index: 300;
  overflow-y: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 2rem;
  backdrop-filter: blur(4px);
}

.renewal-panel__close {
  position: fixed;
  top: 2rem;
  right: 2.5rem;
  background: none;
  border: none;
  color: rgba(255,255,255,0.5);
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
  z-index: 310;
}

.renewal-panel__close:hover { color: white; }

.renewal-panel__content {
  max-width: 680px;
  width: 100%;
  color: rgba(255,255,255,0.85);
}

.renewal-panel__title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 300;
  color: white;
  text-align: center;
  margin-bottom: 0.6rem;
  margin-top: 1rem;
}

.renewal-panel__subtitle {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-style: italic;
  color: rgba(255,255,255,0.55);
  text-align: center;
  margin-bottom: 3rem;
}

.renewal-panel__body p {
  font-size: 0.97rem;
  font-weight: 300;
  line-height: 1.95;
  color: rgba(255,255,255,0.75);
  margin-bottom: 1.4rem;
}

.renewal-panel__chosen {
  font-family: 'Cormorant Garamond', Georgia, serif !important;
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  color: white !important;
  text-align: center;
  letter-spacing: 0.04em;
  margin: 2.5rem 0 1rem !important;
}

.renewal-panel__contact {
  font-size: 0.8rem !important;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.35) !important;
  text-align: center;
  margin-bottom: 3rem !important;
}

.renewal-testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.renewal-quote {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 2px;
  padding: 1.5rem;
}

.renewal-quote p {
  font-size: 0.88rem;
  font-style: italic;
  color: rgba(255,255,255,0.65);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.renewal-quote cite {
  font-size: 0.7rem;
  font-style: normal;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
}

/* Transition */
.fade-panel-enter-active, .fade-panel-leave-active {
  transition: opacity 0.3s ease;
}
.fade-panel-enter-from, .fade-panel-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .products__grid { grid-template-columns: 1fr; }
  .renewal-testimonials { grid-template-columns: 1fr; }
}
</style>
