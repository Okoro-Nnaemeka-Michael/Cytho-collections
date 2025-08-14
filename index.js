document.addEventListener("DOMContentLoaded", () => {
    const animatedEls = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-animate-active");
                observer.unobserve(entry.target); // run once
            }
        });
    }, { threshold: 0.2 });

    animatedEls.forEach(el => observer.observe(el));
});
