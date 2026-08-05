/* ==========================================================================
   Md. Zunaid-Ul-Alam · Academic Portfolio
   --------------------------------------------------------------------------
   Tiny enhancement layer. Safe to delete if you want zero JS.
   ========================================================================== */
(function () {
  "use strict";

  /* -----------------------------------------------------------------------
     Auto-update the year in the footer.
     ----------------------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -----------------------------------------------------------------------
     Highlight the current section in the top nav as the user scrolls.
     Uses IntersectionObserver; no library, no scroll-jank.
     ----------------------------------------------------------------------- */
  const navLinks = Array.from(document.querySelectorAll(".topbar__nav a"));
  if (navLinks.length && "IntersectionObserver" in window) {
    const linkByHash = new Map(navLinks.map((a) => [a.getAttribute("href"), a]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkByHash.get("#" + entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    document.querySelectorAll("main section[id]").forEach((section) => {
      observer.observe(section);
    });
  }

  /* -----------------------------------------------------------------------
     (Reveal animation removed for predictable rendering. Cards already
     have a subtle hover lift via CSS; a hidden-on-load animation was
     not worth the risk of content staying invisible in non-scrolling
     rendering contexts such as print-to-PDF or full-page screenshots.)
     ----------------------------------------------------------------------- */
})();
