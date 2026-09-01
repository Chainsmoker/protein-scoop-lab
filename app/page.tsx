import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Download,
  Flame,
  IceCreamBowl,
  Layers,
  Leaf,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { ScrollObserver } from "@/components/scroll-observer";
import { FaqAccordion } from "@/components/faq-accordion";

const checkoutUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ||
  "https://proteinscooplab.gumroad.com/l/protein-frozen-desserts";

const benefits = [
  {
    icon: IceCreamBowl,
    title: "34 Protein Frozen Desserts",
    text: "Creamy scoops, soft serve, yogurt bark, popsicles, freezer cups, and sandwiches.",
  },
  {
    icon: Flame,
    title: "Approximate Macros Included",
    text: "Clear calories, protein, carbs, fat, and fiber listed on every single recipe page.",
  },
  {
    icon: Layers,
    title: "4 Repeatable Master Formulas",
    text: "Simple master formulas you can easily adapt with your favorite flavors and fruits.",
  },
  {
    icon: Leaf,
    title: "Real Pantry Staples",
    text: "Greek yogurt, cottage cheese, protein powder, milk, berries, cocoa, and oats.",
  },
  {
    icon: BookOpen,
    title: "7-Day Dessert Rotation Plan",
    text: "A structured weekly plan to satisfy daily sweet cravings while hitting protein targets.",
  },
  {
    icon: Download,
    title: "Instant PDF & EPUB Access",
    text: "Download right after checkout. Formatted for phone, tablet, or kitchen counters.",
  },
];

const recipes = [
  {
    name: "Mocha Protein Ice Cream",
    description: "Deep cocoa, instant espresso, and Greek yogurt blended into a bold coffee scoop.",
    image: "/images/recipes/mocha-ice-cream.webp",
    detail: "Creamy · Coffee-kissed",
    macros: "24g protein · 185 kcal",
    formula: "Formula 3: Ice Cream",
  },
  {
    name: "Chocolate Peanut Butter Bark",
    description: "Rich chocolate Greek yogurt base with a peanut butter swirl and roasted crunch.",
    image: "/images/recipes/choc-peanut-bark.webp",
    detail: "Rich · Crunchy",
    macros: "18g protein · 180 kcal",
    formula: "Formula 1: Yogurt Bark",
  },
  {
    name: "Strawberry Protein Soft Serve",
    description: "Sweet frozen strawberries and vanilla protein whipped into instant velvety soft serve.",
    image: "/images/recipes/strawberry-soft-serve.webp",
    detail: "Fresh · Whipped",
    macros: "24g protein · 190 kcal",
    formula: "Formula 3: Soft Serve",
  },
  {
    name: "Chocolate Cottage Cheese Cream",
    description: "Silky whipped cottage cheese with rich cocoa and maple—thick, velvety, and high protein.",
    image: "/images/recipes/cottage-chocolate-icecream.webp",
    detail: "Silky · Ultra-High Protein",
    macros: "27g protein · 205 kcal",
    formula: "Formula 3: Ice Cream",
  },
  {
    name: "Chocolate Banana Protein Bites",
    description: "Frozen banana sandwich slices with peanut butter filling, dipped in crisp dark chocolate.",
    image: "/images/recipes/banana-pb-bites.webp",
    detail: "Crisp Shell · Finger Food",
    macros: "6g protein · 58 kcal",
    formula: "Formula 4: Frozen Bites",
  },
  {
    name: "Mango Coconut Protein Bark",
    description: "Tropical sunny mango cubes with toasted shredded coconut and fresh lime zest.",
    image: "/images/recipes/mango-coconut-bark.webp",
    detail: "Tropical · Bright",
    macros: "17g protein · 158 kcal",
    formula: "Formula 1: Yogurt Bark",
  },
];

const formulas = [
  {
    num: "01",
    name: "Protein Yogurt Bark",
    summary: "Thick Greek yogurt + protein powder + fruit & crunch. Freeze 2-3 hours and snap into shards.",
  },
  {
    num: "02",
    name: "Protein Popsicles",
    summary: "Silky yogurt/milk base + fruit + protein blended smooth and poured into easy grab-and-go molds.",
  },
  {
    num: "03",
    name: "Ice Cream & Soft Serve",
    summary: "Frozen bananas or berries + blended silky cottage cheese or yogurt for thick, instant scoops.",
  },
  {
    num: "04",
    name: "Frozen Bites & Sandwiches",
    summary: "Graham cracker yogurt sandwiches, dark chocolate banana dips, and mini cheesecake silicone cups.",
  },
];

const audience = [
  "You want to hit your daily protein goal without giving up satisfying desserts.",
  "You are tired of chalky, chemical-tasting commercial “diet” protein bars and treats.",
  "You want quick 5-minute blender recipes you can prep in batches and keep in the freezer.",
  "You want exact approximate macros (calories, protein, carbs, fat) for seamless tracking.",
];

const previewRecipes = [
  {
    title: "Chocolate Peanut Butter Bark",
    subtitle: "Formula 1 · Yogurt Bark",
    description: "Thick Greek yogurt base with chocolate protein, rich peanut butter drizzle, and roasted peanuts.",
    image: "/images/recipes/choc-peanut-bark.webp",
    macros: "18g Protein · 180 kcal",
  },
  {
    title: "Vanilla Berry Protein Pops",
    subtitle: "Formula 2 · Protein Popsicles",
    description: "Cold, refreshing pops packed with fresh blueberries, strawberries, and sweet vanilla yogurt.",
    image: "/images/recipes/berry-popsicles.webp",
    macros: "9g Protein · 95 kcal",
  },
  {
    title: "Mocha Protein Ice Cream",
    subtitle: "Formula 3 · Ice Cream & Soft Serve",
    description: "Silky scoopable dessert with rich cocoa, espresso powder, and high-protein Greek yogurt.",
    image: "/images/recipes/mocha-ice-cream.webp",
    macros: "24g Protein · 185 kcal",
  },
  {
    title: "Frozen Cheesecake Bites",
    subtitle: "Formula 4 · Frozen Bites",
    description: "Bite-size frozen vanilla cheesecake mounds over a buttery graham cracker crumb base.",
    image: "/images/recipes/cheesecake-bites.webp",
    macros: "7g Protein · 70 kcal",
  },
];

const faqs = [
  {
    question: "What format do I receive after purchase?",
    answer: "You receive instant digital access to both PDF and EPUB editions of the ebook. You can download and read it immediately on your iPhone, Android, iPad, Kindle, tablet, or computer.",
  },
  {
    question: "Do I need a Ninja CREAMi or special ice cream machine?",
    answer: "No! None of the recipes require expensive ice cream machines. All you need is a standard blender or food processor, a baking sheet with parchment paper for bark, or popsicle molds.",
  },
  {
    question: "What types of protein powder can I use?",
    answer: "The recipes work smoothly with whey protein, casein, or plant-based protein powders (pea, soy, or blended). The book includes a dedicated Smart Swaps guide with liquid adjustments for each type.",
  },
  {
    question: "Are complete nutrition estimates included?",
    answer: "Yes. Every recipe includes approximate values per serving for Calories, Protein, Carbohydrates, Fat, and Dietary Fiber so you can easily log your meals.",
  },
  {
    question: "How long do these treats stay fresh in the freezer?",
    answer: "The book includes a dedicated Storage & Texture Guide: Yogurt bark keeps 1 to 2 weeks, popsicles 2 to 3 weeks, frozen bites 1 to 2 weeks, and soft-serve style bowls can be enjoyed immediately or stored up to 3 days.",
  },
  {
    question: "Can I adjust the sweetness or dairy ingredients?",
    answer: "Yes. The guide details how to adjust natural sweeteners (honey, maple syrup, dates, or calorie-free options) and how to swap between Greek yogurt, skyr, and blended cottage cheese.",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Protein Scoop Lab home">
      <span className="brand-scoop" aria-hidden="true">PSL</span>
      <span><strong>Protein Scoop Lab</strong><small>by Come Sano</small></span>
    </a>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Get instant access <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <ScrollObserver />

      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav aria-label="Main navigation">
            <a href="#inside">What&apos;s inside</a>
            <a href="#formulas">4 Formulas</a>
            <a href="#recipes">Recipes</a>
            <a href="#preview">Look inside</a>
            <a href="#faq">FAQ</a>
            <a
              className="nav-buy"
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the ebook
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="hero section-dark" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal-left is-revealed">
            <p className="eyebrow">A premium digital recipe collection by Come Sano</p>
            <h1 id="hero-title">
              High-protein frozen desserts that taste like <em>real treats.</em>
            </h1>
            <p className="hero-lede">
              34 refreshing high-protein ice creams, silky yogurt barks, popsicles, and freezer bites—made with real everyday ingredients, no chalky aftertaste, and approximate macros included.
            </p>
            <div className="hero-actions">
              <PrimaryCta />
              <a className="button button-secondary" href="#preview">
                Preview the recipes <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
            <ul className="trust-row" aria-label="Product highlights">
              <li><Download size={16} /> Instant PDF & EPUB</li>
              <li><IceCreamBowl size={16} /> 34 Tested Recipes</li>
              <li><Sparkles size={16} /> Macros Included</li>
              <li><Clock3 size={16} /> Simple Prep</li>
            </ul>
          </div>
          <div className="hero-visual reveal-right is-revealed">
            <div className="hero-image-wrap">
              <Image
                src="/images/hero-ebook.webp"
                alt="Protein Frozen Desserts ebook displayed with creamy chocolate and strawberry desserts"
                width={1400}
                height={933}
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 52vw"
              />
            </div>
            <div className="floating-note float-slow">
              <span>By Come Sano</span>
              <strong>34 Recipes. 4 Formulas. Real Dessert Energy.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE CAROUSEL ── */}
      <section className="marquee" aria-label="Ebook qualities">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>Creamy</span><i>✦</i>
            <span>High-protein</span><i>✦</i>
            <span>Simple</span><i>✦</i>
            <span>Satisfying</span><i>✦</i>
            <span>Beautifully designed</span><i>✦</i>
            <span>Macro-friendly</span><i>✦</i>
            <span>34 Frozen Treats</span><i>✦</i>
            <span>Greek Yogurt & Cottage Cheese</span><i>✦</i>
            <span>Instant Digital Access</span><i>✦</i>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span>Creamy</span><i>✦</i>
            <span>High-protein</span><i>✦</i>
            <span>Simple</span><i>✦</i>
            <span>Satisfying</span><i>✦</i>
            <span>Beautifully designed</span><i>✦</i>
            <span>Macro-friendly</span><i>✦</i>
            <span>34 Frozen Treats</span><i>✦</i>
            <span>Greek Yogurt & Cottage Cheese</span><i>✦</i>
            <span>Instant Digital Access</span><i>✦</i>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE SECTION (Inside the Recipes) ── */}
      <section className="showcase section-cream" aria-labelledby="showcase-title">
        <div className="container showcase-grid">
          <div className="showcase-art reveal-scale" aria-label="A look inside the recipes">
            <div className="showcase-card showcase-back float-slow">
              <div className="showcase-card-photo">
                <Image
                  src="/images/recipes/choc-peanut-bark.webp"
                  alt="Chocolate Peanut Butter Protein Bark"
                  width={380}
                  height={280}
                  unoptimized
                  sizes="(max-width: 820px) 70vw, 320px"
                />
                <span className="card-pill">18g Protein</span>
              </div>
              <div className="showcase-card-body">
                <small>Formula 1 · Yogurt Bark</small>
                <h3>Chocolate PB Bark</h3>
                <div className="mini-macros">
                  <b>180 kcal</b>
                  <b>18g protein</b>
                  <b>2g fiber</b>
                </div>
              </div>
            </div>
            <div className="showcase-card showcase-front float-slow-reverse">
              <div className="showcase-card-photo">
                <Image
                  src="/images/recipes/mocha-ice-cream.webp"
                  alt="Mocha Protein Ice Cream"
                  width={380}
                  height={280}
                  unoptimized
                  sizes="(max-width: 820px) 70vw, 320px"
                />
                <span className="card-pill">24g Protein</span>
              </div>
              <div className="showcase-card-body">
                <small>Formula 3 · Ice Cream</small>
                <h3>Mocha Protein Scoop</h3>
                <div className="mini-macros">
                  <b>185 kcal</b>
                  <b>24g protein</b>
                  <b>2g fiber</b>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-copy reveal-left">
            <p className="eyebrow dark">Dessert, reimagined</p>
            <h2 id="showcase-title">A recipe collection you&apos;ll actually make.</h2>
            <p>
              Protein Frozen Desserts brings together practical, delicious formulas with clean nutrition, so choosing a smarter sweet treat feels abundant—never restrictive.
            </p>
            <ul className="check-list">
              <li><Check size={17} /> 34 straightforward recipes with step-by-step methods</li>
              <li><Check size={17} /> Clear calories, protein, carbs, fat, and fiber per serving</li>
              <li><Check size={17} /> 4 core master formulas you can repeat with any ingredient</li>
              <li><Check size={17} /> Pro tips to eliminate icy textures and store treats for weeks</li>
            </ul>
            <a className="text-link" href="#inside">
              Explore what&apos;s inside <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ── */}
      <section id="inside" className="section-dark benefits" aria-labelledby="inside-title">
        <div className="container">
          <div className="section-heading centered reveal">
            <p className="eyebrow">Everything you need to make dessert smarter</p>
            <h2 id="inside-title">What&apos;s inside the scoop?</h2>
            <p>
              More than a collection of recipes: a complete, beautiful system built to make high-protein frozen treats an effortless part of real life.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className={`benefit-card reveal stagger-${index + 1}`} key={title}>
                <div className="benefit-top">
                  <span className="icon-box"><Icon size={22} aria-hidden="true" /></span>
                  <small>0{index + 1}</small>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 FORMULAS SYSTEM ── */}
      <section id="formulas" className="section-cream formulas-section" aria-labelledby="formulas-title">
        <div className="container">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow dark">The core method</p>
              <h2 id="formulas-title">The 4-Formula Master System.</h2>
            </div>
            <p>
              Learn the 4 core formulas once, and you can create dozens of custom high-protein frozen treats using whatever you have in the fridge.
            </p>
          </div>
          <div className="formula-grid">
            {formulas.map((f, index) => (
              <article className={`formula-card reveal stagger-${index + 1}`} key={f.name}>
                <span className="formula-number">{f.num}</span>
                <h3>{f.name}</h3>
                <p>{f.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECIPES SHOWCASE GRID ── */}
      <section id="recipes" className="recipes section-dark" aria-labelledby="recipes-title">
        <div className="container">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="eyebrow">A small taste of the 34 recipes</p>
              <h2 id="recipes-title">Meet your new freezer favorites.</h2>
            </div>
            <p>
              Rich, creamy, fruity, and genuinely craveable—made with wholesome protein sources and zero artificial diet aftertaste.
            </p>
          </div>
          <div className="recipe-grid">
            {recipes.map((recipe, index) => (
              <article className={`recipe-card reveal-scale stagger-${(index % 3) + 1}`} key={recipe.name}>
                <div className="recipe-photo">
                  <span>0{index + 1}</span>
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    width={600}
                    height={450}
                    unoptimized
                    sizes="(max-width: 600px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  />
                  <div className="recipe-macro-badge">{recipe.macros}</div>
                </div>
                <div className="recipe-body">
                  <small>{recipe.formula}</small>
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center-action reveal">
            <a className="button button-primary" href="#preview">
              See more inside the ebook <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="for-you" aria-labelledby="for-you-title">
        <div className="container for-you-grid">
          <div className="for-you-copy reveal-left">
            <p className="eyebrow">Made for real cravings</p>
            <h2 id="for-you-title">This book is for you if…</h2>
            <p>
              You want your food choices to feel nourishing, supportive, and satisfying—not like a bland punishment disguised as dessert.
            </p>
          </div>
          <div className="audience-list reveal-right">
            {audience.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section className="difference section-cream" aria-labelledby="difference-title">
        <div className="container difference-grid">
          <div className="difference-photo reveal-left">
            <Image
              src="/images/recipes/strawberry-soft-serve.webp"
              alt="Strawberry Protein Soft Serve"
              width={700}
              height={700}
              unoptimized
              sizes="(max-width: 820px) 100vw, 50vw"
            />
            <div className="quote-card float-slow">
              <Sparkles size={20} />
              <p>“It should feel like dessert first.”</p>
              <span>The Come Sano philosophy</span>
            </div>
          </div>
          <div className="difference-copy reveal-right">
            <p className="eyebrow dark">Why it feels different</p>
            <h2 id="difference-title">Not another generic recipe PDF.</h2>
            <p>
              This collection was created to make better-for-you dessert feel abundant, polished, and genuinely worth looking forward to at the end of the day.
            </p>
            <div className="difference-points">
              <article>
                <span>01</span>
                <div>
                  <h3>Indulgent, not clinical</h3>
                  <p>Rich cocoa, sweet strawberries, nutty swirls, and creamy dairy textures lead every recipe.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Useful at a single glance</h3>
                  <p>Clean editorial layouts let you check ingredients, steps, and macros before you even start blending.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Flexible for real life</h3>
                  <p>Approachable staples, flexible protein powder swaps, and practical freezer storage tips.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOOK INSIDE (REAL RECIPES SHOWCASE) ── */}
      <section id="preview" className="preview section-dark" aria-labelledby="preview-title">
        <div className="container">
          <div className="section-heading centered reveal">
            <p className="eyebrow">See what you&apos;re getting</p>
            <h2 id="preview-title">A taste of the 4 Master Formulas.</h2>
            <p>
              Every recipe is tested for real texture and genuine dessert satisfaction—no icy crunch or chalky protein taste.
            </p>
          </div>
          <div className="preview-gallery" aria-label="Sample ebook recipes">
            {previewRecipes.map((item, index) => (
              <article className={`preview-card reveal-scale stagger-${index + 1}`} key={item.title}>
                <div className="preview-card-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={380}
                    unoptimized
                    sizes="(max-width: 600px) 85vw, (max-width: 1050px) 45vw, 25vw"
                  />
                  <span className="preview-macro-chip">{item.macros}</span>
                </div>
                <div className="preview-card-caption">
                  <small>{item.subtitle}</small>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="preview-reassurance reveal">
            <Smartphone size={20} />
            <p>
              Delivered in <strong>PDF and EPUB</strong>—keep it open on your phone, tablet, or laptop while you prep in the kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION (ANIMATED ACCORDION) ── */}
      <section id="faq" className="faq section-cream" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div className="faq-heading reveal-left">
            <p className="eyebrow dark">Good to know</p>
            <h2 id="faq-title">Frequently asked questions.</h2>
            <p>Everything you need to know before making your first batch.</p>
          </div>
          <div className="reveal-right">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA / OFFER CARD ── */}
      <section id="get-access" className="final-cta section-dark" aria-labelledby="final-title">
        <div className="container final-grid">
          <div className="reveal-left">
            <p className="eyebrow">Your freezer deserves better</p>
            <h2 id="final-title">
              Turn your sweet cravings into something <em>smarter.</em>
            </h2>
            <p>
              Get the complete Protein Frozen Desserts collection and make your next high-protein treat the one you actually look forward to.
            </p>
          </div>
          <div className="offer-card reveal-scale">
            <div className="offer-label">Instant Digital Ebook (PDF + EPUB)</div>
            <h3>Protein Frozen Desserts</h3>
            <p>34 high-protein recipe ideas & 4 master formulas in one beautifully designed guide.</p>
            <ul>
              <li><Check size={16} /> 34 tested recipes (ice creams, pops, bark, bites)</li>
              <li><Check size={16} /> Complete approximate macros per serving</li>
              <li><Check size={16} /> 4 Repeatable master formulas</li>
              <li><Check size={16} /> 7-Day sample dessert meal plan</li>
              <li><Check size={16} /> Storage & troubleshooting guide</li>
              <li><Check size={16} /> Read on any phone, tablet, or computer</li>
            </ul>
            <PrimaryCta className="full-width" />
            <small>
              <ShieldCheck size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
              Secure checkout · Instant access after purchase
            </small>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <BrandMark />
          <p>© 2026 Protein Scoop Lab. A Come Sano collection.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <div className="mobile-cta" aria-label="Quick purchase action">
        <div>
          <small>Digital ebook (34 recipes)</small>
          <strong>Protein Frozen Desserts</strong>
        </div>
        <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
          Get the ebook
        </a>
      </div>
    </main>
  );
}

