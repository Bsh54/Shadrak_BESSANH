import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { blogPosts } from "../../data/blogData";
import { SEOHead } from "../SEO/SEOHead";
import "./Blog.css";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function Blog() {
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
      <Container fluid className="blog-section">
        <Particle />
        <Container className="blog-container">
          <h1 className="project-heading">
            The <strong className="purple">Blog</strong>
          </h1>
          <p className="blog-intro">
            Notes on building AI for real-world impact — projects, awards and lessons from Benin.
          </p>

          <Row className="blog-list">
            {blogPosts.map((post) => (
              <Col md={6} lg={4} className="blog-col" key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  <article className="blog-card">
                    <div className="blog-card-img">
                      <img src={post.cover} alt={post.title} loading="lazy" />
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span>{fmtDate(post.date)}</span>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <h2 className="blog-card-title">{post.title}</h2>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <div className="blog-card-tags">
                        {post.tags.slice(0, 3).map((t) => (
                          <span className="blog-tag" key={t}>{t}</span>
                        ))}
                      </div>
                      <span className="blog-card-more">Read article →</span>
                    </div>
                  </article>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Blog;
