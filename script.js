// ملف التفاعلات script.js

document.addEventListener("DOMContentLoaded", function () {
    // تأثير Fade In عند تحميل الصفحة
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s";
        document.body.style.opacity = 1;
    }, 100);

    // تأثير Hover على البطاقات
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.boxShadow = "0 0 15px rgba(255, 215, 0, 0.8)";
            this.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
            this.style.transform = "scale(1)";
        });
    });

    // Lazy Loading للصور
    const images = document.querySelectorAll("img");
    const options = { rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    images.forEach(img => {
        if (img.dataset.src) {
            observer.observe(img);
        }
    });

    // إضافة زر الرجوع إلى الأعلى
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "⬆ أعلى";
    scrollTopBtn.classList.add("scroll-top");
    scrollTopBtn.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.bottom = "20px";
    scrollTopBtn.style.right = "20px";
    scrollTopBtn.style.padding = "10px 15px";
    scrollTopBtn.style.backgroundColor = "#FFD700";
    scrollTopBtn.style.color = "#000";
    scrollTopBtn.style.border = "none";
    scrollTopBtn.style.borderRadius = "5px";
    scrollTopBtn.style.cursor = "pointer";
    scrollTopBtn.style.display = "none";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
