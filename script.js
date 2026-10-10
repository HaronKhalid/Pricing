// Mark JavaScript as enabled for styles & animations
document.documentElement.classList.add('js');

// ==========================================
// 1. OWNER CONFIGURATION & CONTACT LINKS
// ==========================================
const WA = "923455052261";
const PHONE = "03455052261";
const EMAIL = "digitaltakhleeq@gmail.com";

const wa = (text) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(text);
const $ = (selector) => document.querySelector(selector);
const fmt = (number) => number.toLocaleString("en-US");
const hi = "Hi Digital Takhleeq, ";

// Initialize main WhatsApp CTA buttons
["nwa", "fwa", "fab"].forEach((id) => {
  const el = $("#" + id);
  if (el) {
    el.href = wa(hi + "I'd like to know more about your services.");
  }
});

// Initialize call and email CTA buttons
const callBtn = $("#fcall");
if (callBtn) callBtn.href = "tel:" + PHONE;

const mailBtn = $("#fmail");
if (mailBtn) mailBtn.href = "mailto:" + EMAIL;

// ==========================================
// 2. PRICING CARDS GENERATION
// ==========================================
const createCard = (item) => `
  <article class="card rv${item.b ? " best" : ""}">
    ${item.b ? '<span class="ribbon">Most chosen</span>' : ""}
    <span class="tag ${item.t}">${item.t === "once" ? "One-time" : "Monthly"}</span>
    <h3>${item.n}</h3>
    <p class="d">${item.d}</p>
    <div class="pr">
      <small>${item.f || "Starting from"}</small>
      <b>PKR ${item.p}</b>
      <span>${item.u || ""}</span>
    </div>
    <ul>
      ${item.i.map((feature) => "<li>" + feature + "</li>").join("")}
    </ul>
    <a class="btn ${item.b ? "gold" : "line"}" href="${wa(hi + "I'm interested in: " + item.n)}">Enquire on WhatsApp</a>
  </article>
`;

const renderCards = (containerId, items) => {
  const container = $(containerId);
  if (container) {
    container.innerHTML = items.map(createCard).join("");
  }
};

// Website Plans
renderCards("#webC", [
  {
    t: "once",
    n: "Basic One-Page",
    d: "A simple, professional online presence without unnecessary features.",
    p: "10,000",
    i: [
      "Responsive one-page design",
      "4 to 6 sections",
      "WhatsApp and call buttons",
      "Google Maps and social links",
      "Basic SEO, SSL and launch",
      "1 revision round"
    ]
  },
  {
    t: "once",
    b: 1,
    n: "Business One-Page",
    d: "A professional digital storefront designed around your business.",
    p: "15,000",
    i: [
      "Custom modern design",
      "Gallery, testimonials, contact form",
      "Basic animations",
      "Analytics setup",
      "Basic SEO, SSL and launch",
      "2 revision rounds"
    ]
  },
  {
    t: "once",
    n: "Premium / Custom",
    d: "For businesses that need more customisation or advanced features.",
    p: "25,000+",
    i: [
      "Advanced animations",
      "Custom sections and layouts",
      "Interactive components",
      "Extra integrations",
      "Performance optimisation",
      "Priced to your requirements"
    ]
  }
]);

// Social Media Plans
renderCards("#socC", [
  {
    t: "mo",
    n: "Posting Only",
    d: "You create the content. We publish it.",
    p: "5,000",
    u: "per month",
    i: [
      "Facebook and Instagram posting",
      "Scheduling",
      "Captions and hashtags"
    ]
  },
  {
    t: "mo",
    n: "Design + Posting",
    d: "Stay active and professional without full-scale marketing.",
    p: "10,000",
    u: "per month",
    i: [
      "8 to 12 posts a month",
      "Branded graphic design",
      "Captions, hashtags, scheduling"
    ]
  },
  {
    t: "mo",
    b: 1,
    n: "Management",
    d: "Consistent social media without an agency's cost.",
    p: "15,000",
    u: "per month",
    i: [
      "8 to 12 designed posts",
      "Basic engagement and comment monitoring",
      "Monthly report"
    ]
  },
  {
    t: "mo",
    n: "Growth",
    d: "More active content management across platforms.",
    p: "20,000",
    u: "to 25,000 per month",
    i: [
      "12 to 16 posts and 4 to 6 reels",
      "Stories and content calendar",
      "Basic DM and comment handling",
      "Competitor monitoring",
      "Monthly analytics report"
    ]
  }
]);

// Google Business Profile Plans
renderCards("#gbpC", [
  {
    t: "once",
    n: "Profile Setup",
    d: "Make your business easy to find on Google and Maps.",
    p: "3,000",
    u: "to 5,000, one-time",
    i: [
      "Profile setup or claim assistance",
      "Category, address, hours, services",
      "Logo, cover image, initial photos",
      "Basic optimisation"
    ]
  },
  {
    t: "mo",
    n: "Monthly Management",
    d: "Keep your profile accurate, fresh and trusted.",
    p: "3,000",
    u: "per month",
    i: [
      "Information and hours updates",
      "2 to 4 Google posts a month",
      "Photo updates",
      "Review monitoring and reply help",
      "Monthly report"
    ]
  }
]);

// Reels and Content Editing Plans
renderCards("#reelC", [
  {
    t: "once",
    n: "Single Reel",
    d: "Pay per reel, depending on complexity.",
    p: "1,000",
    u: "per reel",
    i: [
      "Cuts and sound sync",
      "Captions on request",
      "Revisions by scope"
    ]
  },
  {
    t: "once",
    b: 1,
    n: "5 Reels",
    d: "A small batch for a month of content.",
    p: "5,000",
    u: "one-time",
    i: [
      "Five edited reels",
      "Consistent style"
    ]
  },
  {
    t: "once",
    n: "10 Reels",
    d: "Best value for steady posting.",
    p: "9,000",
    u: "to 10,000, one-time",
    i: [
      "Ten edited reels",
      "Consistent style"
    ]
  }
]);

// Ready-Made Bundles
renderCards("#bunC", [
  {
    t: "once",
    n: "Online Starter",
    d: "A professional online presence for small businesses.",
    p: "10,000",
    u: "to 15,000, one-time",
    i: [
      "One-page business website",
      "WhatsApp, call, social links, Maps",
      "Basic SEO and launch"
    ]
  },
  {
    t: "once",
    n: "Local Presence",
    d: "Website, Google and social profiles working together.",
    p: "18,000",
    u: "to 20,000 setup",
    i: [
      "One-page business website",
      "Google Business Profile setup",
      "Social profile integration"
    ]
  },
  {
    t: "mo",
    b: 1,
    n: "Business Presence",
    d: "Ongoing presence management for local businesses.",
    p: "10,000",
    u: "per month + website setup",
    i: [
      "Website and Google profile setup",
      "Facebook and Instagram, 8 to 12 posts",
      "Google posts and review monitoring"
    ]
  },
  {
    t: "mo",
    n: "Growth",
    d: "A more active online presence.",
    p: "20,000",
    u: "to 25,000 per month + website setup",
    i: [
      "Website and Google profile",
      "12 to 16 posts, 4 to 6 reels, stories",
      "Monthly analytics report"
    ]
  }
]);

// Services Grid
const serviceList = [
  ["Websites", "Your professional digital storefront.", "once", "One-time"],
  ["Social media", "Active, consistent Facebook and Instagram.", "mo", "Monthly"],
  ["Google Business Profile", "Be found on Google and Maps.", "once", "Setup or monthly"],
  ["Content and reels", "Polished short videos for your brand.", "once", "Per reel"],
  ["Website maintenance", "Updates, backups and security checks.", "mo", "From 2,000 per month"],
  ["Marketing and ads", "Campaign setup and monitoring. Ad budget separate.", "cq", "Custom quote"],
  ["SEO and automation", "Local SEO, WhatsApp automation, chatbots.", "cq", "Custom quote"]
];

const svcGrid = $("#svcGrid");
if (svcGrid) {
  svcGrid.innerHTML = serviceList.map((service) => `
    <div class="sv">
      <h3>${service[0]}</h3>
      <p>${service[1]}</p>
      <span class="tag ${service[2]}">${service[3]}</span>
    </div>
  `).join("");
}


// ==========================================
// 3. INTERACTIVE PACKAGE CALCULATOR
// ==========================================
const S = [
  {
    k: "web",
    n: "Website",
    d: "One-time",
    o: [
      ["Basic", [["o", 10000]]],
      ["Business", [["o", 15000]]],
      ["Premium (from)", [["o", 25000]]]
    ]
  },
  {
    k: "soc",
    n: "Social media",
    d: "Monthly",
    o: [
      ["Posting", [["m", 5000]]],
      ["Design + Posting", [["m", 10000]]],
      ["Management", [["m", 15000]]],
      ["Growth (from)", [["m", 20000]]]
    ]
  },
  {
    k: "gbp",
    n: "Google Business Profile",
    d: "Setup and or monthly",
    o: [
      ["Setup", [["o", 3000]]],
      ["Monthly", [["m", 3000]]],
      ["Both", [["o", 3000], ["m", 3000]]]
    ]
  },
  {
    k: "reel",
    n: "Reels",
    d: "One-time",
    o: [
      ["1 reel", [["o", 1000]]],
      ["5 reels", [["o", 5000]]],
      ["10 reels", [["o", 9000]]]
    ]
  },
  {
    k: "mnt",
    n: "Maintenance",
    d: "Monthly",
    o: [
      ["Monthly", [["m", 2000]]]
    ]
  },
  { k: "seo", n: "SEO", d: "Custom quote", c: 1 },
  { k: "ads", n: "Ads", d: "Custom quote. Ad budget separate.", c: 1 },
  { k: "aut", n: "Automation", d: "Custom quote", c: 1 }
];

const sel = {};

function draw() {
  const svgEl = $("#svg");
  if (!svgEl) return;

  svgEl.innerHTML = S.map((s) => {
    const on = s.k in sel;
    const hasMultipleOptions = on && s.o && s.o.length > 1;
    const optionsHtml = hasMultipleOptions
      ? `<div class="opts">
          ${s.o.map((option, idx) => `
            <button class="chip${sel[s.k] === idx ? " on" : ""}" data-k="${s.k}" data-o="${idx}">${option[0]}</button>
          `).join("")}
        </div>`
      : "";

    return `
      <div class="svc${on ? " on" : ""}" data-k="${s.k}" role="button" tabindex="0" aria-pressed="${on}">
        <div class="top">
          <b>${s.n}</b>
          <span class="sw"></span>
        </div>
        <small>${s.d}</small>
        ${optionsHtml}
      </div>
    `;
  }).join("");

  let oneTimeTotal = 0;
  let monthlyTotal = 0;
  let customQuotes = [];
  let selectedCount = 0;

  S.forEach((service) => {
    if (!(service.k in sel)) return;
    selectedCount++;

    if (service.c) {
      customQuotes.push(service.n);
      return;
    }

    const selectedOption = service.o[sel[service.k]];
    selectedOption[1].forEach((cost) => {
      if (cost[0] === "o") {
        oneTimeTotal += cost[1];
      } else {
        monthlyTotal += cost[1];
      }
    });
  });

  const sumB = $("#sumB");
  if (sumB) {
    sumB.innerHTML = selectedCount
      ? `
        <div class="l">
          <span>One-time<br><small>starting from</small></span>
          <b>PKR ${fmt(oneTimeTotal)}</b>
        </div>
        <div class="l">
          <span>Monthly<br><small>starting from</small></span>
          <b>PKR ${fmt(monthlyTotal)}</b>
        </div>
        <div class="l">
          <span>Custom quote</span>
          <b>${customQuotes.length ? customQuotes.join(", ") : "None"}</b>
        </div>
      `
      : `<p style="color:#B9C3DA">Select a service to see your starting estimate.</p>`;
  }

  const lines = S.filter((s) => s.k in sel).map((s) => {
    return s.c ? s.n + " (custom quote)" : s.n + ": " + s.o[sel[s.k]][0];
  });

  const calcWA = $("#calcWA");
  if (calcWA) {
    const waText = selectedCount
      ? hi +
        "I'd like a quote for:\n" +
        lines.join("\n") +
        "\nEstimate (starting from): PKR " +
        fmt(oneTimeTotal) +
        " one-time, PKR " +
        fmt(monthlyTotal) +
        "/month."
      : hi + "I'd like to build a package.";

    calcWA.href = wa(waText);
  }
}

const svgContainer = $("#svg");
if (svgContainer) {
  svgContainer.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) {
      sel[chip.dataset.k] = +chip.dataset.o;
      return draw();
    }

    const svc = e.target.closest(".svc");
    if (!svc) return;

    const key = svc.dataset.k;
    if (key in sel) {
      delete sel[key];
    } else {
      sel[key] = 0;
    }
    draw();
  });

  svgContainer.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("svc")) {
      e.preventDefault();
      e.target.click();
    }
  });
}

// Initial draw of the calculator
draw();

// ==========================================
// 4. HERO SLIP ANIMATION
// ==========================================
const rows = [...document.querySelectorAll(".slip .r")];
const slipT = $("#slipT");

const updateSlipTotal = () => {
  const activeCount = rows.filter((r) => !r.classList.contains("off")).length;
  if (slipT) {
    slipT.textContent = activeCount + " of 6 services selected";
  }
};

updateSlipTotal();

if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * 6);
    if (rows[randomIndex]) {
      rows[randomIndex].classList.toggle("off");
      updateSlipTotal();
    }
  }, 2200);
}

// ==========================================
// 5. SCROLL REVEAL ANIMATIONS
// ==========================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
