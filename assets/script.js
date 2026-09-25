// Fades each .panel in as it scrolls into view.
// Used on reader pages (comics/*/index.html).

document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  if (!panels.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  panels.forEach((panel) => observer.observe(panel));
});
