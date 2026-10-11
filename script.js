/* =====================================================================
   PORTFOLIO SCRIPT
   ---------------------------------------------------------------------
   1) EDIT EVERYTHING IN THE "CONFIG" BLOCK BELOW. You should not need to
      touch anything under the "ENGINE" line unless you want to change behaviour.
   2) Items marked  EDIT ME  are placeholders or estimates.
   ===================================================================== */

/* ============================== CONFIG ============================== */
const CONFIG = {
  // ---- Identity ----
  name: "Vishal Kumar Sharma",
  brand: "Vishal.",                                   // logo text in the navbar
  roles: ["CSE Student", "Web Developer", "Problem Solver"],   // typing animation (add more if you like)
  tagline: "I build things with AI/ML, the web and 2D games, and I'm exploring quant.",

  // ---- About ----
  bio:
    "I'm a second-year B.Tech CSE student at JECRC University in Jaipur. I'm ambitious and most " +
    "interested in AI/ML, 2D game design and quantitative finance. I like turning ideas into working " +
    "projects, from an offline file-sharing drive to an AI-assisted alumni network.",
  openTo: ["Internships", "Hackathons", "Open-source", "Freelance projects"],   // EDIT ME: keep the ones you want
  facts: [
    { label: "College",  value: "JECRC University" },
    { label: "CGPA",     value: "9.5" },                  // EDIT ME: update each semester
    { label: "Year",     value: "2nd year, 3rd semester" },
    { label: "Location", value: "Jaipur, India" },
  ],

  // ---- Files (put these next to index.html, see README) ----
  photoFile: "assets/photo.jpg",
  resumeFile: "resume.pdf",

  // ---- Contact ----
  email: "Sharmavishal87512@gmail.com",
  phone: "+916206450830",
  phoneDisplay: "+91 62064 50830",
  linkedin: "https://www.linkedin.com/in/vishalshar_dev",
  linkedinHandle: "@vishalshar_dev",
  github: "https://github.com/vishalshar_dev",          // EDIT ME: GitHub usernames normally can't contain "_", so double-check
  githubHandle: "@vishalshar_dev",
  // Optional: paste a Formspree (or similar) endpoint to receive form messages directly.
  // Leave "" and the form opens the visitor's email app instead.
  formEndpoint: "",

  // ---- Skills (level is 0-100, shown as the bar). EDIT ME: set honest levels ----
  skills: [
    { group: "Languages", icon: "code", items: [
      { name: "C", level: 80 }, { name: "C++", level: 80 }, { name: "Python", level: 85 }, { name: "Java", level: 70 } ] },
    { group: "Web", icon: "globe", items: [
      { name: "HTML", level: 90 }, { name: "CSS", level: 85 }, { name: "JavaScript", level: 80 }, { name: "React", level: 70 } ] },
    { group: "Tools", icon: "tools", items: [
      { name: "Git", level: 80 }, { name: "GitHub", level: 80 }, { name: "VS Code", level: 90 }, { name: "MySQL", level: 70 } ] },
    { group: "CS Fundamentals", icon: "cpu", items: [
      { name: "DSA", level: 75 }, { name: "OOP", level: 80 }, { name: "DBMS", level: 70 }, { name: "OS", level: 65 } ] },
  ],

  // ---- Projects. Leave "live" as "" to show a disabled "Live demo" button until you have one ----
  projects: [
    {
      title: "Offline Local Drive",
      icon: "folder",
      description:
        "A Google Drive-style app that shares files and study resources over a local network, so " +
        "classmates can upload, browse and download without any internet connection.",
      tech: ["Python", "Flask", "HTML/CSS/JS", "LAN"],   // EDIT ME: match the stack you actually used
      github: "https://github.com/vishalshar_dev",        // EDIT ME: link to this project's repo
      live: "",                                           // EDIT ME: demo link, or leave empty
    },
    {
      title: "AI-Assisted Alumni Network",
      icon: "users",
      description:
        "A website where students connect with alumni and get guidance. AI suggests relevant alumni " +
        "and helps peers find the right mentor faster.",
      tech: ["React", "Node.js", "MySQL", "AI/ML"],       // EDIT ME: match the stack you actually used
      github: "https://github.com/vishalshar_dev",        // EDIT ME
      live: "",                                           // EDIT ME
    },
    {
      title: "Your third project",
      icon: "plus",
      placeholder: true,                                  // remove this line once you fill the card in
      description:
        "EDIT ME: add a project here. One or two sentences on what it does and what you learned. " +
        "An AI/ML or 2D game project would suit your interests.",
      tech: ["Tech 1", "Tech 2"],
      github: "https://github.com/vishalshar_dev",
      live: "",
    },
  ],

  // ---- Education (newest first) ----
  education: [
    { title: "B.Tech in Computer Science and Engineering (Core)", where: "JECRC University, Jaipur",
      when: "2025 - 2029", score: "CGPA 9.5", current: true },
    { title: "Class XII (12th)", where: "EDIT ME: school name", when: "", score: "81.0%" },
    { title: "Class X (10th)",   where: "EDIT ME: school name", when: "", score: "97.6%" },
  ],

  // ---- Achievements & certifications ----
  // EDIT ME: these four are SAMPLE slots, not real achievements. Replace each with something you
  // actually did (or delete it). Remove "sample: true" once a card is real so the badge disappears.
  achievements: [
    { type: "hackathon",   title: "Hackathon name and result",         detail: "Team project, what you built, and your placing.", sample: true },
    { type: "contest",     title: "LeetCode: problems solved / rating", detail: "Add your solved count or contest rating and your profile link.", sample: true },
    { type: "contest",     title: "CodeChef / Codeforces rating",       detail: "Add your current rating or star level.", sample: true },
    { type: "certificate", title: "NPTEL / Coursera certificate",       detail: "Course name, issuer and year.", sample: true },
  ],
};
/* ============================ END CONFIG ============================ */


/* =====================================================================
   ENGINE: you normally don't need to edit below this line
   ===================================================================== */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Inline SVG icons (24x24, stroke style) ---------- */
const ICON_PATHS = {
  code:   '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
  globe:  '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  tools:  '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-.7-.7-2.3z"/>',
  cpu:    '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  users:  '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M17 4.5a3.5 3.5 0 0 1 0 7M22 20c0-2.8-1.8-4.8-4.5-5.6"/>',
  plus:   '<path d="M12 5v14M5 12h14"/>',
  hackathon:   '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  contest:     '<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',
  certificate: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  mail:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone:    '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.01M12 17v-6M12 13a3 3 0 0 1 6 0v4"/>',
  github:   '<path d="M9 19c-4.5 1.5-4.5-2-6-2.5m12 5v-3.5a3 3 0 0 0-.8-2.3c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.4 4.4 0 0 0-.1 3.3A4.8 4.8 0 0 0 4 9.7c0 4.8 3 5.9 5.8 6.2a3 3 0 0 0-.8 2.3V22"/>',
};
const icon = (name, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;

/* ---------- Fill the page from CONFIG ---------- */
function renderHero() {
  document.title = `${CONFIG.name} | CSE Student, AI/ML and Web Developer`;
  $("#brandName").textContent = CONFIG.brand;
  $("#heroName").textContent = CONFIG.name;
  $("#heroTagline").textContent = CONFIG.tagline;
  $("#resumeBtnHero").setAttribute("href", CONFIG.resumeFile);
  $("#resumeBtn").setAttribute("href", CONFIG.resumeFile);
}

function renderAbout() {
  $("#aboutBio").textContent = CONFIG.bio;
  $("#aboutOpen").textContent = CONFIG.openTo.length ? `Open to: ${CONFIG.openTo.join(", ")}.` : "";
  $("#quickFacts").innerHTML = CONFIG.facts
    .map((f) => `<li><span class="k">${esc(f.label)}</span><span class="v">${esc(f.value)}</span></li>`)
    .join("");

  // Show the photo only if the file really exists, otherwise keep the placeholder
  const img = $("#profilePhoto"), ph = $("#photoPlaceholder");
  const show = () => { img.hidden = false; ph.hidden = true; };
  img.addEventListener("load", show);
  img.addEventListener("error", () => { img.hidden = true; ph.hidden = false; });
  img.setAttribute("src", CONFIG.photoFile);
  if (img.complete && img.naturalWidth > 0) show();
}

function renderSkills() {
  $("#skillsGrid").innerHTML = CONFIG.skills
    .map((g) => `
      <article class="skill-group reveal">
        <div class="skill-head">${icon(g.icon)}<h3>${esc(g.group)}</h3></div>
        <div class="skill-list">
          ${g.items.map((s) => `
            <div class="skill">
              <div class="skill-row"><span>${esc(s.name)}</span><span class="pct">${Number(s.level)}%</span></div>
              <div class="bar" role="img" aria-label="${esc(s.name)} level ${Number(s.level)} percent"><span data-level="${Number(s.level)}"></span></div>
            </div>`).join("")}
        </div>
      </article>`)
    .join("");
}

function renderProjects() {
  $("#projectsGrid").innerHTML = CONFIG.projects
    .map((p) => `
      <div class="reveal stretch">
        <article class="card${p.placeholder ? " placeholder" : ""}">
          ${icon(p.icon, "card-icon")}
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="card-links">
            ${p.github ? `<a class="btn btn-ghost" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}
            ${p.live
              ? `<a class="btn btn-primary" href="${esc(p.live)}" target="_blank" rel="noopener">Live demo</a>`
              : `<span class="btn btn-ghost" aria-disabled="true" title="Demo link coming soon" style="opacity:.5;cursor:not-allowed">Live demo soon</span>`}
          </div>
        </article>
      </div>`)
    .join("");
}

function renderEducation() {
  $("#timeline").innerHTML = CONFIG.education
    .map((e) => `
      <li class="tl-item reveal${e.current ? " current" : ""}">
        ${e.when ? `<span class="tl-when">${esc(e.when)}</span>` : ""}
        <h3>${esc(e.title)}</h3>
        <p class="tl-where">${esc(e.where)}</p>
        <span class="tl-score">${esc(e.score)}</span>
      </li>`)
    .join("");
}

function renderAchievements() {
  $("#achGrid").innerHTML = CONFIG.achievements
    .map((a) => `
      <div class="reveal stretch">
        <article class="ach">
          ${icon(a.type)}
          <div>
            <h3>${esc(a.title)}</h3>
            <p>${esc(a.detail)}</p>
            ${a.sample ? '<span class="badge edit-me">Sample, edit me</span>' : ""}
          </div>
        </article>
      </div>`)
    .join("");
}

function renderContact() {
  const items = [
    { icon: "mail",     label: "Email",    value: CONFIG.email,          href: `mailto:${CONFIG.email}` },
    { icon: "linkedin", label: "LinkedIn", value: CONFIG.linkedinHandle, href: CONFIG.linkedin },
    { icon: "github",   label: "GitHub",   value: CONFIG.githubHandle,   href: CONFIG.github },
    { icon: "phone",    label: "Phone",    value: CONFIG.phoneDisplay,   href: `tel:${CONFIG.phone}` },
  ];
  $("#contactList").innerHTML = items
    .map((c) => {
      const external = c.href.startsWith("http");
      return `<li><a href="${esc(c.href)}"${external ? ' target="_blank" rel="noopener"' : ""}>
        ${icon(c.icon)}<span><span class="lbl">${esc(c.label)}</span><span class="val">${esc(c.value)}</span></span></a></li>`;
    })
    .join("");
  $("#footerText").textContent = `\u00A9 ${new Date().getFullYear()} ${CONFIG.name}. Built with HTML, CSS and JavaScript.`;
}

/* ---------- Typing animation ---------- */
function startTyping() {
  const el = $("#typed");
  const roles = CONFIG.roles;
  if (reduceMotion || roles.length < 2) { el.textContent = roles[0] || ""; return; }
  let i = 0, j = 0, deleting = false;
  (function tick() {
    const word = roles[i];
    el.textContent = word.slice(0, j);
    let delay = deleting ? 45 : 90;
    if (!deleting && j === word.length) { deleting = true; delay = 1500; }   // pause on the full word
    else if (deleting && j === 0)       { deleting = false; i = (i + 1) % roles.length; delay = 300; }
    else                                { j += deleting ? -1 : 1; }
    setTimeout(tick, delay);
  })();
}

/* ---------- Particle network background (hero) ---------- */
function startParticles() {
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  const hero = $("#hero");
  let w = 0, h = 0, dpr = 1, particles = [], raf = 0, visible = true;
  const mouse = { x: -9999, y: -9999 };
  let dot = "#38bdf8", line = "#a78bfa";

  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    dot = cs.getPropertyValue("--blue").trim() || dot;
    line = cs.getPropertyValue("--purple").trim() || line;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.clientWidth; h = hero.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(85, Math.floor((w * h) / 17000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.8,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      // gentle push away from the mouse
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 9000) { p.x += dx * 0.02; p.y += dy * 0.02; }
    }
    ctx.fillStyle = dot;
    for (const p of particles) {
      ctx.globalAlpha = 0.8;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.strokeStyle = line;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x, dy = particles[a].y - particles[b].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.globalAlpha = (1 - d / 120) * 0.35;
          ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion && visible && !document.hidden) raf = requestAnimationFrame(frame);
    else raf = 0;
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };

  readColors(); resize(); kick();
  window.addEventListener("resize", () => { resize(); kick(); });
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  document.addEventListener("visibilitychange", kick);
  // Pause drawing when the hero is off-screen
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) kick(); }).observe(hero);
  // Recolour when the theme changes
  window.addEventListener("themechange", () => { readColors(); kick(); });
}

/* ---------- Theme toggle (dark / light) ---------- */
function setupTheme() {
  const root = document.documentElement;
  const meta = $('meta[name="theme-color"]');
  const apply = (t) => {
    if (t === "light") root.setAttribute("data-theme", "light"); else root.removeAttribute("data-theme");
    if (meta) meta.setAttribute("content", t === "light" ? "#f6f7fd" : "#0a0d1f");
  };
  apply(root.getAttribute("data-theme") === "light" ? "light" : "dark");
  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: ignore */ }
    window.dispatchEvent(new Event("themechange"));
  });
}

/* ---------- Navbar: mobile menu, shadow on scroll, active section ---------- */
function setupNav() {
  const nav = $("#navbar"), links = $("#navLinks"), btn = $("#menuToggle");
  const closeMenu = () => { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  $$("a", links).forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  // Highlight the link of the section in the middle of the screen
  const navLinks = $$("[data-nav]");
  const byId = Object.fromEntries(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.classList.remove("active"));
      const link = byId[en.target.id];
      if (link) link.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(byId).forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  // Clear the highlight while the hero is showing
  new IntersectionObserver(([en]) => { if (en.isIntersecting) navLinks.forEach((a) => a.classList.remove("active")); },
    { rootMargin: "-45% 0px -50% 0px" }).observe($("#hero"));
}

/* ---------- Fade-in on scroll + animated skill bars ---------- */
function setupReveal() {
  const items = $$(".reveal");
  // Slight stagger for items inside the same grid
  $$(".skills-grid, .projects-grid, .ach-grid").forEach((grid) =>
    Array.from(grid.children).forEach((c, i) => { c.style.transitionDelay = `${(i % 4) * 90}ms`; }));

  const fillBars = (root) => $$(".bar > span", root).forEach((b) => { b.style.width = b.dataset.level + "%"; });

  if (!("IntersectionObserver" in window) || reduceMotion) {
    items.forEach((el) => { el.classList.add("visible"); fillBars(el); });
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("visible");
      fillBars(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
}

/* ---------- Resume preview ---------- */
function setupResume() {
  const frame = $("#resumeFrame"), empty = $("#resumeEmpty");
  // Only show the preview if the PDF actually exists (works once hosted or served over http)
  fetch(CONFIG.resumeFile, { method: "HEAD" })
    .then((r) => {
      if (!r.ok) return;
      frame.src = CONFIG.resumeFile + "#toolbar=0&navpanes=0";
      frame.hidden = false; empty.hidden = true;
    })
    .catch(() => { /* no file or opened from disk: keep the placeholder */ });
}

/* ---------- Contact form ---------- */
function setupForm() {
  const form = $("#contactForm"), status = $("#formStatus");
  const say = (msg, kind) => { status.textContent = msg; status.className = "form-status " + (kind || ""); };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.name.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
    if (!name || !message) return say("Please enter your name and a message.", "err");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return say("Please enter a valid email address.", "err");

    if (CONFIG.formEndpoint) {
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error("bad response");
        form.reset(); say("Message sent. Thanks, I'll reply soon.", "ok");
      } catch (err) {
        say("Couldn't send the message. Please email me directly instead.", "err");
      }
    } else {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
      window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
      say("Opening your email app. Press send there to finish.", "ok");
    }
  });
}

/* ---------- Back to top ---------- */
function setupToTop() {
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
}

/* ---------- Start everything ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHero(); renderAbout(); renderSkills(); renderProjects();
  renderEducation(); renderAchievements(); renderContact();
  setupTheme(); setupNav(); setupReveal(); setupResume(); setupForm(); setupToTop();
  startTyping(); startParticles();
});
