// =============================================
//  AURA CRYSTALS UK — script.js
// =============================================

// --- PRODUCT DATA (for cart / shop grid) ---
const products = [
  { id:1, name:"Amethyst Cluster",  desc:"Promotes calm, clarity and spiritual protection.", price:14.99, icon:"◆", color:"#9b7fbf" },
  { id:2, name:"Rose Quartz",       desc:"The stone of unconditional love and gentle healing.", price:9.99,  icon:"◈", color:"#e8a0a0" },
  { id:3, name:"Clear Quartz",      desc:"Master healer. Amplifies energy and intention.", price:11.99, icon:"◇", color:"#c0d8e8" },
  { id:4, name:"Black Tourmaline",  desc:"Powerful protection against negative energies.", price:12.99, icon:"✦", color:"#5a5a5a" },
  { id:5, name:"Citrine",           desc:"Stone of abundance, joy and positive energy.", price:13.99, icon:"◉", color:"#d4a843" },
  { id:6, name:"Selenite Wand",     desc:"Cleanses auras and charges other crystals.", price:10.99, icon:"⟡", color:"#d0c8b8" },
  { id:7, name:"Lapis Lazuli",      desc:"Enhances wisdom, truth and inner power.", price:15.99, icon:"◐", color:"#3a6ea5" },
  { id:8, name:"Tiger's Eye",       desc:"Courage, confidence and grounding energy.", price:11.49, icon:"◑", color:"#b07c3a" },
];

// --- CRYSTAL DETAIL DATA ---
const crystalDetails = [
  {
    id: 1, name: "Amethyst Cluster", icon: "◆", color: "#9b7fbf", price: 14.99,
    tagline: "The stone of calm, clarity & spiritual protection",
    image: "https://images.unsplash.com/photo-1609216970378-ce61cd74a187?w=1400&q=80",
    about: "Amethyst is one of the most beloved and widely recognised crystals in the world. Its signature violet hue — ranging from pale lavender to deep royal purple — is caused by iron impurities and natural irradiation within the quartz structure. Each cluster is a unique formation of dozens of individual points, radiating energy outward in every direction and making it a powerful centrepiece for any space.",
    healing: "Amethyst is known as the stone of peace. It is deeply connected to the crown and third eye chakras, making it a natural aid for meditation, intuition, and spiritual awareness. Many people keep amethyst by their bed to encourage restful sleep and to ward off nightmares. It is also widely used to ease anxiety, calm an overactive mind, and support emotional balance during times of stress or grief.",
    history: "Amethyst has been prized by humans for over 2,000 years. Ancient Greeks believed it could prevent intoxication — the word 'amethyst' derives from the Greek 'amethystos,' meaning 'not drunk.' Roman soldiers wore amethyst amulets into battle for protection, and medieval European bishops wore amethyst rings as a symbol of piety. Today the finest specimens come from Brazil, Uruguay, Zambia, and South Korea.",
    howToUse: "Place an amethyst cluster in your bedroom or meditation space to create a calming atmosphere. Hold a piece during breathwork or mindfulness practice. To cleanse, place in moonlight overnight or use sound — avoid prolonged direct sunlight as it can fade the colour over time.",
    properties: ["Calming", "Intuition", "Protection", "Sleep", "Meditation", "Crown Chakra"],
  },
  {
    id: 2, name: "Rose Quartz", icon: "◈", color: "#e8a0a0", price: 9.99,
    tagline: "The stone of unconditional love & gentle healing",
    image: "https://images.unsplash.com/photo-1593259213062-57b0ce5906cf?w=1400&q=80",
    about: "Rose Quartz is the quintessential stone of love — soft, warm, and immediately soothing to hold. Its delicate pink colour comes from trace amounts of titanium, iron, or manganese within the quartz. Unlike many crystals it rarely forms sharp points; instead it grows in massive formations with a gentle, rounded energy. Each piece carries a tender, nurturing vibration that feels almost maternal.",
    healing: "Rose Quartz works primarily with the heart chakra, gently dissolving emotional wounds, resentments, and fears. It is considered the most important crystal for matters of the heart — not just romantic love, but self-love, family bonds, and compassion for others. It is often recommended for those recovering from heartbreak, struggling with self-worth, or learning to set healthy emotional boundaries.",
    history: "Rose Quartz has been used as a love token since at least 600 BC. The Assyrians crafted rose quartz jewellery as early as 800–600 BC, and both Romans and Egyptians used it in facial masks, believing it could prevent wrinkles and preserve youth. In ancient mythology it was said to have been created when Aphrodite cut herself rushing to save Adonis, her blood staining white quartz pink.",
    howToUse: "Keep rose quartz in your bedroom or living space to encourage a loving atmosphere. Place it over your heart during meditation. It pairs beautifully with a bath ritual — place several tumblestones around the tub with rose petals. Cleanse regularly under running water or in moonlight.",
    properties: ["Love", "Self-Worth", "Compassion", "Emotional Healing", "Heart Chakra", "Nurturing"],
  },
  {
    id: 3, name: "Clear Quartz", icon: "◇", color: "#c0d8e8", price: 11.99,
    tagline: "The master healer — amplifier of energy & intention",
    image: "https://images.unsplash.com/photo-1550852826-5369a2d5e585?w=1400&q=80",
    about: "Clear Quartz is the most abundant and versatile crystal on Earth, found on every continent and in almost every geological environment. It is pure silicon dioxide, and its clarity — sometimes completely transparent, sometimes milky with veils and inclusions — gives it an almost otherworldly quality. It is considered the master healer of the crystal world because it amplifies the energy of every intention and every other crystal placed near it.",
    healing: "Clear Quartz resonates with all chakras but is especially connected to the crown chakra and higher consciousness. It is used to clarify thought, enhance focus, and amplify the power of intentions set in meditation or ritual. It is also said to absorb, store, and regulate energy — making it a powerful tool for energy cleansing in both your body and your environment.",
    history: "The word 'crystal' itself comes from the Ancient Greek 'krystallos,' meaning ice — the Greeks believed clear quartz was permanently frozen water. Australian Aboriginal peoples considered it sacred, using it in rainmaking ceremonies. Japanese tradition called it the perfect jewel, symbolising purity, patience, and perseverance. It has been found in burial sites across the world, always associated with the divine.",
    howToUse: "Place clear quartz near other crystals to amplify their energy. Use as a meditation focal point — hold it and set a clear intention before beginning. Programme it by holding it in both hands, closing your eyes, and stating your intention aloud or silently. Cleanse regularly in sunlight, moonlight, or with sound.",
    properties: ["Amplification", "Clarity", "Healing", "Intention", "All Chakras", "Energy Cleansing"],
  },
  {
    id: 4, name: "Black Tourmaline", icon: "✦", color: "#5a5a5a", price: 12.99,
    tagline: "The ultimate protector against negative energy",
    image: "https://images.unsplash.com/photo-1753522129511-6d359db5dacd?w=1400&q=80",
    about: "Black Tourmaline — known mineralogically as Schorl — is one of the most powerful protective stones in the crystal kingdom. Its deep, opaque black colour and striated surface are immediately distinctive. It belongs to the tourmaline family, a complex group of boron silicate minerals, and forms in long prismatic crystals with characteristic vertical grooves running along their length. Despite its austere appearance, it carries a surprisingly grounding and reassuring energy.",
    healing: "Black Tourmaline is the go-to crystal for psychic protection and energetic shielding. It is believed to create a protective forcefield around the aura, deflecting negative energy, electromagnetic smog, and psychic attacks. It works primarily with the root chakra, providing a deep sense of grounding and security. Many people carry a piece daily or place it near electronic devices and at the entrances of their home.",
    history: "Black Tourmaline has been used by shamans and medicine people across many cultures for centuries. Dutch traders in the early 18th century brought it from Sri Lanka to Europe, where it was called 'aschentrekker' (ash puller) because of its pyroelectric property — it becomes electrically charged when heated. Alchemists considered it a stone of transformation.",
    howToUse: "Place black tourmaline at the four corners of your home or by the front door to create an energetic barrier. Keep a piece in your pocket or bag when entering crowded or high-stress environments. Place near computers and wifi routers to mitigate electromagnetic frequencies. Cleanse regularly by burying in the earth overnight or rinsing with cool water.",
    properties: ["Protection", "Grounding", "EMF Shield", "Root Chakra", "Psychic Defence", "Cleansing"],
  },
  {
    id: 5, name: "Citrine", icon: "◉", color: "#d4a843", price: 13.99,
    tagline: "The merchant's stone — abundance, joy & solar energy",
    image: "https://images.unsplash.com/photo-1614092872241-c9a193f2b4aa?w=1400&q=80",
    about: "Citrine is the golden child of the quartz family — a radiant, sun-coloured stone that ranges from pale lemon yellow to deep amber and burnt orange. Natural citrine is relatively rare; its colour comes from traces of iron within the quartz structure. It is one of only a handful of crystals that never needs energetic cleansing, as it does not hold negative energy — it simply transmutes and dissipates it, making it uniquely low-maintenance and perpetually welcoming.",
    healing: "Citrine is powerfully connected to the solar plexus chakra — the seat of personal power, confidence, and willpower. It is called the merchant's stone for its legendary ability to attract wealth, abundance, and success. Beyond material prosperity, it also cultivates joy, optimism, and creative motivation. It is an excellent crystal for anyone feeling stuck, lacking confidence, or struggling to manifest their goals.",
    history: "Citrine has been used as a gemstone since ancient times, prized by the Greeks and Romans for its golden colour. In Scottish culture it was set into the handles of ceremonial daggers. During the Art Deco period it became enormously fashionable in jewellery, worn by Hollywood stars and royalty alike. The name comes from the French 'citron,' meaning lemon.",
    howToUse: "Keep citrine in your workspace, cash box, or the wealth corner of your home. Hold it during visualisation exercises focused on abundance and success. Wear as jewellery to maintain its sunny, uplifting energy throughout the day. Unlike most crystals, citrine does not need regular cleansing — but you can refresh it in sunlight if desired.",
    properties: ["Abundance", "Joy", "Confidence", "Solar Plexus", "Manifestation", "Creativity"],
  },
  {
    id: 6, name: "Selenite Wand", icon: "⟡", color: "#d0c8b8", price: 10.99,
    tagline: "Liquid light in crystal form — cleanser of space & soul",
    image: "https://images.unsplash.com/photo-1597336465111-a392afd218bc?w=1400&q=80",
    about: "Selenite is one of the most ethereally beautiful crystals in existence. Named after Selene, the Greek goddess of the moon, it is a form of gypsum that grows in long, translucent wands with a silky, pearlescent lustre. When light passes through it, it seems to glow from within — lending it an almost supernatural quality. Each wand is formed slowly over thousands of years in evaporating salt lakes and caves.",
    healing: "Selenite vibrates at an exceptionally high frequency and is said to carry the purest white light energy of any crystal. It is primarily used for cleansing — both of physical spaces and of other crystals. Simply placing other crystals on a selenite slab or beside a wand for a few hours is believed to fully recharge and purify them. It also facilitates access to higher guidance and angelic connection.",
    history: "In Mesopotamia selenite was placed in the walls of homes to keep out evil spirits. In Ancient Egypt, thin sheets were used as window panes in temples. The Cave of the Crystals in Naica, Mexico, contains selenite columns up to 12 metres tall — some of the largest natural crystals ever found, estimated to be 500,000 years old.",
    howToUse: "Run a selenite wand slowly down your body from head to toe to cleanse your aura. Place in the corners of rooms to purify the energy of your home. Use as a charging plate for other crystals overnight. Important: selenite is water-soluble — never submerge in water to cleanse. Use moonlight or sound instead.",
    properties: ["Cleansing", "High Vibration", "Crown Chakra", "Aura Clearing", "Peace", "Angelic Connection"],
  },
  {
    id: 7, name: "Lapis Lazuli", icon: "◐", color: "#3a6ea5", price: 15.99,
    tagline: "The stone of wisdom, truth & royal power",
    image: "https://images.unsplash.com/photo-1564145593722-41a01c018a10?w=1400&q=80",
    about: "Lapis Lazuli is one of the oldest and most storied gemstones in human history — a deep celestial blue, often spangled with golden flecks of pyrite that resemble stars in a midnight sky. It is not a single mineral but a metamorphic rock composed primarily of lazurite, calcite, and pyrite. The finest specimens come from the mountains of Afghanistan, where they have been mined continuously for over 6,000 years.",
    healing: "Lapis Lazuli works primarily with the throat and third eye chakras, making it a crystal of communication, truth, and inner vision. It enhances intellectual ability, memory, and the desire for knowledge. Many writers, teachers, and artists keep it nearby for its ability to unlock creative expression and articulate complex ideas with clarity and confidence.",
    history: "Lapis lazuli was among the treasures found in the tomb of Tutankhamun, adorning his death mask. Cleopatra reportedly used ground lapis as eyeshadow. In Renaissance Europe, it was ground into ultramarine pigment — the most expensive blue in the painter's palette, reserved for the Virgin Mary's robes. Ancient Sumerians believed it contained the soul of their gods.",
    howToUse: "Place lapis lazuli on your throat or third eye during meditation to enhance communication and intuition. Keep it on your desk to stimulate intellectual clarity and creative thinking. Wear as a pendant near the throat to encourage authentic self-expression. Cleanse in moonlight or with sound — avoid harsh sunlight which may fade the blue over time.",
    properties: ["Wisdom", "Truth", "Communication", "Third Eye", "Throat Chakra", "Intuition"],
  },
  {
    id: 8, name: "Tiger's Eye", icon: "◑", color: "#b07c3a", price: 11.49,
    tagline: "The warrior's stone — courage, focus & grounded power",
    image: "https://images.unsplash.com/photo-1720734899165-ceb27fb19a57?w=1400&q=80",
    about: "Tiger's Eye is one of nature's most dramatic optical phenomena — a chatoyant gemstone whose bands of gold, amber, and rich brown seem to shift and ripple as it moves in the light, mimicking the luminous eye of a great cat. This silky lustre, known as chatoyancy, is caused by the reflection of light from parallel fibres replaced by quartz and iron oxide over millions of years. Each stone is a miniature landscape of geological drama.",
    healing: "Tiger's Eye is powerfully connected to the solar plexus and sacral chakras, building confidence, courage, and decisive action. It is the ideal stone for anyone facing a difficult challenge, needing to stand their ground, or working to overcome fear and self-doubt. It provides a grounded, practical energy — the focused, calm strength of someone who knows their own power.",
    history: "Roman soldiers carried engraved tiger's eye into battle, believing it gave them the fierceness and sight of a tiger. In ancient China it was considered a powerful talisman for good luck. Ancient Egyptians used it to represent divine vision in deity statues. In the Middle Ages it was worn as protection against witchcraft and the evil eye.",
    howToUse: "Carry tiger's eye in your pocket during challenging situations — interviews, difficult conversations, or when you need a boost of confidence. Place on the solar plexus during meditation to reinforce personal power. Cleanse in running water or sunlight, and recharge on a windowsill in morning light.",
    properties: ["Courage", "Confidence", "Focus", "Solar Plexus", "Grounding", "Protection"],
  },
];

// =============================================
//  CART
// =============================================
function getCart() {
  try { return JSON.parse(sessionStorage.getItem("aura_cart")) || []; }
  catch(e) { return []; }
}
function saveCart(cart) { sessionStorage.setItem("aura_cart", JSON.stringify(cart)); }

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty += 1; } else { cart.push({ ...product, qty: 1 }); }
  saveCart(cart);
  updateCartCount();
  showToast();
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== productId));
  updateCartCount();
  renderCartPage();
}

function changeQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { saveCart(cart.filter(i => i.id !== productId)); } else { saveCart(cart); }
  updateCartCount();
  renderCartPage();
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  el.textContent = getCart().reduce((s, i) => s + i.qty, 0);
}

// =============================================
//  TOAST
// =============================================
function showToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// =============================================
//  RENDER PRODUCTS
// =============================================
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const isShopPage = document.querySelector(".shop-full") !== null;
  const list = isShopPage ? products : products.slice(0, 4);
  grid.innerHTML = "";
  list.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
    card.innerHTML = `
      <a href="crystal.html?id=${product.id}" class="product-card-link" aria-label="View ${product.name} details">
        <span class="product-icon" style="color:${product.color}">${product.icon}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <p class="product-price">£${product.price.toFixed(2)}</p>
      </a>
      <button class="btn-add" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Basket</button>
    `;
    grid.appendChild(card);
    setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; }, 100 + index * 80);
  });
}

// =============================================
//  RENDER CART PAGE
// =============================================
function renderCartPage() {
  const container    = document.getElementById("cartPageItems");
  const summaryEl    = document.getElementById("orderSummary");
  const summaryLines = document.getElementById("summaryLines");
  const summaryTotal = document.getElementById("summaryTotal");
  if (!container) return;
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `<p class="cart-empty-msg">Your basket is empty. <a href="shop.html">Continue shopping →</a></p>`;
    if (summaryEl) summaryEl.style.display = "none";
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-page-item">
      <span class="cart-page-icon" style="color:${item.color}">${item.icon}</span>
      <div>
        <p class="cart-page-name">${item.name}</p>
        <p class="cart-page-desc">${item.desc}</p>
      </div>
      <div class="cart-page-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <span class="cart-page-price">£${(item.price * item.qty).toFixed(2)}</span>
      <button class="cart-page-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join("");
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (summaryEl) summaryEl.style.display = "block";
  if (summaryLines) {
    summaryLines.innerHTML = cart.map(i => `
      <div class="summary-row">
        <span>${i.name} × ${i.qty}</span>
        <span>£${(i.price * i.qty).toFixed(2)}</span>
      </div>
    `).join("");
  }
  if (summaryTotal) summaryTotal.textContent = `£${total.toFixed(2)}`;
}

// =============================================
//  CHECKOUT
// =============================================
function simulateCheckout() {
  const first = document.getElementById("delivFirst");
  const last  = document.getElementById("delivLast");
  const email = document.getElementById("delivEmail");
  const addr1 = document.getElementById("delivAddr1");
  const city  = document.getElementById("delivCity");
  const post  = document.getElementById("delivPostcode");
  if (!first?.value || !last?.value || !email?.value || !addr1?.value || !city?.value || !post?.value) {
    alert("Please fill in all delivery details before completing your order.");
    return;
  }
  if (getCart().length === 0) { alert("Your basket is empty!"); return; }
  saveCart([]);
  updateCartCount();
  const successEl = document.getElementById("orderSuccess");
  if (successEl) successEl.classList.remove("hidden");
}

// =============================================
//  CONTACT FORM
// =============================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const confirm = document.getElementById("formConfirm");
    const first = document.getElementById("contactFirst")?.value || "";
    if (confirm) {
      confirm.textContent = `Thank you${first ? ", " + first : ""}! We'll be in touch soon. ✦`;
      confirm.style.color = "var(--accent)";
    }
    form.reset();
  });
}

// =============================================
//  SIGNUP / LOGIN
// =============================================
function switchTab(tab) {
  const formSignup = document.getElementById("formSignup");
  const formLogin  = document.getElementById("formLogin");
  const tabSignup  = document.getElementById("tabSignup");
  const tabLogin   = document.getElementById("tabLogin");
  if (!formSignup) return;
  if (tab === "signup") {
    formSignup.classList.remove("hidden"); formLogin.classList.add("hidden");
    tabSignup.classList.add("active"); tabLogin.classList.remove("active");
  } else {
    formLogin.classList.remove("hidden"); formSignup.classList.add("hidden");
    tabLogin.classList.add("active"); tabSignup.classList.remove("active");
  }
}

function initSignupForms() {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const pass    = document.getElementById("signupPassword")?.value;
      const confirm = document.getElementById("signupConfirm")?.value;
      const msg     = document.getElementById("signupConfirmMsg");
      const first   = document.getElementById("signupFirst")?.value;
      if (pass !== confirm) {
        if (msg) { msg.textContent = "Passwords do not match."; msg.style.color = "#c0392b"; }
        return;
      }
      if (pass && pass.length < 8) {
        if (msg) { msg.textContent = "Password must be at least 8 characters."; msg.style.color = "#c0392b"; }
        return;
      }
      if (msg) {
        msg.textContent = `Welcome to Aura Crystals${first ? ", " + first : ""}! ✦ Check your email to confirm.`;
        msg.style.color = "var(--accent)";
      }
      signupForm.reset();
    });
  }
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const msg = document.getElementById("loginConfirmMsg");
      if (msg) { msg.textContent = "Welcome back! ✦"; msg.style.color = "var(--accent)"; }
    });
  }
}

// =============================================
//  SCROLL REVEAL
// =============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".feature-card, .about-block, .contact-info, .contact-form-wrap, .auth-container, .about-badges").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// =============================================
//  INIT
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderProducts();
  renderCartPage();
  initContactForm();
  initSignupForms();
  initScrollReveal();
});
