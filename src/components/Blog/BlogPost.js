import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getPost, blogPosts } from "../../data/blogData";
import Markdown from "./Markdown";
import ScrollToTop from "../ScrollToTop";
import avatar from "../../Assets/avatar.png";
import "./Blog.css";

const SITE = "https://shadrakbessanh.me";
const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPost(slug);

  if (!post) {
    return (
      <Container style={{ paddingTop: "140px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ color: "#F4F4F5" }}>Article not found</h2>
        <button className="btn btn-primary" onClick={() => navigate("/blog")}>Back to Blog</button>
      </Container>
    );
  }

  const url = `${SITE}/blog/${post.slug}`;
  const imageAbs = post.cover && post.cover.startsWith("http") ? post.cover : `${SITE}/og-image.jpg`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageAbs,
    "datePublished": post.date,
    "dateModified": post.dateModified || post.date,
    "author": { "@type": "Person", "name": "BESSANH Shadrak", "@id": `${SITE}/#person`, "url": SITE },
    "publisher": { "@id": `${SITE}/#person` },
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "keywords": post.tags.join(", "),
    "inLanguage": "en",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": url },
    ],
  };

  const faqSchema = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  } : null;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ScrollToTop />
      <Helmet>
        <title>{post.title} - BESSANH Shadrak</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.tags.join(", ")}, BESSANH Shadrak, AI developer Africa`} />
        <meta name="author" content="BESSANH Shadrak" />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={imageAbs} />
        <meta property="og:url" content={url} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.dateModified || post.date} />
        <meta property="article:author" content="BESSANH Shadrak" />
        {post.tags.map((t) => <meta property="article:tag" content={t} key={t} />)}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={imageAbs} />
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <div className="blogpost-wrapper">
        <Container className="blogpost-container">
          <nav className="blogpost-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/blog">Blog</Link>
          </nav>

          <header className="blogpost-header">
            <div className="blogpost-tags">
              {post.tags.map((t) => <span className="blog-tag" key={t}>{t}</span>)}
            </div>
            <h1 className="blogpost-title">{post.title}</h1>
            <div className="blogpost-meta">
              <img src={avatar} alt="BESSANH Shadrak" className="blog-byline-avatar" />
              <span>BESSANH Shadrak</span>
              <span className="dot">·</span>
              <time dateTime={post.date}>{fmtDate(post.date)}</time>
              <span className="dot">·</span>
              <span>{post.readingTime} read</span>
            </div>
          </header>

          <div className="blogpost-cover">
            <img src={post.cover} alt={post.title} />
          </div>

          <article className="blogpost-content">
            <Markdown content={post.content} />
          </article>

          {post.faq && post.faq.length > 0 && (
            <section className="blogpost-faq">
              <h2 className="md-h2">Frequently Asked Questions</h2>
              {post.faq.map((f, i) => (
                <div className="faq-item" key={i}>
                  <h3 className="faq-q">{f.q}</h3>
                  <p className="faq-a">{f.a}</p>
                </div>
              ))}
            </section>
          )}

          <div className="blogpost-back">
            <Link to="/blog" className="btn btn-outline-primary">← Back to all articles</Link>
          </div>

          {related.length > 0 && (
            <section className="blogpost-related">
              <h2 className="md-h2">Read next</h2>
              <div className="related-grid">
                {related.map((r) => (
                  <Link to={`/blog/${r.slug}`} key={r.slug} className="related-card">
                    <span className="related-title">{r.title}</span>
                    <span className="related-more">Read →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </Container>
      </div>
    </>
  );
}

export default BlogPost;
