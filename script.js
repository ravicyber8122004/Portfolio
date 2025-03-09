// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Navbar Active Link Highlight on Scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll("section");
    let scrollY = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 60; // Adjusting for Navbar Height
        let sectionHeight = section.offsetHeight;
        let id = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector("nav ul li a[href*=" + id + "]").classList.remove("active");
        }
    });
});

// Back to Top Button
let topButton = document.createElement("button");
topButton.innerHTML = "⬆";
topButton.id = "backToTop";
document.body.appendChild(topButton);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
