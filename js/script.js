document.addEventListener("DOMContentLoaded", () => {
  /* --- Navbar scroll --- */
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Hamburger --- */
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav-menu");
  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        menu.classList.remove("open");
      }),
    );
  }

  /* --- Smooth scroll --- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* --- Reveal on scroll --- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* --- Counter animation --- */
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const end = +el.dataset.count;
          const suffix = el.dataset.suffix || "";
          let cur = 0;
          const step = Math.max(1, Math.floor(end / 40));
          const tick = () => {
            cur += step;
            if (cur >= end) {
              el.textContent = end + suffix;
            } else {
              el.textContent = cur + suffix;
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
          cio.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((el) => cio.observe(el));

  /* --- Typing --- */
  const el = document.getElementById("typed");
  if (el) {
    const words = [
      "Full-Stack Developer",
      "UI/UX Enthusiast",
      "Problem Solver",
      "Tech Explorer",
    ];
    let w = 0,
      c = 0,
      del = false;
    function type() {
      const word = words[w];
      if (!del) {
        c++;
        el.textContent = word.slice(0, c);
        if (c === word.length) {
          del = true;
          setTimeout(type, 2200);
          return;
        }
        setTimeout(type, 75);
      } else {
        c--;
        el.textContent = word.slice(0, c);
        if (c === 0) {
          del = false;
          w = (w + 1) % words.length;
          setTimeout(type, 350);
          return;
        }
        setTimeout(type, 40);
      }
    }
    setTimeout(type, 600);
  }

  /* --- Contact Form Handler --- */
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    // Device-level check via LocalStorage
    if (localStorage.getItem("device_submitted") === "true") {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.textContent = "Message Already Sent";
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.5";
      submitBtn.style.cursor = "not-allowed";

      formStatus.style.display = "block";
      formStatus.style.background = "rgba(34,197,94,0.1)";
      formStatus.style.color = "#16A34A";
      formStatus.style.border = "1px solid rgba(34,197,94,0.2)";
      formStatus.textContent =
        "You've already sent a message from this device. Thank you!";

      // Disable inputs
      contactForm
        .querySelectorAll("input, textarea")
        .forEach((el) => (el.disabled = true));
    }

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Update UI to show sending state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
      formStatus.style.display = "none";

      try {
        const formData = new FormData(contactForm);
        // Convert to JSON
        const data = Object.fromEntries(formData.entries());

        const response = await fetch(contactForm.action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        formStatus.style.display = "block";
        if (result.success) {
          formStatus.style.background = "rgba(34,197,94,0.1)";
          formStatus.style.color = "#16A34A";
          formStatus.style.border = "1px solid rgba(34,197,94,0.2)";
          formStatus.textContent = result.message;

          // Save success to LocalStorage to block future attempts on this device
          localStorage.setItem("device_submitted", "true");

          contactForm.reset();
          submitBtn.textContent = "Message Sent";
          contactForm
            .querySelectorAll("input, textarea")
            .forEach((el) => (el.disabled = true));
        } else {
          console.error("FORM SUBMISSION ERROR DETAILS:", result);

          formStatus.style.background = "rgba(239,68,68,0.1)";
          formStatus.style.color = "#DC2626";
          formStatus.style.border = "1px solid rgba(239,68,68,0.2)";
          formStatus.textContent = result.message || "Something went wrong.";
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }
      } catch (error) {
        formStatus.style.display = "block";
        formStatus.style.background = "rgba(239,68,68,0.1)";
        formStatus.style.color = "#DC2626";
        formStatus.style.border = "1px solid rgba(239,68,68,0.2)";
        formStatus.textContent = "Network error. Please try again later.";
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }

  /* --- Project Modal Logic --- */
  const projectsData = {
    1: {
      title: "Patient Management System",
      description:
        "Web-Based Appointment and Patient Management System in Barangay Health Center Anabu II-F. Features user authentication, real-time appointment booking, patient record management, and an administrative dashboard.",
      url: "#",
      images: [
          "https://placehold.co/1200x800/10B981/FFF?text=ERP+System+-+Landing Page",
        "https://placehold.co/1200x800/059669/FFF?text=ERP+System+-+Admin Portal",
        "https://placehold.co/1200x800/047857/FFF?text=ERP+System+-+Patient Portal",
      ],
    },
    2: {
      title: "Enterprise Resource Planning",
      description:
        "Enterprise Resource Planning in Metro Truck Builders Inc. With Decision Support System. Includes appointment system, inventory management, financial tracking, and production planning.",
      url: "#",
      images: [
        "https://placehold.co/1200x800/10B981/FFF?text=ERP+System+-+CRM",
        "https://placehold.co/1200x800/059669/FFF?text=ERP+System+-+MRP",
        "https://placehold.co/1200x800/047857/FFF?text=ERP+System+-+SCM",
      ],
    },
    3: {
      title: "Unit Management System",
      description:
        "Marielle Building Unit & Space Management System. A property management platform featuring appointment scheduling, CRM, analytics, leasing and maintenance modules.",
      url: "#",
      images: [
        "https://placehold.co/1200x800/10B981/FFF?text=ERP+System+-+Landing Page",
        "https://placehold.co/1200x800/059669/FFF?text=ERP+System+-+Unit Management",
         "https://placehold.co/1200x800/059669/FFF?text=ERP+System+-+Admin Portal",
        "https://placehold.co/1200x800/047857/FFF?text=ERP+System+-+Client Portal",
      ],
    },
    4: {
      title: "Travel and Tours Management System",
      description:
        "Vantrippers Travel and Tours. A full-featured travel platform with hotel accommodation, van rental management, booking system, and invoicing.",
      url: "https://vantripperstravelandtours.com/home/home.php",
      images: [
        "images/van-img-1.png",
        "images/van-img-2.png",
        "images/van-img-3.png",
        "images/van-img-4.png",
        "images/van-img-5.png",
        "images/van-img-6.png",
        "images/van-img-7.png",
      ],
    },
    5: {
      title: "Content Management System",
      description:
        "Southmeats. Fitness tracking app with AI workout suggestions and nutrition planning powered by machine learning.",
      url: "https://southmeats.com/official/",
      images: [
        "images/sthmts-img-1.png",
        "images/sthmts-img-2.png",
        "images/sthmts-img-3.png",
        "images/sthmts-img-4.png",
        "images/sthmts-img-5.png",
        "images/sthmts-img-6.png",
        "images/sthmts-img-7.png",
        "images/sthmts-img-8.png",
      ],
    },
    6: {
      title: "Real Estate",
      description:
        "Izumi Residences. A collaborative task management platform with real-time updates, Kanban boards, and team analytics for streamlined project workflows.",
      url: "https://izumiresidences.com/",
      images: [
        "images/izm-img-1.png",
        "images/izm-img-2.png",
        "images/izm-img-3.png",
        "images/izm-img-4.png",
        "images/izm-img-5.png",
        "images/izm-img-6.png",
        "images/izm-img-7.png",
        "images/izm-img-8.png",
      ],
    },
    7: {
      title: "Vendor Accreditation",
      description:
        "JDC Group Vendor Accreditation System. A collaborative task management platform with real-time updates and team analytics for streamlined project workflows.",
      url: "https://vendor-accreditation.southmeats.com",
      images: [
        "images/vaf-img-1.png",
        "images/vaf-img-2.png",
        "images/vaf-img-3.png",
        "images/vaf-img-4.png",
        "images/vaf-img-5.png",
        "images/vaf-img-6.png",
      ],
    },
  };

  const modal = document.getElementById("project-modal");
  if (modal) {
    const modalImg = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalLink = document.getElementById("modal-link");
    const closeBtn = document.querySelector(".close-modal");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicatorsWrap = document.getElementById("modal-indicators");

    let currentProjId = null;
    let currentImgIndex = 0;

    const updateModalContent = () => {
      const proj = projectsData[currentProjId];
      if (!proj) return;

      modalImg.style.opacity = "0";
      setTimeout(() => {
        modalImg.src = proj.images[currentImgIndex];
        modalImg.style.opacity = "1";
      }, 150);

      modalTitle.textContent = proj.title;
      modalDesc.textContent = proj.description;

      if (proj.url) {
        modalLink.href = proj.url;
        modalLink.style.display = "inline-flex";
      } else {
        modalLink.style.display = "none";
      }

      // Update indicators
      indicatorsWrap.innerHTML = "";
      proj.images.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `indicator ${idx === currentImgIndex ? "active" : ""}`;
        dot.addEventListener("click", () => {
          currentImgIndex = idx;
          updateModalContent();
        });
        indicatorsWrap.appendChild(dot);
      });

      if (proj.images.length <= 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        prevBtn.style.display = "flex";
        nextBtn.style.display = "flex";
      }
    };

    document.querySelectorAll(".proj-link").forEach((link, idx) => {
      const ids = ["1", "2", "3", "4", "5", "6", "7"];
      // Store the id on the element to avoid scope capture issues if DOM changes
      link.setAttribute("data-proj-id", ids[idx]);

      link.addEventListener("click", (e) => {
        e.preventDefault();
        const pid = link.getAttribute("data-proj-id");
        if (projectsData[pid]) {
          currentProjId = pid;
          currentImgIndex = 0;
          updateModalContent();
          modal.classList.add("show");
          document.body.style.overflow = "hidden";
        }
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      document.body.style.overflow = "";
      setTimeout(() => {
        modalImg.src = "";
      }, 300);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeBtn.click();
    });

    prevBtn.addEventListener("click", () => {
      const proj = projectsData[currentProjId];
      currentImgIndex =
        (currentImgIndex - 1 + proj.images.length) % proj.images.length;
      updateModalContent();
    });

    nextBtn.addEventListener("click", () => {
      const proj = projectsData[currentProjId];
      currentImgIndex = (currentImgIndex + 1) % proj.images.length;
      updateModalContent();
    });

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("show")) return;
      if (e.key === "Escape") closeBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "ArrowRight") nextBtn.click();
    });
  }
});
