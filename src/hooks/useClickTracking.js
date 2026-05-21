import { useEffect } from "react";
import { trackClick } from "../services/analyticsService";

export const useClickTracking = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;

      // Récupérer les informations du clic
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

      // Construire un identifiant unique pour le clic
      const clickIdentifier = elementId || dataTestId || `${elementType}-${elementName}`;

      // Tracker le clic avec tous les détails
      trackClick(
        clickIdentifier,
        elementType,
        elementClass,
        elementId,
        {
          text: elementName,
          href: href,
          dataTestId: dataTestId,
          ariaLabel: target.getAttribute("aria-label"),
          title: target.getAttribute("title"),
        }
      );
    };

    // Ajouter l'écouteur de clic au document
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);
};
