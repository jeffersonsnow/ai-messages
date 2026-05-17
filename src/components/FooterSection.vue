<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer" id="contact">
    <!-- Transition wave from above -->
    <div class="footer__top-wave" aria-hidden="true">
      <svg viewBox="0 0 1200 50" fill="none" preserveAspectRatio="none">
        <path d="M0 50 Q300 0 600 28 Q900 50 1200 12 L1200 0 L0 0Z" fill="#F7F4EF"/>
      </svg>
    </div>

    <div class="footer__main">
      <div class="container footer__main-inner">
        <div class="footer__brand">
          <p class="footer__logo">Veșnică</p>
          <p class="footer__brand-tagline">You were chosen.</p>
          <p class="footer__brand-desc">
            A wellness community for those who are ready. Founded in Rodney, Delaware.
            Growing where it is meant to grow.
          </p>

          <!-- Botanical leaf ornament -->
          <svg class="footer__ornament" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 15 C35 8 25 5 15 10" stroke="rgba(184,134,78,0.35)" stroke-width="1" fill="none"/>
            <path d="M40 15 C35 22 25 22 15 18" stroke="rgba(184,134,78,0.35)" stroke-width="1" fill="none"/>
            <path d="M40 15 C45 8 55 5 65 10" stroke="rgba(184,134,78,0.35)" stroke-width="1" fill="none"/>
            <path d="M40 15 C45 22 55 22 65 18" stroke="rgba(184,134,78,0.35)" stroke-width="1" fill="none"/>
            <ellipse cx="22" cy="9" rx="6" ry="2.5" fill="rgba(184,134,78,0.2)" transform="rotate(-25 22 9)"/>
            <ellipse cx="22" cy="19" rx="6" ry="2.5" fill="rgba(184,134,78,0.2)" transform="rotate(20 22 19)"/>
            <ellipse cx="58" cy="9" rx="6" ry="2.5" fill="rgba(184,134,78,0.2)" transform="rotate(25 58 9)"/>
            <ellipse cx="58" cy="19" rx="6" ry="2.5" fill="rgba(184,134,78,0.2)" transform="rotate(-20 58 19)"/>
            <circle cx="40" cy="15" r="2.5" fill="rgba(184,134,78,0.4)"/>
          </svg>
        </div>

        <div class="footer__links-group">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Veșnică</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#distributor">Become a Distributor</a></li>
            <li><a href="#leaderboard">Circle of Light</a></li>
          </ul>
        </div>

        <div class="footer__links-group">
          <h4>Community</h4>
          <ul>
            <li><a href="#community">Testimonials</a></li>
            <li><a href="#">Regional Events</a></li>
            <li><a href="#">Distributor Login</a></li>
            <li><a href="#">Facilitator Portal</a></li>
          </ul>
        </div>

        <div class="footer__links-group">
          <h4>Contact</h4>
          <address>
            <p>Veșnică Wellness LLC</p>
            <p>4 Rodney Square, Suite 800</p>
            <p>Wilmington, DE 19801</p>
          </address>
          <p class="footer__email">community@vesnicawellness.com</p>
          <div class="footer__social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                <path d="M9 15c.5-1.5 1-3 1-5a2 2 0 1 1 4 0c0 2 .5 4 1 5.5" stroke="currentColor" stroke-width="1.2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">© {{ year }} Veșnică Wellness LLC. All rights reserved.</p>
        <nav class="footer__legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Income Disclosure</a>
          <a href="#">Return Policy</a>
        </nav>
      </div>
      <div class="container">
        <p class="footer__fine-print">
          Veșnică Wellness LLC is a Delaware limited liability company registered under file number 7741882,
          organized on March 3, 2014. These statements have not been evaluated by the Food and Drug Administration.
          Veșnică products are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
          Individual results may vary. The income figures presented herein are not representative of typical Veșnică
          distributor earnings. A significant majority of participants earn little to no income. The Renewal Protocol
          is an experiential program and not a medical treatment. Participation in the Renewal Protocol is voluntary
          and subject to facilitator approval. Veșnică Wellness LLC makes no warranty, express or implied, regarding
          outcomes associated with participation in any tier of its distributor program. All distributor agreements
          are subject to the Veșnică Independent Distributor Policies and Procedures manual, available upon request.
          Veșnică, Anima, Aeternum, Floare Neagră, and Circle of Light are trademarks of Veșnică Wellness LLC.
          Questions regarding this disclaimer may be directed to legal@vesnicawellness.com.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--charcoal);
  color: rgba(255,255,255,0.75);
  position: relative;
}

.footer__top-wave {
  line-height: 0;
  margin-bottom: -2px;
}

.footer__top-wave svg {
  width: 100%;
  height: 52px;
  display: block;
}

.footer__main {
  padding: 5rem 0 4rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.footer__main-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.footer__logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.4rem;
  font-weight: 300;
  color: white;
  letter-spacing: 0.03em;
  margin-bottom: 0.4rem;
}

.footer__brand-tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.95rem;
  font-style: italic;
  color: rgba(255,255,255,0.35);
  margin-bottom: 1.2rem;
}

.footer__brand-desc {
  font-size: 0.84rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.85;
  margin-bottom: 1.5rem;
}

.footer__ornament {
  width: 80px;
  height: 30px;
}

.footer__links-group h4 {
  font-family: 'Inter', sans-serif;
  font-size: 0.63rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.3rem;
}

.footer__links-group ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer__links-group ul a {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.2s;
}

.footer__links-group ul a:hover { color: rgba(255,255,255,0.9); }

.footer__links-group address {
  font-style: normal;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.8;
  margin-bottom: 0.9rem;
}

.footer__email {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
  margin-bottom: 1.3rem;
}

.footer__social {
  display: flex;
  gap: 1rem;
}

.footer__social a {
  color: rgba(255,255,255,0.38);
  transition: color 0.2s;
  line-height: 0;
}

.footer__social a:hover { color: rgba(255,255,255,0.8); }

.footer__bottom {
  padding: 2rem 0 3.5rem;
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer__copy {
  font-size: 0.76rem;
  color: rgba(255,255,255,0.28);
}

.footer__legal-links {
  display: flex;
  gap: 2rem;
}

.footer__legal-links a {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.25);
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.04em;
}

.footer__legal-links a:hover { color: rgba(255,255,255,0.55); }

.footer__fine-print {
  font-size: 0.64rem;
  color: rgba(255,255,255,0.18);
  line-height: 1.75;
  max-width: 900px;
}

@media (max-width: 900px) {
  .footer__main-inner { grid-template-columns: 1fr 1fr; row-gap: 3rem; }
  .footer__bottom-inner { flex-direction: column; align-items: flex-start; }
  .footer__legal-links { flex-wrap: wrap; gap: 1rem; }
}

@media (max-width: 560px) {
  .footer__main-inner { grid-template-columns: 1fr; }
}
</style>
