function removeVideoEntry() {
  const videoEntry = document.getElementById("video-entry");

  if (videoEntry) {
    videoEntry.addEventListener("animationend", () => {
      videoEntry.remove();
    });
  }
}

const sections = document.querySelectorAll(
  ".section-1, .section-2, .section-3, .section-4, .section-5, .section-6, .section-7, .section-8, .section-9",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

sections.forEach((section) => observer.observe(section));

removeVideoEntry();
