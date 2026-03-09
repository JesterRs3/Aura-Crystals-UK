// =============================================
//  AURORA CRYSTALS UK — script.js
// =============================================

// --- PRODUCT DATA ---
const products = [
    { id:1, name:"Amethyst Cluster",    desc:"Promotes calm, clarity and spiritual protection.", price:14.99, icon:"◆", color:"#9b7fbf" },
    { id:2, name:"Rose Quartz",          desc:"The stone of unconditional love and gentle healing.", price:9.99,  icon:"◈", color:"#e8a0a0" },
    { id:3, name:"Clear Quartz",         desc:"Master healer. Amplifies energy and intention.", price:11.99, icon:"◇", color:"#c0d8e8" },
    { id:4, name:"Black Tourmaline",     desc:"Powerful protection against negative energies.", price:12.99, icon:"✦", color:"#5a5a5a" },
    { id:5, name:"Citrine",              desc:"Stone of abundance, joy and positive energy.", price:13.99, icon:"◉", color:"#d4a843" },
    { id:6, name:"Selenite Wand",        desc:"Cleanses auras and charges other crystals.", price:10.99, icon:"⟡", color:"#d0c8b8" },
    { id:7, name:"Lapis Lazuli",         desc:"Enhances wisdom, truth and inner power.", price:15.99, icon:"◐", color:"#3a6ea5" },
    { id:8, name:"Tiger's Eye",          desc:"Courage, confidence and grounding energy.", price:11.49, icon:"◑", color:"#b07c3a" },
  ];
  
  // =============================================
  //  CART — stored in sessionStorage so it
  //  persists between pages during a visit.
  // =============================================
  
  function getCart() {
    try {
      return JSON.parse(sessionStorage.getItem("aurora_cart")) || [];
    } catch(e) {
      return [];
    }
  }
  
  function saveCart(cart) {
    sessionStorage.setItem("aurora_cart", JSON.stringify(cart));
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const cart = getCart();
    const existing = cart.find(i => i.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    saveCart(cart);
    updateCartCount();
    showToast();
  }
  
  function removeFromCart(productId) {
    let cart = getCart().filter(i => i.id !== productId);
    saveCart(cart);
    updateCartCount();
    renderCartPage();
  }
  
  function changeQty(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      saveCart(cart.filter(i => i.id !== productId));
    } else {
      saveCart(cart);
    }
    updateCartCount();
    renderCartPage();
  }
  
  function updateCartCount() {
    const el = document.getElementById("cartCount");
    if (!el) return;
    const total = getCart().reduce((s, i) => s + i.qty, 0);
    el.textContent = total;
  }
  
  // =============================================
  //  TOAST NOTIFICATION
  // =============================================
  function showToast() {
    const toast = document.getElementById("toast");
    if (!toast) return; // silently skip pages without a toast element
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  }
  
  // =============================================
  //  RENDER PRODUCTS (homepage preview + shop)
  //  FIX: Detection now uses DOM presence instead
  //  of pathname so it works on any server setup.
  // =============================================
  function renderProducts() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;
  
    // FIX: detect shop page by presence of .shop-full class, not URL string
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
        <span class="product-icon" style="color:${product.color}">${product.icon}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <p class="product-price">£${product.price.toFixed(2)}</p>
        <button class="btn-add" onclick="addToCart(${product.id})">Add to Basket</button>
      `;
      grid.appendChild(card);
  
      // trigger animation
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 + index * 80);
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
  //  SIMULATE CHECKOUT
  //  Replace with real Stripe Payment Intent
  //  logic once you have a backend.
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
  
    if (getCart().length === 0) {
      alert("Your basket is empty!");
      return;
    }
  
    // Clear cart on success
    saveCart([]);
    updateCartCount();
  
    // Show success overlay
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
  //  SIGNUP / LOGIN FORMS
  // =============================================
  function switchTab(tab) {
    const formSignup = document.getElementById("formSignup");
    const formLogin  = document.getElementById("formLogin");
    const tabSignup  = document.getElementById("tabSignup");
    const tabLogin   = document.getElementById("tabLogin");
    if (!formSignup) return;
  
    if (tab === "signup") {
      formSignup.classList.remove("hidden");
      formLogin.classList.add("hidden");
      tabSignup.classList.add("active");
      tabLogin.classList.remove("active");
    } else {
      formLogin.classList.remove("hidden");
      formSignup.classList.add("hidden");
      tabLogin.classList.add("active");
      tabSignup.classList.remove("active");
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
          msg.textContent = `Welcome to Aurora Crystals${first ? ", " + first : ""}! ✦ Check your email to confirm.`;
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
        if (msg) {
          msg.textContent = "Welcome back! ✦";
          msg.style.color = "var(--accent)";
        }
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
  