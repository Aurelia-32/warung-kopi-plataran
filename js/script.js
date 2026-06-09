/* =========================================
   Warung Kopi Plataran - Main script
   Single-page smooth scroll with book menu
   Logo left, nav links right
   ========================================= */

(function () {
  "use strict";

  /* ---------- Logo SVG ---------- */
  function logoSVG() {
    return `
      <svg viewBox="0 0 100 80" aria-hidden="true">
        <path d="M18 50 Q55 42 88 28 Q72 40 50 50 Q72 48 90 38"
              fill="none" stroke="#d99836" stroke-width="6" stroke-linecap="round"/>
        <path d="M50 50 L62 18 Q66 24 72 22"
              fill="none" stroke="#d99836" stroke-width="6" stroke-linecap="round"/>
        <path d="M55 50 L55 74"
              fill="none" stroke="#d99836" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `;
  }

  function buildLogo(variant) {
    const isLight = variant === "light";
    return `
      <a href="#home" class="logo nav-logo-link" aria-label="Beranda">
        <img
        src="images/logo.png"
        alt="Warung Kopi Plataran"
        style="height:60px;"
        >
        <span class="logo-text">
          <span class="top ${isLight ? "is-light" : "is-dark"}">Warung Kopi</span>
          <span class="brand ${isLight ? "is-light" : "is-dark"}">Plataran</span>
        </span>
      </a>
    `;
  }

  /* ---------- Header ---------- */
  function buildHeader() {
    const links = [
      { label: "Home",     href: "#home"    },
      { label: "About Us", href: "#about"   },
      { label: "Menu",     href: "#menu"    },
      { label: "Contact",  href: "#contact" }
    ];
    const navLinks = links.map(l => `
      <li><a href="${l.href}" class="nav-link smooth-link" data-target="${l.href}">${l.label}</a></li>
    `).join("");
    const mobileLinks = links.map(l => `
      <li><a href="${l.href}" class="smooth-link" data-target="${l.href}">${l.label}</a></li>
    `).join("");

    return `
      <header class="site-header" id="siteHeader">
        <div class="nav-inner">
          <!-- LOGO - pushed to the far left by flex justify-content:space-between -->
          <div class="brand">${buildLogo("light")}</div>

          <!-- NAV LINKS - pushed to the right -->
          <ul class="nav-links">${navLinks}</ul>

          <!-- HAMBURGER - right aligned on mobile via margin-left: auto -->
          <button class="hamburger" id="hamburger" aria-label="Buka menu" aria-expanded="false">
            <span class="bars"><span></span><span></span><span></span></span>
          </button>
        </div>
        <div class="mobile-menu" id="mobileMenu">
          <ul>${mobileLinks}</ul>
        </div>
      </header>
    `;
  }

  function buildFooter() {
    return `
      <footer class="site-footer">
        <div class="site-footer__inner">
          ${buildLogo("light")}
          <p class="site-footer__tagline">Masakan Khas Bojonegoro · Resep Keluarga · Sejak 2018</p>
          <div class="site-footer__divider"></div>
          <p class="site-footer__copy">© 2026 Warung Kopi Plataran. All rights reserved.</p>
        </div>
      </footer>
    `;
  }

  /* ---------- Smooth scroll + active state ---------- */
  function initSmoothScroll() {
    const header = document.getElementById("siteHeader");

    function scrollToSection(target) {
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const absoluteTop = rect.top + window.pageYOffset;
      window.scrollTo({ top: absoluteTop, behavior: "smooth" });
    }

    document.querySelectorAll(".smooth-link, .nav-logo-link").forEach(link => {
      link.addEventListener("click", e => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            scrollToSection(target);
            updateActive(href);
            const mm = document.getElementById("mobileMenu");
            const mb = document.getElementById("hamburger");
            if (mm && mb) {
              mm.classList.remove("is-open");
              mb.classList.remove("is-open");
              mb.setAttribute("aria-expanded", "false");
            }
          }
        }
      });
    });

    function updateActive(active) {
      document.querySelectorAll(".nav-links .nav-link").forEach(link => {
        const target = link.getAttribute("data-target");
        link.classList.toggle("is-active", target === active);
      });
    }

    const sections = ["home", "about", "menu", "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean);

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
          const navH = header ? header.offsetHeight : 0;
          let current = "home";
          const threshold = window.innerHeight * 0.4;
          for (const sec of sections) {
            const top = sec.getBoundingClientRect().top;
            if (top - navH < threshold) current = sec.id;
          }
          updateActive("#" + current);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Header/Footer + mobile menu ---------- */
  function initChrome() {
    const hh = document.getElementById("appHeader");
    const fh = document.getElementById("appFooter");
    if (hh) hh.innerHTML = buildHeader();
    if (fh) fh.innerHTML = buildFooter();

    const header = document.getElementById("siteHeader");
    const burger = document.getElementById("hamburger");
    const mobile = document.getElementById("mobileMenu");

    if (burger && mobile) {
      burger.addEventListener("click", () => {
        const open = mobile.classList.toggle("is-open");
        burger.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", String(open));
        burger.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      });
    }

    initSmoothScroll();
  }

  /* ---------- Leaf renderers ---------- */
  function cupSVG() {
    return `
      <svg viewBox="0 0 64 64" aria-hidden="true" style="height:48px;width:48px;">
        <path d="M14 24 h28 v12 a14 14 0 0 1 -28 0 z" fill="none" stroke="var(--gold)" stroke-width="2"/>
        <path d="M42 27 h6 a6 6 0 0 1 0 12 h-3" fill="none" stroke="var(--gold)" stroke-width="2"/>
        <path d="M22 14 q2 3 0 6 M30 14 q2 3 0 6" fill="none" stroke="var(--gold)" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="14" y1="46" x2="42" y2="46" stroke="var(--gold)" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  }

  function bestBadge() {
    return `<span class="best-inline">Best Seller</span>`;
  }

  function renderCover() {
    return `
      <div class="leaf-cover">
        <div style="display:inline-flex;align-items:center;gap:12px;">
          ${logoSVG()}
          <span class="logo-text">
            <span class="top is-light">Warung Kopi</span>
            <span class="brand is-light">Plataran</span>
          </span>
        </div>
        <div class="leaf-cover__divider"></div>
        <h2 class="leaf-cover__title">Buku Menu</h2>
        <span class="leaf-cover__since">Sejak 2018</span>
      </div>
    `;
  }

  function renderBack() {
    return `
      <div class="leaf-back">
        <h2 class="leaf-back__title">Terima Kasih</h2>
        <p class="leaf-back__text">Selamat menikmati sajian khas Bojonegoro kami.</p>
        <a href="#contact" class="leaf-back__btn smooth-link" data-target="#contact">Hubungi Kami</a>
      </div>
    `;
  }

  function renderPhoto(content) {
    const it = content.item;
    const photo = (it.has_photo && it.photo)
      ? `<div class="dish-frame">
           <div class="dish-img-wrap"><img src="${it.photo}" alt="${escapeHtml(it.nama)}" class="dish-img" loading="lazy"></div>
         </div>`
      : `<div class="border-craft">${cupSVG()}</div>`;

    return `
      <div class="leaf-photo">
        <p class="leaf-photo__label">${escapeHtml(content.label)}</p>
        ${photo}
        <h4 class="leaf-photo__name">
          ${escapeHtml(it.nama)}${it.best ? bestBadge() : ""}
        </h4>
        <span class="leaf-photo__accent"></span>
      </div>
    `;
  }

  function renderMenuRow(item) {
    return `
      <div class="menu-row">
        <span class="menu-row__name">
          <span class="menu-row__name-text">${escapeHtml(item.nama)}</span>
          ${item.best ? bestBadge() : ""}
        </span>
        <span class="menu-row__dots"></span>
        <span class="menu-row__price">${window.formatRupiah(item.harga)}</span>
      </div>
    `;
  }

  function renderList(content) {
    const groups = content.groups.map(grp => `
      <div class="leaf-list__group">
        <h4 class="leaf-list__group-title">${escapeHtml(grp.title)}</h4>
        ${grp.subtitle ? `<p class="leaf-list__group-sub">${escapeHtml(grp.subtitle)}</p>` : ""}
        <div>${grp.items.map(renderMenuRow).join("")}</div>
      </div>
    `).join("");

    return `
      <div class="leaf-list">
        <div class="leaf-list__head">
          <h3 class="leaf-list__title">${escapeHtml(content.title)}</h3>
          <span class="leaf-list__accent"></span>
        </div>
        <div class="leaf-list__body">${groups}</div>
      </div>
    `;
  }

  function renderLeaf(content) {
    switch (content.kind) {
      case "cover": return renderCover();
      case "back":  return renderBack();
      case "photo": return renderPhoto(content);
      case "list":  return renderList(content);
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  /* ---------- Book + mobile list ---------- */
  function initMenuPage() {
    const desktopRoot = document.getElementById("bookDesktop");
    const mobileRoot  = document.getElementById("mobileListRoot");
    if (!desktopRoot && !mobileRoot) return;

    const spreads = window.spreads;
    const total   = spreads.length;
    let page = 0;
    let busy = false;
    let anim = "idle";

    const isMobile = () => window.innerWidth < 700;

    function renderDesktop() {
      if (!desktopRoot) return;
      const cur = spreads[page];
      const nxt = page < total - 1 ? spreads[page + 1] : null;
      const prv = page > 0 ? spreads[page - 1] : null;

      const leftUnder  = (anim === "prev" && prv) ? prv.left  : cur.left;
      const rightUnder = (anim === "next" && nxt) ? nxt.right : cur.right;

      let turnSheet = "";
      if (anim === "next" && nxt) {
        turnSheet = `
          <div class="turn-sheet turn-sheet--next">
            <div class="turn-face">
              <div class="book-leaf book-leaf--right">${renderLeaf(cur.right)}</div>
            </div>
            <div class="turn-face turn-face--back">
              <div class="book-leaf book-leaf--left">${renderLeaf(nxt.left)}</div>
            </div>
          </div>
        `;
      }
      if (anim === "prev" && prv) {
        turnSheet = `
          <div class="turn-sheet turn-sheet--prev">
            <div class="turn-face">
              <div class="book-leaf book-leaf--left">${renderLeaf(cur.left)}</div>
            </div>
            <div class="turn-face turn-face--back">
              <div class="book-leaf book-leaf--right">${renderLeaf(prv.right)}</div>
            </div>
          </div>
        `;
      }

      desktopRoot.innerHTML = `
        <div class="book-wrapper">
          <div class="book">
            <div class="book-cover"></div>
            <div class="book-spine"></div>

            <div class="book-half" id="leftHalf" style="cursor:${page > 0 ? "pointer" : "default"};">
              <div class="leaf-stack left-half">
                <div class="book-leaf book-leaf--left is-active">${renderLeaf(leftUnder)}</div>
              </div>
            </div>
            <div class="book-half" id="rightHalf" style="cursor:${page < total - 1 ? "pointer" : "default"};">
              <div class="leaf-stack right-half">
                <div class="book-leaf book-leaf--right is-active">${renderLeaf(rightUnder)}</div>
              </div>
            </div>

            ${turnSheet}
          </div>
        </div>

        <div class="dots-nav">
          ${spreads.map((s, i) => `
            <button class="${i === page ? "is-active" : ""}" data-i="${i}" aria-label="Buka halaman ${i + 1}">
              <span class="dot"></span>
            </button>
          `).join("")}
        </div>
      `;

      document.getElementById("leftHalf").addEventListener("click", goPrev);
      document.getElementById("rightHalf").addEventListener("click", goNext);
      document.querySelectorAll(".dots-nav button").forEach(btn => {
        btn.addEventListener("click", () => {
          if (busy) return;
          const i = parseInt(btn.dataset.i, 10);
          if (i > page) goNext();
          else if (i < page) goPrev();
        });
      });
    }

    function renderMobileList() {
      if (!mobileRoot) return;
      if (!mobileRoot._inited) {
        mobileRoot.innerHTML = `
          <div class="tab-bar" id="tabBar">
            <button data-tab="makanan" class="is-active">Makanan</button>
            <button data-tab="minuman">Minuman</button>
          </div>
          <div id="mobileGroups"></div>
        `;
        mobileRoot._inited = true;
      }
      const tabBar = mobileRoot.querySelector("#tabBar");
      const groupsRoot = mobileRoot.querySelector("#mobileGroups");
      const active = tabBar.querySelector(".is-active").dataset.tab;
      const data = active === "makanan" ? window.menuMakanan : window.menuMinuman;

      tabBar.querySelectorAll("button").forEach(btn => {
        btn.classList.toggle("is-active", btn.dataset.tab === active);
        btn.onclick = () => {
          tabBar.querySelectorAll("button").forEach(b => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          renderMobileList();
        };
      });

      groupsRoot.innerHTML = data.map(grp => {
        const cards = grp.items.map(it => {
          const img = (it.has_photo && it.photo)
            ? `<img src="${it.photo}" alt="${escapeHtml(it.nama)}" class="menu-card__img" loading="lazy">`
            : "";
          return `
            <div class="menu-card">
              ${img}
              <div class="menu-card__body">
                <span class="menu-card__name">
                  ${escapeHtml(it.nama)}${it.best ? '<span class="best-inline">Best Seller</span>' : ""}
                </span>
                <span class="menu-card__price">${window.formatRupiah(it.harga)}</span>
              </div>
            </div>
          `;
        }).join("");
        return `
          <div class="menu-group">
            <h4 class="leaf-list__group-title">${escapeHtml(grp.title)}</h4>
            ${grp.subtitle ? `<p class="leaf-list__group-sub">${escapeHtml(grp.subtitle)}</p>` : ""}
            <div>${cards}</div>
          </div>
        `;
      }).join("");
    }

    function update() {
      if (isMobile()) {
        if (desktopRoot) desktopRoot.style.display = "none";
        if (mobileRoot)  mobileRoot.style.display  = "flex";
        renderMobileList();
      } else {
        if (desktopRoot) desktopRoot.style.display = "flex";
        if (mobileRoot)  mobileRoot.style.display  = "none";
        renderDesktop();
      }
    }

    function goNext() {
      if (busy || page >= total - 1) return;
      busy = true;
      anim = "next";
      renderDesktop();
      setTimeout(() => {
        page = Math.min(page + 1, total - 1);
        anim = "idle";
        busy = false;
        renderDesktop();
      }, 1100);
    }
    function goPrev() {
      if (busy || page <= 0) return;
      busy = true;
      anim = "prev";
      renderDesktop();
      setTimeout(() => {
        page = Math.max(page - 1, 0);
        anim = "idle";
        busy = false;
        renderDesktop();
      }, 1100);
    }

    window.addEventListener("keydown", e => {
      if (isMobile()) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    });

    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(update, 150);
    });

    update();
  }

  /* ---------- Public init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initChrome();
    initMenuPage();
  });
})();
