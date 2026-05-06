import "./styles.css";

const asset = (name: string) => `/assets/figma/${name}`;

type Product = {
  name: string;
  price: string;
  compareAt?: string;
  image: string;
};

type NamedImage = {
  name: string;
  image: string;
};

type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
};

const socials = ["facebook", "twitter", "instagram", "linkedin", "youtube"];

const products: Product[] = [
  { name: "Summer blouse", price: "MMK 20,000", compareAt: "MMK 21,000", image: asset("product-1.png") },
  { name: "Summer Short Sweater", price: "MMK 20,000", compareAt: "MMK 21,000", image: asset("product-2.png") },
  { name: "The Slimming Top 2026 Revamp", price: "MMK 20,000", compareAt: "MMK 21,000", image: asset("product-3.png") },
  { name: "Summer Dress", price: "MMK 20,000", compareAt: "MMK 21,000", image: asset("product-4.png") },
];

const categories: NamedImage[] = [
  { name: "Tops", image: asset("category-1.png") },
  { name: "Bottoms", image: asset("category-2.png") },
  { name: "Dresses", image: asset("category-3.png") },
  { name: "Outerwear", image: asset("category-4.png") },
  { name: "Leather", image: asset("category-5.png") },
  { name: "Bags", image: asset("category-6.png") },
];

const gallery: NamedImage[] = [
  { name: "Modern neutral", image: asset("gallery-1.png") },
  { name: "Blue denim fresh look", image: asset("gallery-2.png") },
  { name: "Olive street coat", image: asset("gallery-3.png") },
  { name: "Men formal wear", image: asset("gallery-4.png") },
  { name: "Black classic fit", image: asset("gallery-5.png") },
  { name: "Camel winter wear", image: asset("gallery-6.png") },
];

const pointShop: Product[] = [
  { name: "MMK 10K Voucher", price: "1,500 Points", image: asset("point-1.png") },
  { name: "Soft Tote Bag", price: "2,500 Points", image: asset("point-2.png") },
  { name: "Local Keychain", price: "1,500 Points", image: asset("point-3.png") },
  { name: "Summer Blouse", price: "4,000 Points", image: asset("point-4.png") },
];

const rewards: Product[] = [
  { name: "Mini Bag", price: "3,500 Points", image: asset("reward-1.png") },
  { name: "Silk Scarf", price: "2,500 Points", image: asset("reward-2.png") },
  { name: "Gift Box", price: "1,500 Points", image: asset("reward-3.png") },
  { name: "20% Off Coupon", price: "5,000 Points", image: asset("reward-4.png") },
];

const blogs: BlogPost[] = [
  {
    title: "Mastering Men's Cardigan Outfits: An Idiot-Proof Guide",
    excerpt:
      "This blog covers the latest MacBook reviews, highlighting performance, features, and value to help you choose the right MacBook with confidence.",
    image: asset("blog-1.png"),
  },
  {
    title: "Women's Summer Dress Ideas",
    excerpt:
      "This blog covers the latest MacBook reviews, highlighting performance, features, and value to help you choose the right MacBook with confidence.",
    image: asset("blog-2.png"),
  },
  {
    title: "The best fiber for winter",
    excerpt:
      "This blog covers the latest MacBook reviews, highlighting performance, features, and value to help you choose the right MacBook with confidence.",
    image: asset("blog-3.png"),
  },
];

function SocialLinks({ light = false }: { light?: boolean }) {
  return (
    <div className={`socials ${light ? "socials-light" : ""}`} aria-label="Social links">
      {socials.map((name) => (
        <a href="#home" aria-label={name} key={name}>
          <img src={asset(`social-${name}.svg`)} alt="" />
        </a>
      ))}
    </div>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#home" aria-label="Piti Fashion home">
      <img src={asset(light ? "logo-header.png" : "logo-footer.png")} alt="" />
      <span>Piti Fashion</span>
    </a>
  );
}

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <p>☕ New Year Special: Get 20% off on all specialty drinks! Code: NEWYEAR2026</p>
        <a href="#products">Shop Now</a>
      </div>
      <SocialLinks light />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Brand light />
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#products">
          Shop
          <span aria-hidden="true">⌄</span>
        </a>
        <a href="#blog">Blogs</a>
        <a href="#about">Abut</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <button aria-label="Search" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
        </button>
        <button className="login-button" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 21a7 7 0 0 1 14 0" />
          </svg>
          Login
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img src={asset("hero.png")} alt="" />
      <Header />
      <div className="hero-copy">
        <h1>Soft Launching Spring</h1>
        <p>Experience the finest coffee crafted with passion and precision. Start your day with our signature blends.</p>
        <a className="button button-light" href="#products">
          Shop Now
        </a>
      </div>
    </section>
  );
}

function SectionTitle({ title, children }: { title: string; children: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function ProductCard({ item }: { item: Product }) {
  return (
    <article className="product-card">
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>
          {item.price}
          {item.compareAt ? <span>{item.compareAt}</span> : null}
        </p>
        <a href="#products">View options</a>
      </div>
    </article>
  );
}

function TopHits() {
  return (
    <section className="section surface" id="products">
      <SectionTitle title="Our Top Hits">Trendy, stylish, and effortlessly chic pieces for every occasion.</SectionTitle>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard item={product} key={product.name} />
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="section surface compact" id="categories">
      <SectionTitle title="Categories">Explore our curated clothing categories and find your perfect style.</SectionTitle>
      <div className="category-row">
        {categories.map((category) => (
          <a href="#products" className="category-item" key={category.name}>
            <img src={category.image} alt="" />
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SaleBanner() {
  return (
    <section className="sale-band surface">
      <div className="sale-card">
        <strong>Hurry up! Sale end in:</strong>
        <div className="timer" aria-label="Sale timer">
          {[
            ["00", "Days"],
            ["23", "Hrs"],
            ["56", "Mins"],
            ["54", "Secs"],
          ].map(([value, label], index) => (
            <span key={label}>
              {index > 0 ? <b>:</b> : null}
              <em>
                {value}
                <small>{label}</small>
              </em>
            </span>
          ))}
        </div>
        <a className="button button-dark" href="#products">
          Shop Now
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section" id="gallery">
      <SectionTitle title="Our Galleries">Explore our looks, seasonal outfits, and wearable fashion inspiration.</SectionTitle>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <article className="gallery-card" key={item.name}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductRail({ title, text, items, reverse = false }: { title: string; text: string; items: Product[]; reverse?: boolean }) {
  return (
    <section className={`section rail-section ${reverse ? "rail-reverse" : ""}`}>
      <div className="rail-copy">
        <h2>{title}</h2>
        <p>{text}</p>
        <a className="button button-outline" href="#products">
          {reverse ? "Redeemed Rewards" : "Explore Products"}
        </a>
      </div>
      <div className="rail-grid">
        {items.map((item) => (
          <ProductCard item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <img src={asset("about.png")} alt="" />
      <div>
        <h2>Your One-Stop Clothing Store</h2>
        <p>
          Discover the latest smartphones, laptops, Macs, and gadgets-all in one place. We bring you authentic products,
          expert reviews, and the newest tech so you can shop with confidence. Quality, convenience, and smart tech
          choices-delivered straight to your door.
        </p>
        <a href="#products">
          Explore More
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="section surface" id="blog">
      <SectionTitle title="Blogs">
        Our Blogs - Stay inspired with the latest fashion trends, styling tips, and seasonal highlights.
      </SectionTitle>
      <div className="blog-tabs" aria-label="Blog categories">
        <button className="active" type="button">
          Fashion Trends
        </button>
        <button type="button">Styling Tips</button>
        <button type="button">Behind the Brand</button>
      </div>
      <div className="blog-grid">
        {blogs.map((post) => (
          <article className="blog-card" key={post.title}>
            <img src={post.image} alt="" />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#blog">Read more</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main">
        <Brand />
        <nav aria-label="Footer navigation">
          <a href="#about">About Us</a>
          <a href="#products">Shop</a>
          <a href="#home">Locations</a>
          <a href="#blog">Blog</a>
        </nav>
        <SocialLinks />
      </div>
      <div className="sub-footer">
        <p>© 2025 Piti Cafe. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="#home">Terms of Service</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Cookies</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <TopBar />
      <main>
        <Hero />
        <TopHits />
        <Categories />
        <SaleBanner />
        <Gallery />
        <ProductRail title="Point Shop" text="Easy, stylish picks you can redeem with your points." items={pointShop} />
        <ProductRail
          title="Rewards"
          text="Enjoy exclusive gifts and special fashion perks through our rewards collection."
          items={rewards}
          reverse
        />
        <About />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
