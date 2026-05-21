import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export const BreadcrumbSchema = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const breadcrumbs = [
      {
        position: 1,
        name: "Home",
        item: "https://shadrakbessanh.me/"
      }
    ];

    if (path === "/project") {
      breadcrumbs.push({
        position: 2,
        name: "Projects",
        item: "https://shadrakbessanh.me/project"
      });
    } else if (path === "/achievements") {
      breadcrumbs.push({
        position: 2,
        name: "Achievements",
        item: "https://shadrakbessanh.me/achievements"
      });
    } else if (path.startsWith("/achievement/")) {
      breadcrumbs.push({
        position: 2,
        name: "Achievements",
        item: "https://shadrakbessanh.me/achievements"
      });
      breadcrumbs.push({
        position: 3,
        name: "Achievement Detail",
        item: `https://shadrakbessanh.me${path}`
      });
    } else if (path === "/resume") {
      breadcrumbs.push({
        position: 2,
        name: "Resume",
        item: "https://shadrakbessanh.me/resume"
      });
    }

    return breadcrumbs;
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
