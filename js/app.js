// =====================================================================
// Main app: renders data, wires interactions.
// =====================================================================
(function () {
  var DATA = window.PORTFOLIO_DATA;

  // --------------------------------------------------------------- Loader
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loader").classList.add("hidden");
    }, 600);
  });

  // --------------------------------------------------------------- AOS
  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 60, easing: "ease-out-cubic" });

  // --------------------------------------------------------------- Navbar
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  });

  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("open");
  });
  document.querySelectorAll("#nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.getElementById("nav-links").classList.remove("open");
    });
  });

  // --------------------------------------------------------------- Theme toggle
  var themeBtn = document.getElementById("theme-toggle");
  var saved = localStorage.getItem("theme");
  if (saved === "light") document.documentElement.classList.add("light");
  themeBtn.textContent = document.documentElement.classList.contains("light") ? "☀" : "☾";
  themeBtn.addEventListener("click", function () {
    var isLight = document.documentElement.classList.toggle("light");
    themeBtn.textContent = isLight ? "☀" : "☾";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // --------------------------------------------------------------- Hero
  var p = DATA.profile;
  document.getElementById("hero-tag").textContent = p.tagline;
  document.getElementById("resume-btn").href = p.resumeUrl;

  var socials = document.getElementById("hero-socials");
  var iconMap = { github: "GH", linkedin: "in", twitter: "X", credly: "🏅" };
  Object.keys(p.socials).forEach(function (k) {
    var a = document.createElement("a");
    a.href = p.socials[k];
    a.target = "_blank";
    a.rel = "noreferrer";
    a.className = "social-link";
    a.setAttribute("aria-label", k);
    a.textContent = iconMap[k] || k;
    socials.appendChild(a);
  });

  window.typeLoop(document.getElementById("typed"), p.typedRoles);

  // --------------------------------------------------------------- About
  document.getElementById("about-intro").textContent = DATA.about.intro;
  document.getElementById("goals").textContent = DATA.about.goals;

  var eduList = document.getElementById("education-list");
  DATA.about.education.forEach(function (e) {
    var li = document.createElement("li");
    li.innerHTML =
      "<p>" + e.school + "</p>" +
      "<p>" + e.program + "</p>" +
      "<p>" + e.year + "</p>";
    eduList.appendChild(li);
  });

  var stack = document.getElementById("stack");
  DATA.about.stack.forEach(function (t) {
    var s = document.createElement("span");
    s.className = "chip"; s.textContent = t;
    stack.appendChild(s);
  });

  // --------------------------------------------------------------- Certifications
  var state = { category: "All", query: "" };

  function escapeAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function badgeHTML(c) {
    var imageClass = c.image ? " has-image" : "";
    var image = c.image
      ? '<img class="badge-image" src="' + escapeAttr(c.image) + '" alt="' + escapeAttr(c.title) + ' badge" onerror="this.parentElement.classList.add(\'image-missing\')" />'
      : "";

    return '<div class="badge' + imageClass + '" style="background:' + c.accent + '">' +
           image +
           '  <div class="badge-inner">' +
           '    <div class="badge-icon">' + (c.icon || "🏅") + '</div>' +
           '    <div class="badge-label">' + c.badge + '</div>' +
           '    <div class="badge-issuer">' + c.issuer.split(" ")[0] + '</div>' +
           '  </div>' +
           '  <div class="watermark">© ' + DATA.profile.name + '</div>' +
           '  <div class="badge-shield"></div>' +
           '</div>';
  }

  function renderCerts() {
    var grid = document.getElementById("cert-grid");
    grid.innerHTML = "";
    var list = DATA.certifications.filter(function (c) {
      var okCat = state.category === "All" || c.category === state.category;
      var q = state.query.trim().toLowerCase();
      var okQ = !q || c.title.toLowerCase().indexOf(q) > -1 || c.issuer.toLowerCase().indexOf(q) > -1;
      return okCat && okQ;
    });
    if (!list.length) {
      grid.innerHTML = '<p class="empty">No certifications match your search.</p>';
      return;
    }
    list.forEach(function (c) {
      var card = document.createElement("div");
      card.className = "glass cert-card no-select";
      card.setAttribute("data-protected", "");
      card.innerHTML =
        '<div class="badge-wrap">' + badgeHTML(c) + '</div>' +
        '<div class="cert-head">' +
        '  <h3>' + c.title + '</h3>' +
        '  <span class="cert-cat">' + c.category + '</span>' +
        '</div>' +
        '<p class="cert-meta">' + c.issuer + ' · ' + c.date + '</p>';
      card.addEventListener("click", function () { openModal(c); });
      grid.appendChild(card);
    });
  }

  // Filters
  var filters = document.getElementById("cert-filters");
  DATA.categories.forEach(function (c) {
    var btn = document.createElement("button");
    btn.className = "filter-btn" + (c === "All" ? " active" : "");
    btn.textContent = c;
    btn.addEventListener("click", function () {
      state.category = c;
      filters.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderCerts();
    });
    filters.appendChild(btn);
  });
  document.getElementById("cert-search").addEventListener("input", function (e) {
    state.query = e.target.value;
    renderCerts();
  });
  renderCerts();

  // Modal
  function openModal(c) {
    var modal = document.getElementById("modal");
    var card = document.getElementById("modal-card");
    card.innerHTML =
      '<button class="modal-close" aria-label="Close">×</button>' +
      '<div class="modal-grid">' +
      '  <div class="modal-preview no-select" data-protected>' + badgeHTML(c) + '</div>' +
      '  <div>' +
      '    <p class="eyebrow">' + c.category + '</p>' +
      '    <h3 style="font-size:1.4rem;margin-top:4px">' + c.title + '</h3>' +
      '    <p class="cert-meta">' + c.issuer + ' · ' + c.date + '</p>' +
      '    <p class="muted small" style="margin-top:14px">' + c.description + '</p>' +
      '    <a href="' + c.verifyUrl + '" target="_blank" rel="noreferrer" class="btn btn-primary" style="margin-top:18px">Verify ↗</a>' +
      '  </div>' +
      '</div>';
    modal.hidden = false;
    card.querySelector(".modal-close").addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", escClose);
  }
  function closeModal() {
    document.getElementById("modal").hidden = true;
    document.removeEventListener("keydown", escClose);
  }
  function escClose(e) { if (e.key === "Escape") closeModal(); }

    // --------------------------------------------------------------- Projects
  var pg = document.getElementById("project-grid");
  DATA.projects.forEach(function (pr) {
    var card = document.createElement("article");
    card.className = "glass project-card";

    var hasShots = pr.screenshots && pr.screenshots.length;
    var slidesHTML = hasShots
      ? pr.screenshots.map(function (src, i) {
          return '<div class="thumb-slide' + (i === 0 ? ' active' : '') +
                 '" style="background-image:url(' + src + ')"></div>';
        }).join("")
      : "";
    var dotsHTML = hasShots && pr.screenshots.length > 1
      ? '<div class="thumb-dots">' +
          pr.screenshots.map(function (_, i) {
            return '<span' + (i === 0 ? ' class="active"' : '') + '></span>';
          }).join("") +
        '</div>'
      : "";

    card.innerHTML =
      '<div class="project-thumb' + (hasShots ? ' has-shots' : '') + '" style="background:' + pr.accent + '">' +
      slidesHTML +
      '  <div class="thumb-fade"></div>' +
      '  <div class="project-thumb-tech">' + pr.tech.join(" · ") + '</div>' +
      dotsHTML +
      '</div>' +
      '<div class="project-body">' +
      '  <h3>' + pr.title + '</h3>' +
      '  <p class="project-desc">' + pr.description + '</p>' +
      '  <div class="chips" style="margin-top:14px">' +
         pr.tech.map(function (t) { return '<span class="chip">' + t + '</span>'; }).join("") +
      '  </div>' +
      '  <div class="project-actions">' +
      '    <a href="' + pr.github + '" target="_blank" rel="noreferrer" class="btn btn-glass">⌨ Code</a>' +
      '    <a href="' + pr.demo + '" target="_blank" rel="noreferrer" class="btn btn-primary">Live ↗</a>' +
      '  </div>' +
      '</div>';
    pg.appendChild(card);

        // Auto-rotate screenshots — only while hovered or focused
    if (hasShots && pr.screenshots.length > 1) {
      var slides = card.querySelectorAll(".thumb-slide");
      var dots = card.querySelectorAll(".thumb-dots span");
      var idx = 0;
      var timer = null;

      function advance() {
        slides[idx].classList.remove("active");
        dots[idx].classList.remove("active");
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add("active");
        dots[idx].classList.add("active");
      }

      function start() {
        if (timer) return;
        timer = setInterval(advance, 1800);
      }
      function stop() {
        clearInterval(timer);
        timer = null;
      }

      card.addEventListener("mouseenter", start);
      card.addEventListener("mouseleave", stop);
      card.addEventListener("focusin", start);
      card.addEventListener("focusout", function (e) {
        // only stop if focus actually left the card (not moved to a link inside it)
        if (!card.contains(e.relatedTarget)) stop();
      });
    }

  // --------------------------------------------------------------- Skills
  var sg = document.getElementById("skill-grid");
  DATA.skills.forEach(function (g) {
    var box = document.createElement("div");
    box.className = "glass skill-group";
    box.innerHTML = '<h3>' + g.name + '</h3>' +
      g.items.map(function (s) {
        return '<div class="skill">' +
               '  <div class="skill-head"><span class="skill-name">' + s.name + '</span>' +
               '  <span class="skill-level">' + s.level + '%</span></div>' +
               '  <div class="skill-bar"><span class="skill-fill" data-level="' + s.level + '"></span></div>' +
               '</div>';
      }).join("");
    sg.appendChild(box);
  });

  // Animate skill bars when they scroll into view
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.level + "%";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".skill-fill").forEach(function (el) { io.observe(el); });

  // --------------------------------------------------------------- Contact
  var contactSocials = document.getElementById("contact-socials");
  var mail = document.createElement("a");
  mail.href = "mailto:" + p.email; mail.className = "social-link"; mail.textContent = "✉";
  mail.setAttribute("aria-label", "Email");
  contactSocials.appendChild(mail);
  Object.keys(p.socials).forEach(function (k) {
    var a = document.createElement("a");
    a.href = p.socials[k]; a.target = "_blank"; a.rel = "noreferrer";
    a.className = "social-link"; a.textContent = iconMap[k] || k;
    a.setAttribute("aria-label", k);
    contactSocials.appendChild(a);
  });

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = document.getElementById("submit-btn");
    btn.textContent = "Message sent ✓";
    btn.disabled = true;
    setTimeout(function () {
      btn.textContent = "Send message ➤";
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  });

  document.getElementById("copyright").textContent =
    "© " + new Date().getFullYear() + " " + p.name + ". Crafted with care.";
})();
