(() => {
  const S = window.SITE, $ = (s, r = document) => r.querySelector(s);
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h !== undefined) e.textContent = h; return e; };

  // Content
  const fill = (id, rows, make) => { const box = $(id); rows.forEach((r, i) => box.append(make(r, i))); };
  fill("#services-grid", S.services, ([t, d]) => { const c = el("article", "card"); c.append(el("h3", "", t), el("p", "", d)); return c; });
  fill("#skills-grid", S.skills, ([t, d, tools]) => {
    const c = el("article", "card"); c.append(el("h3", "", t), el("p", "", d));
    if (tools.length) { const u = el("ul", "chips"); tools.forEach(x => u.append(el("li", "", x))); c.append(u); }
    return c;
  });
  fill("#process-list", S.process, ([t, d]) => { const l = el("li"); l.append(el("h3", "", t), el("p", "", d)); return l; });

  const pg = $("#projects-grid");
  if (!S.projects.length) {
    const c = el("article", "card empty");
    c.append(el("h3", "", "Projects coming soon"), el("p", "", "Completed work will be listed here with screenshots, technologies and live links."));
    pg.append(c);
  }
  S.projects.forEach(p => {
    const c = el("article", "card project");
    if (p.image) { const i = el("img"); i.src = p.image; i.alt = `Screenshot of ${p.title}`; i.loading = "lazy"; i.width = 640; i.height = 400; c.append(i); }
    c.append(el("h3", "", p.title), el("p", "", p.description));
    if (p.tech?.length) { const u = el("ul", "chips"); p.tech.forEach(x => u.append(el("li", "", x))); c.append(u); }
    const row = el("div", "cta");
    [["Live demo", p.live], ["GitHub", p.github]].forEach(([l, u]) => { if (u) { const a = el("a", "btn", l); a.href = u; a.target = "_blank"; a.rel = "noopener"; row.append(a); } });
    c.append(row); pg.append(c);
  });

  // Contact + footer
  const mail = $("#email-link"); mail.href = "mailto:" + S.email; mail.textContent = S.email;
  if (S.whatsapp) { $("#wa-wrap").hidden = false; $("#wa-link").href = "https://wa.me/" + S.whatsapp.replace(/\D/g, ""); }
  S.socials.forEach(s => { if (!s.url) return; const a = el("a", "", s.label); a.href = s.url; a.target = "_blank"; a.rel = "noopener"; $("#foot-links").append(a); });
  const fl = $("#foot-links"); const em = el("a", "", "Email"); em.href = "mailto:" + S.email; fl.prepend(em);
  $("#year").textContent = new Date().getFullYear();

  // Mobile nav
  const nav = $(".nav"), burger = $(".burger");
  const setMenu = o => { nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  // Active link + reveal
  const links = [...document.querySelectorAll("#menu a")];
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.classList.toggle("on", l.hash === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rev = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rev.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(s => reduce ? s.classList.add("in") : rev.observe(s));

  // Logo-themed motion: rising candlesticks, scroll rail, mountain parallax
  const cs = $(".candles");
  [3, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17].forEach((h, i) => {
    const c = el("i", "candle" + (i % 3 === 1 ? " dn" : ""));
    c.style.setProperty("--h", 14 + h * 6 + "px"); c.style.setProperty("--y", i * 8 + "px"); c.style.setProperty("--d", i * 80 + "ms");
    cs.append(c);
  });
  document.querySelectorAll(".card").forEach(c => c.addEventListener("pointermove", e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--cx", e.clientX - r.left + "px"); c.style.setProperty("--cy", e.clientY - r.top + "px");
  }));
  const glow = $(".glow");
  if (!reduce && matchMedia("(pointer:fine)").matches) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, run = false;
    const loop = () => {
      x += (tx - x) * .08; y += (ty - y) * .08; glow.style.transform = `translate(${x}px,${y}px)`;
      if (Math.abs(tx - x) + Math.abs(ty - y) > .5) requestAnimationFrame(loop); else run = false;
    };
    addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; glow.classList.add("on"); if (!run) { run = true; requestAnimationFrame(loop); } });
  }
  const root = document.documentElement; let tick = false;
  const onScroll = () => {
    tick = false; const m = root.scrollHeight - innerHeight;
    root.style.setProperty("--p", m > 0 ? Math.min(scrollY / m, 1) : 0);
    if (!reduce) root.style.setProperty("--my", Math.min(scrollY * .18, 90) + "px");
  };
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Form
  const form = $("#enquiry"), status = $("#status");
  const rules = {
    name: v => v.trim().length >= 2 || "Enter your name.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address.",
    type: v => !!v || "Choose a project type.",
    budget: v => !!v || "Choose a budget range.",
    message: v => v.trim().length >= 20 || "Describe your project in at least 20 characters."
  };
  const check = k => { const m = rules[k](form[k].value), o = $(`[data-for="${k}"]`); o.textContent = m === true ? "" : m; form[k].setAttribute("aria-invalid", m !== true); return m === true; };
  Object.keys(rules).forEach(k => form[k].addEventListener("blur", () => check(k)));
  form.addEventListener("submit", async e => {
    e.preventDefault(); status.className = "";
    const bad = Object.keys(rules).filter(k => !check(k));
    if (bad.length) { form[bad[0]].focus(); status.textContent = "Please fix the highlighted fields."; status.className = "bad"; return; }
    if (form.website.value) return; // honeypot
    const d = Object.fromEntries(new FormData(form)); delete d.website;
    if (!S.formEndpoint) {
      const body = `Name: ${d.name}\nEmail: ${d.email}\nProject: ${d.type}\nBudget: ${d.budget}\n\n${d.message}`;
      location.href = `mailto:${S.email}?subject=${encodeURIComponent("Project enquiry: " + d.type)}&body=${encodeURIComponent(body)}`;
      status.textContent = "Opening your email app. If nothing opens, email me directly at " + S.email + "."; return;
    }
    const btn = $("button", form); btn.disabled = true; status.textContent = "Sending…";
    try {
      const r = await fetch(S.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error(r.status);
      form.reset(); status.textContent = "Thanks, your enquiry was sent. I'll reply by email soon."; status.className = "ok";
    } catch { status.textContent = "Couldn't send your enquiry. Check your connection and try again, or email " + S.email + "."; status.className = "bad"; }
    btn.disabled = false;
  });
})();
