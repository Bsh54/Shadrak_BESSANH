import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { blogPosts } from "../../data/blogData";
import { SEOHead } from "../SEO/SEOHead";
import avatar from "../../Assets/avatar.png";
import "./Blog.css";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <SEOHead
        title="Blog - BESSANH Shadrak | Building AI for Real-World Impact in Africa"
        description="Articles by BESSANH Shadrak on building AI for real-world impact: NAWIRI (USAII Social Impact Award), CottonPay (ID4Africa), African language technology, digital identity and more."
        keywords="BESSANH Shadrak blog, AI for Africa, NAWIRI, CottonPay, digital identity, African languages AI, Fon language, AI social impact, developer Benin"
        url="https://shadrakbessanh.me/blog"
        image="https://shadrakbessanh.me/og-image.jpg"
        pageType="Blog"
      />
      <div className="blog-section">
        <Particle />
        <Container className="blog-container">

          {/* Masthead */}
          <header className="blog-masthead">
            <span className="blog-kicker">The Blog</span>
            <h1 className="blog-headline">Building AI for real-world impact</h1>
            <p className="blog-sub">Projects, awards and lessons from Benin — where technology meets real problems.</p>
          </header>

          {/* Featured */}
          <Link to={`/blog/${featured.slug}`} className="blog-featured">
            <div className="blog-featured-img">
              <img src={featured.cover} alt={featured.title} />
              <span className="blog-featured-badge">Featured</span>
            </div>
            <div className="blog-featured-body">
              <div className="blog-card-tags">
                {featured.tags.slice(0, 3).map((t) => <span className="blog-tag" key={t}>{t}</span>)}
              </div>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-excerpt">{featured.excerpt}</p>
              <div className="blog-byline">
                <img src={avatar} alt="BESSANH Shadrak" className="blog-byline-avatar" />
                <span>BESSANH Shadrak</span>
                <span className="dot">·</span>
                <span>{fmtDate(featured.date)}</span>
                <span className="dot">·</span>
                <span>{featured.readingTime}</span>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div className="blog-divider"><span>More articles</span></div>

          {/* List */}
          <div className="blog-rows">
            {rest.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-row" key={post.slug}>
                <div className="blog-row-img">
                  <img src={post.cover} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-row-body">
                  <div className="blog-card-tags">
                    {post.tags.slice(0, 2).map((t) => <span className="blog-tag" key={t}>{t}</span>)}
                  </div>
                  <h3 className="blog-row-title">{post.title}</h3>
                  <p className="blog-row-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{fmtDate(post.date)}</span>
                    <span className="dot">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </Container>
      </div>
    </>
  );
}

export default Blog;
