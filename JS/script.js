document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const navLinks2 = document.querySelectorAll(".nav-links2 a");
    const sections = document.querySelectorAll(".page-section");

    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });
    }

    function highlightActiveLink(activeLink) {
        navLinks.forEach(link => {
            if (link === activeLink) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            showSection(targetId);
            highlightActiveLink(link);
        });
    });

    showSection("home");
    highlightActiveLink(document.querySelector(".nav-links a[href='#home']"));

    document.getElementById('logo').addEventListener('click', function () {
        location.reload();
    });

    document.querySelectorAll(".icon-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add("flipped");
        });

        box.addEventListener("mouseleave", () => {
            box.classList.remove("flipped");
        });
    });

    navLinks2.forEach(link => {
        link.classList.remove('active');
    });

    function highlightActiveLink(activeLink) {
        navLinks2.forEach(link => {
            if (link === activeLink) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    navLinks2.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            showSection(targetId);
            highlightActiveLink(link);
        });
    });

    showSection("home");
    highlightActiveLink(document.querySelector(".nav-links2 a[href='#home']"));

    document.getElementById('logo').addEventListener('click', function () {
        location.reload();
    });

    document.querySelectorAll(".icon-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add("flipped");
        });

        box.addEventListener("mouseleave", () => {
            box.classList.remove("flipped");
        });
    });

    navLinks2.forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.projeto-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        card.addEventListener('mouseleave', () => {
            if (card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            }
        });
    });

    document.querySelectorAll('.icon-box').forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('flipped');
        });

        box.addEventListener('mouseleave', () => {
            if (box.classList.contains('flipped')) {
                box.classList.remove('flipped');
            }
        });
    });

    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            header.style.top = '-9vw';
        } else {
            header.style.top = '0';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    let lastScrollDown = 0;
    const navL = document.getElementById('NavL');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
        if (currentScroll > lastScrollDown) {
            navL.style.bottom = '-20vw';
        } else {
            navL.style.bottom = '2vw';
        }
    
        lastScrollDown = currentScroll <= 0 ? 0 : currentScroll;
    });    

    document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll(
            "#home p, #home .home-container, #home .home-photo, #home button, #home .text-box, #home .icon-container, #home h4, #home .CM-photo, #home .texto-contato, #home h2"
        );

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            element.classList.add("hidden");
            observer.observe(element);
        });
    });


    const toggleButton = document.getElementById('toggleButton');
    const textBox = document.querySelector('.text-box');

    toggleButton.addEventListener('click', () => {
        if (textBox.classList.contains('hidden')) {
            textBox.classList.remove('hidden');
            setTimeout(() => textBox.classList.add('visible'), 10);
        } else {
            textBox.classList.remove('visible');
            setTimeout(() => textBox.classList.add('hidden'), 500);
        }
    });

    document.getElementById("contactButton").addEventListener("click", () => {
        window.location.href = "mailto:a_simao@icloud.com.com";
    });

});
