<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer" id="contact">
    <div class="footer__top">
      <div class="container footer__top-inner">
        <div class="footer__brand">
          <p class="footer__logo">Veșnică</p>
          <p class="footer__brand-tagline">You were chosen.</p>
          <p class="footer__brand-desc">
            A wellness community for those who are ready. Founded in Rodney, Delaware.
            Growing where it is meant to grow.
          </p>
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.15 1.22-5.15s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.49-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.27-1.95 3.27-4.77 0-2.49-1.79-4.24-4.35-4.24-2.96 0-4.7 2.22-4.7 4.52 0 .9.35 1.86.78 2.38.09.1.1.2.07.3-.08.32-.25 1.04-.29 1.18-.05.19-.16.23-.38.14-1.39-.65-2.26-2.68-2.26-4.32 0-3.51 2.55-6.74 7.35-6.74 3.86 0 6.86 2.75 6.86 6.42 0 3.83-2.41 6.91-5.76 6.91-1.13 0-2.19-.59-2.55-1.28l-.69 2.6c-.25.97-.93 2.18-1.39 2.92.04.01.08.02.13.02C17.52 22 22 17.52 22 12S17.52 2 12 2z" stroke="currentColor" stroke-width="0" fill="currentColor" opacity="0.8"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">
          © {{ year }} Veșnică Wellness LLC. All rights reserved.
        </p>
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
          Veșnică, Vită, Sanguis, Floare Neagră, and Circle of Light are trademarks of Veșnică Wellness LLC.
          Questions regarding this disclaimer may be directed to legal@vesnicawellness.com.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--plum-dark);
  color: rgba(255,255,255,0.8);
}

.footer__top {
  padding: 5rem 0 4rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.footer__top-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.footer__logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.2rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.03em;
  margin-bottom: 0.3rem;
}

.footer__brand-tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.95rem;
  font-style: italic;
  color: rgba(255,255,255,0.45);
  margin-bottom: 1.2rem;
}

.footer__brand-desc {
  font-size: 0.84rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.8;
}

.footer__links-group h4 {
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  margin-bottom: 1.2rem;
}

.footer__links-group ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__links-group ul a {
  font-size: 0.86rem;
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  transition: color 0.2s;
}

.footer__links-group ul a:hover {
  color: white;
}

.footer__links-group address {
  font-style: normal;
  font-size: 0.86rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.75;
  margin-bottom: 0.8rem;
}

.footer__email {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 1.2rem;
}

.footer__social {
  display: flex;
  gap: 1rem;
}

.footer__social a {
  color: rgba(255,255,255,0.45);
  transition: color 0.2s;
  line-height: 0;
}

.footer__social a:hover {
  color: rgba(255,255,255,0.85);
}

/* Bottom bar */
.footer__bottom {
  padding: 2rem 0 3rem;
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer__copy {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.35);
}

.footer__legal-links {
  display: flex;
  gap: 2rem;
}

.footer__legal-links a {
  font-size: 0.74rem;
  color: rgba(255,255,255,0.3);
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.04em;
}

.footer__legal-links a:hover {
  color: rgba(255,255,255,0.6);
}

/* Fine print — legal text, small and buried */
.footer__fine-print {
  font-size: 0.66rem;
  color: rgba(255,255,255,0.2);
  line-height: 1.7;
  max-width: 900px;
}

@media (max-width: 900px) {
  .footer__top-inner { grid-template-columns: 1fr 1fr; row-gap: 3rem; }
  .footer__bottom-inner { flex-direction: column; align-items: flex-start; }
  .footer__legal-links { flex-wrap: wrap; gap: 1rem; }
}

@media (max-width: 560px) {
  .footer__top-inner { grid-template-columns: 1fr; }
}
</style>
