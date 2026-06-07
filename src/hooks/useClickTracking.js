import { useEffect } from "react";
import { trackClick } from "../services/analyticsService";

export const useClickTracking = () => {
  useEffect(() => {
    const handleClick = (event) => {
      // Never track clicks on the admin dashboard
      if (window.location.pathname === "/admin") return;

      const target = event.target;

      const elementName =
        target.textContent?.trim().substring(0, 50) ||
        target.getAttribute("aria-label") ||
        target.getAttribute("title") ||
        target.tagName;

      const elementType = target.tagName.toLowerCase();
      const elementClass = target.className || "";
      const elementId = target.id || "";
      const href = target.getAttribute("href") || "";
      const dataTestId = target.getAttribute("data-testid") || "";

      const clickIdentifier = elementId || dataTestId || `${elementType}-${elementName}`;

      trackClick(clickIdentifier, elementType, elementClass, elementId, {
        text: elementName,
        href,
        dataTestId,
        ariaLabel: target.getAttribute("aria-label"),
        title: target.getAttribute("title"),
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);
};
