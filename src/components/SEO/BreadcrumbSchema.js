import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://shadrakbessanh.me";

export const BreadcrumbSchema = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const crumbs = [
      { position: 1, name: "Home", item: `${BASE_URL}/` }
    ];

    if (path === "/project") {
      crumbs.push({ position: 2, name: "Projects", item: `${BASE_URL}/project` });
    } else if (path === "/achievements") {
      crumbs.push({ position: 2, name: "Achievements", item: `${BASE_URL}/achievements` });
    } else if (path.startsWith("/achievement/")) {
      crumbs.push({ position: 2, name: "Achievements", item: `${BASE_URL}/achievements` });
      crumbs.push({ position: 3, name: "Achievement Detail", item: `${BASE_URL}${path}` });
    } else if (path === "/resume") {
      crumbs.push({ position: 2, name: "Resume", item: `${BASE_URL}/resume` });
    } else if (path === "/blog") {
      crumbs.push({ position: 2, name: "Blog", item: `${BASE_URL}/blog` });
    } else if (path.startsWith("/blog/")) {
      crumbs.push({ position: 2, name: "Blog", item: `${BASE_URL}/blog` });
      crumbs.push({ position: 3, name: "Blog Post", item: `${BASE_URL}${path}` });
    }

    return crumbs;
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": getBreadcrumbs().map(crumb => ({
      "@type": "ListItem",
      "position": crumb.position,
      "name": crumb.name,
      "item": crumb.item
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
