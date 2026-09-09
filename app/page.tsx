import {
  ArrowUpRight,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  Wheat,
} from 'lucide-react';

const offerings = [
  {
    number: '01',
    title: 'Everyday staples',
    copy: 'The breads, rolls, and everyday favorites your customers reach for again and again, baked for dependable shelf presence.',
  },
  {
    number: '02',
    title: 'Morning favorites',
    copy: 'Croissants, muffins, danishes, and sweet goods that give the morning set a reason to linger.',
  },
  {
    number: '03',
    title: 'Catering-ready',
    copy: 'Flexible assortments and consistent volume for caterers, hospitality teams, and special occasions.',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Bakery Source home">
          <span className="brand-mark" aria-hidden="true">
            <Wheat size={18} strokeWidth={1.8} />
          </span>
          <span>
            <strong>The Bakery Source</strong>
            <small>Wholesale bakery partners</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#what-we-make">What we make</a>
          <a href="#why-us">Why partners choose us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-link" href="#contact">
          Talk with us <ArrowUpRight size={16} />
        </a>
        <button className="menu-button" type="button" aria-label="Open navigation">
          <Menu size={22} />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Fresh from the source</p>
          <h1>Good food starts with <em>something freshly baked.</em></h1>
          <p className="hero-intro">
            The Bakery Source, Inc. brings fresh baked goods to the grocery stores,
            caterers, and food teams that keep their communities well fed.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              Become a partner <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#what-we-make">
              Explore our bake <ChevronDown size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-icon"><Check size={14} strokeWidth={3} /></span>
            <span>Built for consistent quality, thoughtful service, and the next delivery.</span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src="/bakery-hero.png" alt="Fresh loaves and pastries on a bakery worktable" />
          <div className="hero-image-caption">
            <span>Made fresh for</span>
            <strong>the people you serve.</strong>
          </div>
          <span className="image-stamp">EST. FOR<br />GOOD FOOD</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Business focus">
        <div><strong>Wholesale</strong><span>Designed for teams, not just tables.</span></div>
        <div><strong>Fresh baked</strong><span>Made with care from the first mix.</span></div>
        <div><strong>Built to deliver</strong><span>Reliable service for every order.</span></div>
      </section>

      <section className="section offerings" id="what-we-make">
        <div className="section-heading">
          <p className="eyebrow"><span /> What we make</p>
          <h2>The right bake for <em>every kind of table.</em></h2>
          <p>From daily grocery staples to a beautiful catering spread, our assortment is made to fit the way your business works.</p>
        </div>
        <div className="offering-grid">
          {offerings.map((offering) => (
            <article className="offering-card" key={offering.number}>
              <span className="card-number">{offering.number}</span>
              <h3>{offering.title}</h3>
              <p>{offering.copy}</p>
              <span className="card-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="section quality-section" id="why-us">
        <div className="quality-image-wrap">
          <img className="quality-image" src="/bakery-assortment.png" alt="Assortment of sourdough, brioche, croissants, muffins, and pastries" />
          <div className="quality-caption">An assortment with<br /><strong>something for everyone.</strong></div>
        </div>
        <div className="quality-copy">
          <p className="eyebrow"><span /> Why partners choose us</p>
          <h2>Dependable is a <em>delicious</em> quality.</h2>
          <p className="large-copy">When your customers come back for the same loaf, roll, or pastry, they should find the same care every time.</p>
          <div className="quality-list">
            <div><span><Check size={15} /></span><p><strong>Consistency you can plan around</strong><br />A steady bake helps your team plan shelves, menus, and service with confidence.</p></div>
            <div><span><Check size={15} /></span><p><strong>A partner who understands pace</strong><br />We know a great product is only great when it arrives ready for your day.</p></div>
            <div><span><Check size={15} /></span><p><strong>Freshness that earns another order</strong><br />Careful preparation and thoughtful delivery keep quality at the center.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow eyebrow-light"><span /> Let&apos;s work together</p>
          <h2>Bring better baked goods<br /><em>to your customers.</em></h2>
        </div>
        <div className="contact-side">
          <p>Tell us what you&apos;re looking for and we&apos;ll help you find the right fit for your store, menu, or next event.</p>
          <div className="contact-details">
            <div className="location-line"><MapPin size={18} /><div><span>Headquarters</span><strong>1241 47th Street</strong></div></div>
            <p className="contact-note">Customer service for grocery, catering, and wholesale partners.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="brand brand-footer">
          <span className="brand-mark" aria-hidden="true"><Wheat size={18} strokeWidth={1.8} /></span>
          <span><strong>The Bakery Source, Inc.</strong><small>Fresh baked goods, thoughtfully delivered.</small></span>
        </div>
        <p>© 2026 The Bakery Source, Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}
