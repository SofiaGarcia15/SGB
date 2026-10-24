// TEMPORAL: integraciones externas desactivadas para aislar el menu.
// Para reactivar Firebase/Stripe, restaura el import de firebase-config.js y cambia
// TEMP_DISABLE_EXTERNAL_INTEGRATIONS a false.
// import { firebaseConfig, stripePaymentLinks } from "./firebase-config.js";
const TEMP_DISABLE_EXTERNAL_INTEGRATIONS = true;
const firebaseConfig = null;
const stripePaymentLinks = {};

let initializeApp;
let createUserWithEmailAndPassword;
let getAuth;
let onAuthStateChanged;
let signInWithEmailAndPassword;
let signOut;
let updateProfile;
let get;
let getDatabase;
let off;
let onValue;
let push;
let ref;
let remove;
let set;
let update;

const AUTHOR_EMAIL = "anasofiaglb@gmail.com";

const STORAGE = {
  cart: "sgb_cart",
  favorites: "sgb_favorites",
  reviews: "sgb_reviews",
  blogLikes: "sgb_blog_likes",
  blogStars: "sgb_blog_stars",
  blogComments: "sgb_blog_comments",
  blogPosts: "sgb_blog_posts",
  chapters: "sgb_book_chapters",
  notifications: "sgb_notifications",
  account: "sgb_account",
  session: "sgb_session",
  readBooks: "sgb_read_books",
  purchasedBooks: "sgb_purchased_books",
  readingProgress: "sgb_reading_progress"
};

const books = [
  {
    id: "tbbmd",
    title: "El Chico Detrás De Mis Vestidos",
    detail: "Libro destacado de Sofia Garcia Books: romance, ambiente laboral y trabajo en equipo.",
    image: "ECDDMV.png",
    url: "libros.html",
    readUrl: "lector.html?book=tbbmd"
  },
  {
    id: "cafe",
    title: "Noches de Cafe y Promesas",
    detail: "Proximo lanzamiento de romance dulce.",
    image: "ECDDMV.png",
    url: "lanzamientos.html",
    readUrl: "lector.html?book=cafe"
  },
  {
    id: "caminos",
    title: "Caminos que nos Escriben",
    detail: "Una nueva historia esta por comenzar.",
    image: "ECDDMV.png",
    url: "lanzamientos.html",
    readUrl: "lector.html?book=caminos"
  }
];

const menuIcons = {
  "index.html": '<path d="M3 10.5 12 3l9 7.5"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path>',
  "libros.html": '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3-3z"></path><path d="M5 4v13"></path><path d="M8 7h7"></path>',
  "lanzamientos.html": '<path d="M12 2l1.7 6.2L20 10l-6.3 1.8L12 18l-1.7-6.2L4 10l6.3-1.8z"></path>',
  "resenas.html": '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1-4.4-4.3 6.1-.9z"></path>',
  "autora.html": '<circle cx="12" cy="12" r="8"></circle><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M8.5 14.5c2 1.8 5 1.8 7 0"></path>',
  "blog.html": '<path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16z"></path><path d="m13.5 6.5 4 4"></path>',
  "contacto.html": '<path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path>',
  "buscador.html": '<circle cx="10.5" cy="10.5" r="5.5"></circle><path d="m15 15 5 5"></path>',
  "favoritos.html": '<path d="M20.5 8.5c0 5.2-8.5 10-8.5 10s-8.5-4.8-8.5-10A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 2.5z"></path>',
  "cuenta.html": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a8 8 0 0 0 0-6"></path><path d="M4.6 9a8 8 0 0 0 0 6"></path><path d="M7.8 4.8a8 8 0 0 1 8.4 0"></path><path d="M16.2 19.2a8 8 0 0 1-8.4 0"></path>',
  "carrito.html": '<path d="M4 5h2l2 10h9l2-7H7"></path><circle cx="10" cy="19" r="1.5"></circle><circle cx="17" cy="19" r="1.5"></circle>',
  "terminos.html": '<path d="M6 4h12v16H6z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h4"></path>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="3.2"></circle><path d="M16.5 7.5h.01"></path>',
  gmail: '<path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path>'
};


const drawerMenuGroups = [
  [
    { href: "index.html#inicio", label: "Inicio", icon: "index.html" },
    { href: "index.html#libro-destacado", label: "Libro destacado", icon: "libros.html" },
    { href: "index.html#resenas-inicio", label: "Rese&ntilde;as", icon: "resenas.html" },
    { href: "index.html#lanzamientos-inicio", label: "Lanzamientos", icon: "lanzamientos.html" },
    { href: "index.html#autora-inicio", label: "Sobre la autora", icon: "autora.html" },
    { href: "index.html#blog-inicio", label: "Blog", icon: "blog.html" }
  ],
  [
    { href: "libros.html", label: "Libros" },
    { href: "lanzamientos.html", label: "Pr&oacute;ximos lanzamientos" },
    { href: "resenas.html", label: "Rese&ntilde;as" },
    { href: "autora.html", label: "Sobre la autora" },
    { href: "blog.html", label: "Blog" },
    { href: "contacto.html", label: "Contacto" }
  ],
  [
    { href: "buscador.html", label: "Buscar" },
    { href: "favoritos.html", label: "Favoritos" },
    { href: "cuenta.html", label: "Mi Cuenta" },
    { href: "carrito.html", label: "Carrito" },
    { href: "terminos.html", label: "T&eacute;rminos y condiciones" }
  ],
  [
    { href: "https://www.instagram.com/sofiagarciabooks/", label: "Instagram: Sof&iacute;a Garc&iacute;a Books", icon: "instagram", external: true },
    { href: "mailto:sofiagarciabooks@gmail.com", label: "Gmail: sofiagarciabooks@gmail.com", icon: "gmail" }
  ]
];

const headerMenuItems = [
  { href: "index.html", label: "Inicio", type: "pill" },
  { href: "libros.html", label: "Libros", type: "pill" },
  { href: "buscador.html", label: "Buscador", type: "pill" },
  { href: "autora.html", label: "Sobre la autora", type: "pill" },
  { href: "blog.html", label: "Blog", type: "pill" },
  { href: "carrito.html", label: "Carrito", type: "icon" }
];

function headerLinkMarkup(item, current) {
  const active = item.href === current ? " active" : "";
  if (item.type === "icon") {
    return `<a class="icon-pill${active}" href="${item.href}" aria-label="${item.label}">${iconMarkup(item.href)}<span class="cart-count" data-cart-count>0</span></a>`;
  }
  return `<a class="pill${active}" href="${item.href}">${iconMarkup(item.href)}<span>${item.label}</span></a>`;
}

function drawerLinkMarkup(item, current) {
  const itemPath = item.href.split("#")[0] || "index.html";
  const itemHash = item.href.includes("#") ? `#${item.href.split("#")[1]}` : "";
  const active = itemPath === current && (!itemHash || itemHash === window.location.hash) ? " active" : "";
  const cartBadge = item.href === "carrito.html" ? '<span class="cart-count drawer-cart-count" data-cart-count>0</span>' : "";
  const target = item.external ? ' target="_blank" rel="noreferrer"' : "";
  return `<a class="drawer-link${active}" href="${item.href}"${target}>${iconMarkup(item.icon || item.href)}<span>${item.label}</span>${cartBadge}</a>`;
}

function buildHeaderShell(current) {
  return `
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="Ir al inicio">
        <img src="logosgb.png" alt="Logo Sofia Garcia Books">
        <span class="brand-title">Sof&iacute;a Garc&iacute;a Books</span>
      </a>
      <nav class="main-nav" aria-label="Menu principal">
        ${headerMenuItems.map(item => headerLinkMarkup(item, current)).join("")}
      </nav>
      <button class="menu-button" type="button" aria-label="Abrir menu" aria-expanded="false">
        <span aria-hidden="true"></span>
      </button>
    </div>
  `;
}

function buildDrawerMarkup(current) {
  const links = drawerMenuGroups.map((group, index) => {
    const groupLinks = group.map(item => drawerLinkMarkup(item, current)).join("");
    if (index === 0) return groupLinks;
    const label = index === 3 ? '<div class="drawer-section-label">Redes sociales</div>' : "";
    return `<div class="drawer-rule"></div>${label}${groupLinks}`;
  }).join("");

  return `
    <button class="drawer-close" type="button" aria-label="Cerrar menu">&times;</button>
    <nav class="drawer-links" aria-label="Menu lateral">${links}</nav>
  `;
}
const state = {
  auth: null,
  db: null,
  firebaseReady: false,
  user: null,
  isAuthor: false,
  profile: null,
  favorites: [],
  purchasedBooks: [],
  readingProgress: {},
  blogPosts: {},
  blogLikes: {},
  blogStars: {},
  blogComments: {},
  reviews: [],
  chapters: {},
  listeners: []
};

function hasFirebaseConfig() {
  if (TEMP_DISABLE_EXTERNAL_INTEGRATIONS) return false;
  return Boolean(
    firebaseConfig?.apiKey &&
    firebaseConfig?.databaseURL &&
    !String(firebaseConfig.apiKey).includes("TU_") &&
    !String(firebaseConfig.databaseURL).includes("TU_")
  );
}

async function loadFirebase() {
  if (TEMP_DISABLE_EXTERNAL_INTEGRATIONS) return false;
  if (!hasFirebaseConfig()) return false;
  const [appModule, authModule, databaseModule] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js")
  ]);

  initializeApp = appModule.initializeApp;
  createUserWithEmailAndPassword = authModule.createUserWithEmailAndPassword;
  getAuth = authModule.getAuth;
  onAuthStateChanged = authModule.onAuthStateChanged;
  signInWithEmailAndPassword = authModule.signInWithEmailAndPassword;
  signOut = authModule.signOut;
  updateProfile = authModule.updateProfile;
  get = databaseModule.get;
  getDatabase = databaseModule.getDatabase;
  off = databaseModule.off;
  onValue = databaseModule.onValue;
  push = databaseModule.push;
  ref = databaseModule.ref;
  remove = databaseModule.remove;
  set = databaseModule.set;
  update = databaseModule.update;

  const app = initializeApp(firebaseConfig);
  state.auth = getAuth(app);
  state.db = getDatabase(app);
  state.firebaseReady = true;
  return true;
}

function iconMarkup(href) {
  const key = (href || "").split("/").pop().split("#")[0].split("?")[0];
  const paths = menuIcons[key];
  return paths ? `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>` : "";
}

function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.sgbToastTimer);
  window.sgbToastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function sanitize(value) {
  const div = document.createElement("div");
  div.textContent = String(value ?? "");
  return div.innerHTML;
}

function uid() {
  return state.user?.uid || null;
}

function userName() {
  return state.user?.displayName || state.profile?.name || state.user?.email?.split("@")[0] || "Lectora";
}

function requireAuth(message = "Inicia sesion para usar esta funcion.") {
  if (state.user) return true;
  showToast(message);
  if (location.pathname.split("/").pop() !== "cuenta.html") {
    setTimeout(() => {
      window.location.href = "cuenta.html";
    }, 700);
  }
  return false;
}

function dbRef(path) {
  return ref(state.db, path);
}

function stopRealtimeListeners() {
  state.listeners.forEach(({ path, callback }) => off(dbRef(path), "value", callback));
  state.listeners = [];
}

function listen(path, callback) {
  if (!state.firebaseReady) return;
  const listener = snapshot => callback(snapshot.val());
  onValue(dbRef(path), listener);
  state.listeners.push({ path, callback: listener });
}

async function setUserData(path, value) {
  if (!state.firebaseReady || !uid()) return false;
  await set(dbRef(`users/${uid()}/${path}`), value);
  return true;
}

async function pushData(path, value) {
  if (!state.firebaseReady) return null;
  const created = push(dbRef(path));
  await set(created, value);
  return created.key;
}

function normalizeNavigation() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector(".site-header");
  if (header) {
    header.innerHTML = buildHeaderShell(current);
  }

  if (!document.querySelector(".drawer-backdrop")) {
    document.body.insertAdjacentHTML("beforeend", '<div class="drawer-backdrop"></div>');
  }

  let drawer = document.querySelector(".drawer");
  if (!drawer) {
    document.body.insertAdjacentHTML("beforeend", '<aside class="drawer" aria-hidden="true"></aside>');
    drawer = document.querySelector(".drawer");
  }

  if (drawer) {
    drawer.setAttribute("aria-hidden", "true");
    drawer.innerHTML = buildDrawerMarkup(current);
  }

  document.querySelectorAll(".main-nav").forEach(nav => {
    nav.setAttribute("aria-label", "Menu principal");
    nav.innerHTML = headerMenuItems.map(item => headerLinkMarkup(item, current)).join("");
  });

  document.querySelectorAll(".drawer-links").forEach(nav => {
    nav.setAttribute("aria-label", "Menu lateral");
    nav.innerHTML = drawerMenuGroups.map((group, index) => {
      const links = group.map(item => drawerLinkMarkup(item, current)).join("");
      if (index === 0) return links;
      const label = index === 3 ? '<div class="drawer-section-label">Redes sociales</div>' : "";
      return `<div class="drawer-rule"></div>${label}${links}`;
    }).join("");
  });

  document.querySelectorAll('a[href="cuenta.html"]').forEach(link => {
    if (current === "cuenta.html") link.classList.add("active");
  });
}

function updateCartCount() {
  const cart = readStore(STORAGE.cart, []);
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cart.length;
  });
}

function renderAuthStatus() {
  document.querySelectorAll("[data-auth-status]").forEach(node => {
    if (TEMP_DISABLE_EXTERNAL_INTEGRATIONS) {
      node.textContent = state.user
        ? "Sesión local activa en este navegador."
        : "Sin sesión. Puedes crear una cuenta local en este navegador.";
      node.className = "auth-status warning";
      return;
    }
    if (!state.firebaseReady) {
      node.textContent = "Firebase esta pendiente: agrega tus claves en firebase-config.js.";
      node.className = "auth-status warning";
      return;
    }
    if (!state.user) {
      node.textContent = "Sesion cerrada. Puedes crear una cuenta o iniciar sesion.";
      node.className = "auth-status";
      return;
    }
    node.textContent = state.isAuthor
      ? "Sesion de autora verificada. Tienes acceso al dashboard privado."
      : "Sesion iniciada como lectora. Puedes comentar, guardar favoritos y comprar libros.";
    node.className = state.isAuthor ? "auth-status author" : "auth-status";
  });

  document.querySelectorAll("[data-user-email]").forEach(node => {
    node.textContent = state.user?.email || "Sin sesion";
  });
}

async function syncUserProfile() {
  if (!state.firebaseReady || !state.user) return;
  const userPath = `users/${state.user.uid}`;
  const snapshot = await get(dbRef(`${userPath}/profile`));
  const profile = snapshot.val() || {};
  const nextProfile = {
    name: state.user.displayName || profile.name || "Lectora",
    email: state.user.email,
    role: state.isAuthor ? "author" : "reader",
    updatedAt: Date.now()
  };
  await update(dbRef(`${userPath}/profile`), nextProfile);
  state.profile = nextProfile;
}

function syncLocalFallback() {
  state.favorites = readStore(STORAGE.favorites, []);
  state.purchasedBooks = readStore(STORAGE.purchasedBooks, []);
  state.readingProgress = readStore(STORAGE.readingProgress, {});
  state.blogLikes = readStore(STORAGE.blogLikes, {});
  state.blogStars = readStore(STORAGE.blogStars, {});
  state.blogComments = readStore(STORAGE.blogComments, {});
  state.reviews = readStore(STORAGE.reviews, []);
  state.blogPosts = readStore(STORAGE.blogPosts, {});
  state.chapters = readStore(STORAGE.chapters, {});
  const session = readStore(STORAGE.session, null);
  state.user = session ? { uid: session.uid, email: session.email, displayName: session.name } : null;
  state.profile = session;
  state.isAuthor = false;
}

async function initAuth() {
  syncLocalFallback();
  if (TEMP_DISABLE_EXTERNAL_INTEGRATIONS) {
    state.firebaseReady = false;
    renderEverything();
    return;
  }
  try {
    await loadFirebase();
  } catch (error) {
    console.warn("Firebase no pudo cargarse.", error);
    state.firebaseReady = false;
  }

  if (!state.firebaseReady) {
    renderEverything();
    return;
  }

  onAuthStateChanged(state.auth, async user => {
    stopRealtimeListeners();
    state.user = user;
    state.isAuthor = user?.email?.toLowerCase() === AUTHOR_EMAIL;
    state.profile = null;

    if (user) {
      await syncUserProfile();
      listen(`users/${user.uid}/favorites`, value => {
        state.favorites = Object.keys(value || {});
        renderFavorites();
        renderAccount();
      });
      listen(`users/${user.uid}/purchasedBooks`, value => {
        state.purchasedBooks = Object.keys(value || {});
        renderPurchaseButtons();
        renderCart();
        renderAccount();
        renderReader();
      });
      listen(`users/${user.uid}/readingProgress`, value => {
        state.readingProgress = value || {};
        renderAccount();
      });
      listen("chapters", value => {
        state.chapters = value || {};
        renderReader();
      });
    } else {
      syncLocalFallback();
    }

    listen("blog/posts", value => {
      state.blogPosts = value || {};
      renderDynamicBlogPosts();
    });
    listen("blog/comments", value => {
      state.blogComments = value || {};
      renderBlogComments();
    });
    listen("blog/likes", value => {
      state.blogLikes = value || {};
      renderBlogLikes();
    });
    listen("blog/stars", value => {
      state.blogStars = value || {};
      renderBlogStars();
    });
    listen("reviews/books/tbbmd", value => {
      state.reviews = Object.values(value || {}).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      renderReviews();
    });
    renderEverything();
  });
}

function renderEverything() {
  updateCartCount();
  renderAuthStatus();
  renderCart();
  renderFavorites();
  renderSearch("");
  renderReviews();
  renderBlogLikes();
  renderBlogStars();
  renderBlogComments();
  renderDynamicBlogPosts();
  renderAccount();
  renderPurchaseButtons();
  initAuthorDashboard();
  renderReader();
}

async function buyBook(id = "tbbmd") {
  if (TEMP_DISABLE_EXTERNAL_INTEGRATIONS) {
    addBookToCart(id, false);
    showToast("El libro está en tu carrito. Para completar la compra configura Stripe.");
    return;
  }
  if (!requireAuth("Inicia sesion para comprar y desbloquear el libro.")) return;
  if (state.purchasedBooks.includes(id)) {
    window.location.href = books.find(book => book.id === id)?.readUrl || "lector.html";
    return;
  }

  const paymentLink = stripePaymentLinks?.[id];
  if (paymentLink) {
    const url = new URL(paymentLink);
    url.searchParams.set("client_reference_id", state.user.uid);
    url.searchParams.set("prefilled_email", state.user.email);
    url.searchParams.set("book_id", id);
    window.location.href = url.toString();
    return;
  }

  addBookToCart(id, false);
  showToast("Agregamos el libro al carrito. Agrega tu Payment Link de Stripe para cobrar en vivo.");
}

function addBookToCart(id = "tbbmd", redirect = true) {
  if (state.purchasedBooks.includes(id)) {
    window.location.href = books.find(book => book.id === id)?.readUrl || "lector.html";
    return;
  }

  const cart = readStore(STORAGE.cart, []);
  if (!cart.includes(id)) {
    cart.push(id);
    writeStore(STORAGE.cart, cart);
  }
  updateCartCount();
  renderCart();
  showToast("Agregamos el libro al carrito.");
  if (redirect) {
    setTimeout(() => {
      window.location.href = "carrito.html";
    }, 350);
  }
}

async function addFavorite(id = "tbbmd") {
  if (!requireAuth("Inicia sesion para guardar favoritos.")) return;
  if (state.firebaseReady) {
    await setUserData(`favorites/${id}`, true);
  } else {
    const favorites = new Set(readStore(STORAGE.favorites, []));
    favorites.add(id);
    writeStore(STORAGE.favorites, [...favorites]);
    state.favorites = [...favorites];
  }
  renderFavorites();
  showToast("Guardado en favoritos.");
}

function renderPurchaseButtons() {
  document.querySelectorAll("[data-buy-book], [data-add-cart]").forEach(button => {
    const id = button.dataset.buyBook || button.dataset.addCart || "tbbmd";
    const purchased = state.purchasedBooks.includes(id);
    if (!purchased && button.closest(".inline-action")) return;
    button.textContent = purchased ? "Leer libro" : "Comprar ahora";
    button.dataset.purchased = purchased ? "true" : "false";
  });
}

function renderCart() {
  const node = document.getElementById("cartContent");
  if (!node) return;
  const cart = readStore(STORAGE.cart, []);
  const purchased = state.purchasedBooks;
  if (!cart.length && !purchased.length) {
    node.innerHTML = "<p class=\"body-copy\">Tu carrito esta listo para recibir tus libros favoritos.</p>";
    return;
  }
  const cartItems = cart.map(id => ({ id, status: "Pendiente de pago" }));
  const purchasedItems = purchased.map(id => ({ id, status: "Comprado y desbloqueado" }));
  node.innerHTML = [...purchasedItems, ...cartItems].map(item => {
    const book = books.find(bookItem => bookItem.id === item.id) || books[0];
    const action = purchased.includes(item.id)
      ? `<a class="outline-small" href="${book.readUrl}">Leer libro</a>`
      : `<button class="outline-small" type="button" data-buy-book="${item.id}">Pago desactivado</button>`;
    return `
      <div class="cart-line">
        <img src="${book.image}" alt="${sanitize(book.title)}">
        <div><strong>${sanitize(book.title)}</strong><br><span>${item.status}</span><div class="inline-action">${action}</div></div>
      </div>
    `;
  }).join("");
}

function renderFavorites() {
  const node = document.getElementById("favoritesContent");
  if (!node) return;
  if (!state.favorites.length) {
    node.innerHTML = "<p class=\"body-copy\">Aun no has guardado libros favoritos.</p>";
    return;
  }
  node.innerHTML = state.favorites.map(id => {
    const book = books.find(item => item.id === id) || books[0];
    return `
      <a class="result-item" href="${book.url}">
        <img src="${book.image}" alt="${sanitize(book.title)}">
        <span><strong>${sanitize(book.title)}</strong><br>${sanitize(book.detail)}</span>
      </a>
    `;
  }).join("");
}

function renderAccount() {
  const form = document.querySelector("[data-account-form]");
  const nameNode = document.querySelector("[data-account-name]");
  const emailNode = document.querySelector("[data-account-email]");
  const initialNode = document.querySelector("[data-account-initial]");
  const activityNode = document.querySelector("[data-account-activity]");
  if (!form && !activityNode) return;

  const account = state.user
    ? { name: userName(), email: state.user.email }
    : readStore(STORAGE.account, { name: "Sofia lectora", email: "correo@ejemplo.com" });
  const cart = readStore(STORAGE.cart, []);
  const notifications = readStore(STORAGE.notifications, []);
  const commentCount = Object.values(state.blogComments || {}).reduce((total, list) => {
    if (Array.isArray(list)) return total + list.length;
    return total + Object.keys(list || {}).length;
  }, 0);

  if (nameNode) nameNode.textContent = account.name || "Sofia lectora";
  if (emailNode) emailNode.textContent = account.email || "correo@ejemplo.com";
  if (initialNode) initialNode.textContent = (account.name || "S").trim().charAt(0).toUpperCase() || "S";
  if (form) {
    form.elements.name.value = account.name || "";
    form.elements.email.value = account.email || "";
  }

  const counts = {
    read: Object.keys(state.readingProgress || {}).length,
    cart: state.purchasedBooks.length,
    favorites: state.favorites.length,
    notifications: notifications.length
  };
  document.querySelectorAll("[data-account-count]").forEach(node => {
    node.textContent = counts[node.dataset.accountCount] ?? 0;
  });

  if (!activityNode) return;
  const favoriteItems = state.favorites.slice(0, 3).map(id => {
    const book = books.find(item => item.id === id) || books[0];
    return `
      <a class="account-list-item" href="${book.url}">
        <img src="${book.image}" alt="${sanitize(book.title)}">
        <span><strong>${sanitize(book.title)}</strong><span>Guardado en favoritos</span></span>
      </a>
    `;
  });
  const purchasedItems = state.purchasedBooks.slice(0, 3).map(id => {
    const book = books.find(item => item.id === id) || books[0];
    return `
      <a class="account-list-item" href="${book.readUrl}">
        <img src="${book.image}" alt="${sanitize(book.title)}">
        <span><strong>${sanitize(book.title)}</strong><span>Disponible para leer</span></span>
      </a>
    `;
  });
  const summaryItems = [
    `<article class="account-list-item"><img src="logosgb.png" alt=""><span><strong>${cart.length} libro${cart.length === 1 ? "" : "s"} en carrito</strong><span>Compras pendientes de Stripe</span></span></article>`,
    `<article class="account-list-item"><img src="logosgb.png" alt=""><span><strong>${commentCount} comentario${commentCount === 1 ? "" : "s"}</strong><span>Comentarios publicados en el blog</span></span></article>`
  ];

  activityNode.innerHTML = [...purchasedItems, ...favoriteItems, ...summaryItems].join("");
}

function renderSearch(query = "") {
  const node = document.getElementById("searchResults");
  if (!node) return;
  const clean = query.trim().toLowerCase();
  const filtered = books.filter(book => !clean || `${book.title} ${book.detail}`.toLowerCase().includes(clean));
  node.innerHTML = filtered.map(book => `
    <a class="result-item" href="${book.url}">
      <img src="${book.image}" alt="${sanitize(book.title)}">
      <span><strong>${sanitize(book.title)}</strong><br>${sanitize(book.detail)}</span>
    </a>
  `).join("") || "<p class=\"body-copy\">No encontramos resultados con esa busqueda.</p>";
}

function stars(value) {
  return "&#9733;".repeat(value) + "&#9734;".repeat(5 - value);
}

function renderReviews() {
  const node = document.getElementById("userReviews");
  if (!node) return;
  node.innerHTML = state.reviews.map(review => `
    <article class="review-card">
      <strong>${sanitize(review.name)} &nbsp; <span class="stars">${stars(Number(review.rating || 5))}</span></strong>
      <p>${sanitize(review.comment)}</p>
    </article>
  `).join("");
}

function countObjectItems(value) {
  if (!value) return 0;
  if (Array.isArray(value)) return value.length;
  return Object.keys(value).length;
}

function renderBlogLikes() {
  document.querySelectorAll("[data-like-count]").forEach(el => {
    const id = el.dataset.likeCount;
    el.textContent = countObjectItems(state.blogLikes?.[id]);
  });
}

function renderBlogStars() {
  document.querySelectorAll("[data-star-count]").forEach(el => {
    const id = el.dataset.starCount;
    el.textContent = countObjectItems(state.blogStars?.[id]);
  });
}

function renderBlogComments() {
  document.querySelectorAll("[data-comment-list]").forEach(list => {
    const postId = list.dataset.commentList;
    const raw = state.blogComments?.[postId] || [];
    const postComments = Array.isArray(raw) ? raw : Object.values(raw).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    list.innerHTML = postComments.map(comment => `
      <article class="reader-comment">
        <strong>${sanitize(comment.name)}</strong>
        <p>${sanitize(comment.comment)}</p>
      </article>
    `).join("") || "<p class=\"empty-comments\">Todavia no hay comentarios. Se la primera lectora en dejar uno.</p>";
  });
}

function dynamicPostMarkup(id, post) {
  const authorTools = state.isAuthor
    ? `<div class="author-tools"><button class="outline-small" type="button" data-edit-post="${id}">Editar</button><button class="outline-small danger" type="button" data-delete-post="${id}">Eliminar</button></div>`
    : "";
  return `
    <article class="editorial-post" data-blog-post="${id}">
      <div class="post-body">
        <div class="post-meta"><span>${sanitize(post.category || "Blog")}</span><span>Publicado por Sofia Garcia</span></div>
        <h2>${sanitize(post.title)}</h2>
        <p>${sanitize(post.body)}</p>
        ${post.link ? `<div class="post-playlist"><a href="${sanitize(post.link)}" target="_blank" rel="noreferrer">Abrir enlace</a></div>` : ""}
        <div class="blog-actions">
          <button class="like-button" type="button" data-blog-like="${id}">Corazon</button>
          <button class="like-button" type="button" data-blog-star="${id}">Estrella</button>
          <span><span data-like-count="${id}">0</span> corazones &middot; <span data-star-count="${id}">0</span> estrellas</span>
        </div>
        <form class="comment-form compact" data-comment-form="${id}">
          <input name="name" type="text" placeholder="Tu nombre" aria-label="Tu nombre">
          <textarea name="comment" placeholder="Deja tu mensaje" aria-label="Comentario"></textarea>
          <button class="rose-button" type="submit">Comentar</button>
        </form>
        <div class="comment-list" data-comment-list="${id}"></div>
        ${authorTools}
      </div>
    </article>
  `;
}

function renderDynamicBlogPosts() {
  const node = document.querySelector("[data-dynamic-blog-posts]");
  if (!node) return;
  const posts = Object.entries(state.blogPosts || {}).sort(([, a], [, b]) => (b.createdAt || 0) - (a.createdAt || 0));
  node.innerHTML = posts.map(([id, post]) => dynamicPostMarkup(id, post)).join("");
  renderBlogLikes();
  renderBlogStars();
  renderBlogComments();
}

function initAuthorDashboard() {
  const dashboard = document.querySelector("[data-author-dashboard]");
  const gate = document.querySelector("[data-author-gate]");
  if (!dashboard && !gate) return;

  if (dashboard) dashboard.hidden = !state.isAuthor;
  if (gate) {
    gate.textContent = state.isAuthor ? "Abrir panel privado" : "Panel solo para Sofia";
    gate.onclick = () => {
      if (state.isAuthor && dashboard) {
        dashboard.hidden = false;
        dashboard.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      showToast("Acceso reservado para anasofiaglb@gmail.com.");
    };
  }
}

function renderReader() {
  const node = document.querySelector("[data-reader]");
  if (!node) return;
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get("book") || "tbbmd";
  const book = books.find(item => item.id === bookId) || books[0];
  const canRead = state.isAuthor || state.purchasedBooks.includes(bookId);
  const chapters = Object.values(state.chapters?.[bookId] || {}).sort((a, b) => (a.order || 0) - (b.order || 0));

  document.querySelectorAll("[data-reader-title]").forEach(title => {
    title.textContent = book.title;
  });

  if (!state.user) {
    node.innerHTML = '<p class="body-copy">Inicia sesion para revisar si este libro esta desbloqueado en tu cuenta.</p><a class="rose-button" href="cuenta.html">Iniciar sesion</a>';
    return;
  }
  if (!canRead) {
    node.innerHTML = `<p class="body-copy">Este libro todavia no esta desbloqueado para tu cuenta.</p><button class="rose-button" type="button" data-buy-book="${bookId}">Comprar ahora</button>`;
    return;
  }
  if (!chapters.length) {
    node.innerHTML = '<p class="body-copy">La autora aun no ha subido capitulos para este libro.</p>';
    return;
  }
  node.innerHTML = chapters.map((chapter, index) => `
    <article class="reader-chapter">
      <p class="kicker">Capitulo ${index + 1}</p>
      <h2>${sanitize(chapter.title)}</h2>
      <p>${sanitize(chapter.body).replace(/\n/g, "<br>")}</p>
      <button class="outline-small" type="button" data-mark-progress="${bookId}" data-chapter="${chapter.id || index}">Marcar avance</button>
    </article>
  `).join("");
}

async function saveNotification(bookId) {
  const email = window.prompt("Escribe tu correo para avisarte cuando este libro este disponible:");
  if (!email) return;
  const notifications = readStore(STORAGE.notifications, []);
  notifications.push({ bookId, email, createdAt: new Date().toISOString() });
  writeStore(STORAGE.notifications, notifications);
  showToast("Listo. Guardamos tu correo para avisarte.");
}

function pageNameFromUrl(url) {
  return url.pathname.split("/").filter(Boolean).pop() || "index.html";
}

function samePageLink(url) {
  return url.origin === window.location.origin && pageNameFromUrl(url) === pageNameFromUrl(window.location);
}

function scrollToSection(hash, replace = false) {
  if (!hash) return false;
  const target = document.querySelector(hash);
  if (!target) return false;
  const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  if (replace) {
    history.pushState(null, "", hash);
    updateDrawerActiveLinks();
  }
  return true;
}

function updateDrawerActiveLinks() {
  const current = pageNameFromUrl(window.location);
  document.querySelectorAll(".drawer-link").forEach(link => {
    const url = new URL(link.getAttribute("href") || "", window.location.href);
    const linkPage = pageNameFromUrl(url);
    const active = url.origin === window.location.origin && linkPage === current && (!url.hash || url.hash === window.location.hash);
    link.classList.toggle("active", active);
  });
}

function adjustInitialHashScroll() {
  if (!window.location.hash) return;
  requestAnimationFrame(() => scrollToSection(window.location.hash));
  setTimeout(() => scrollToSection(window.location.hash), 250);
}

function initMenu() {
  if (window.sgbMenuInitialized) return;
  window.sgbMenuInitialized = true;
  const body = document.body;
  const getMenuParts = () => ({
    button: document.querySelector(".menu-button"),
    drawer: document.querySelector(".drawer"),
    backdrop: document.querySelector(".drawer-backdrop")
  });

  const open = () => {
    const { button, drawer, backdrop } = getMenuParts();
    if (!button || !drawer || !backdrop) return;
    drawer.classList.add("open");
    backdrop.classList.add("open");
    body.classList.add("menu-open");
    drawer.setAttribute("aria-hidden", "false");
    button.setAttribute("aria-expanded", "true");
  };
  const shut = () => {
    const { button, drawer, backdrop } = getMenuParts();
    if (!button || !drawer || !backdrop) return;
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    body.classList.remove("menu-open");
    drawer.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-expanded", "false");
  };

  document.addEventListener("click", event => {
    const button = event.target.closest(".menu-button");
    if (!button) return;
    event.preventDefault();
    const drawer = document.querySelector(".drawer");
    if (!drawer) return;
    if (drawer.classList.contains("open")) {
      shut();
      return;
    }
    open();
  });

  document.addEventListener("click", event => {
    const drawerLink = event.target.closest(".drawer a");
    if (drawerLink) {
      const href = drawerLink.getAttribute("href") || "";
      const url = new URL(href, window.location.href);
      shut();
      if (samePageLink(url) && url.hash) {
        event.preventDefault();
        scrollToSection(url.hash, true);
      }
      return;
    }
    if (event.target.closest(".drawer-close") || event.target.classList.contains("drawer-backdrop")) {
      shut();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") shut();
  });

  window.addEventListener("hashchange", updateDrawerActiveLinks);
}

window.addEventListener("load", adjustInitialHashScroll);

function enhanceNavigationIcons() {
  document.querySelectorAll(".main-nav a, .drawer-links a").forEach(link => {
    if (link.querySelector(".nav-icon")) return;
    const icon = iconMarkup(link.getAttribute("href"));
    if (!icon) return;

    if (link.classList.contains("icon-pill")) {
      [...link.childNodes].forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          const hidden = document.createElement("span");
          hidden.className = "cart-letter";
          hidden.textContent = node.textContent.trim();
          node.replaceWith(hidden);
        }
      });
    }

    link.insertAdjacentHTML("afterbegin", icon);
  });
}

async function submitAuthForm(form, mode) {
  if (TEMP_DISABLE_EXTERNAL_INTEGRATIONS) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    const saved = readStore(STORAGE.account, null);
    const passwordHash = async value => {
      const bytes = new TextEncoder().encode(value);
      const digest = await crypto.subtle.digest("SHA-256", bytes);
      return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
    };
    if (!email || !password || (mode === "register" && (!name || password.length < 6))) {
      showToast(mode === "register" ? "Completa tu nombre, correo y una contraseña de al menos 6 caracteres." : "Escribe tu correo y contraseña.");
      return;
    }
    const hash = await passwordHash(password);
    if (mode === "login" && (!saved || saved.email.toLowerCase() !== email || saved.passwordHash !== hash)) {
      showToast("Correo o contraseña incorrectos para esta cuenta local.");
      return;
    }
    const profile = mode === "register" ? { name, email, passwordHash: hash } : saved;
    writeStore(STORAGE.account, profile);
    const session = { ...profile, uid: `local-${email}` };
    writeStore(STORAGE.session, session);
    state.user = { uid: session.uid, email: session.email, displayName: session.name };
    state.profile = session;
    state.isAuthor = false;
    form.elements.password.value = "";
    renderEverything();
    showToast(mode === "register" ? "Cuenta local creada en este navegador." : "Sesión iniciada en este navegador.");
    return;
  }
  if (!state.firebaseReady) {
    showToast("Agrega tus claves reales en firebase-config.js antes de usar Firebase Authentication.");
    return;
  }
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const password = String(data.get("password") || "");
  if (!email || !password) {
    showToast("Escribe correo y contrasena.");
    return;
  }
  if (mode === "register" && password.length < 6) {
    showToast("Firebase pide una contrasena de al menos 6 caracteres.");
    return;
  }
  try {
    if (mode === "register") {
      const credential = await createUserWithEmailAndPassword(state.auth, email, password);
      if (name) await updateProfile(credential.user, { displayName: name });
      state.user = credential.user;
      await syncUserProfile();
      renderEverything();
      showToast("Cuenta creada y guardada en Firebase Authentication.");
    } else {
      const credential = await signInWithEmailAndPassword(state.auth, email, password);
      state.user = credential.user;
      await syncUserProfile();
      renderEverything();
      showToast("Sesion iniciada.");
    }
    form.elements.password.value = "";
  } catch (error) {
    showToast(error.message || "No se pudo autenticar.");
  }
}
document.addEventListener("click", async event => {
  const buyButton = event.target.closest("[data-buy-book]");
  const cartButton = event.target.closest("[data-add-cart]");
  const favoriteButton = event.target.closest("[data-add-favorite]");
  const likeButton = event.target.closest("[data-blog-like]");
  const starButton = event.target.closest("[data-blog-star]");
  const notifyButton = event.target.closest("[data-notify]");
  const toastButton = event.target.closest("[data-toast]");
  const registerButton = event.target.closest("[data-auth-register]");
  const loginButton = event.target.closest("[data-auth-login]");
  const logoutButton = event.target.closest("[data-auth-logout]");
  const deletePostButton = event.target.closest("[data-delete-post]");
  const editPostButton = event.target.closest("[data-edit-post]");
  const progressButton = event.target.closest("[data-mark-progress]");

  if (cartButton) addBookToCart(cartButton.dataset.addCart || "tbbmd");
  if (buyButton) buyBook(buyButton.dataset.buyBook || "tbbmd");
  if (favoriteButton) addFavorite(favoriteButton.dataset.addFavorite || "tbbmd");
  if (notifyButton) saveNotification(notifyButton.dataset.notify);
  if (toastButton) showToast(toastButton.dataset.toast);
  if (registerButton) submitAuthForm(registerButton.closest("form"), "register");
  if (loginButton) submitAuthForm(loginButton.closest("form"), "login");
  if (logoutButton) {
    if (state.firebaseReady && state.auth) await signOut(state.auth);
    else {
      localStorage.removeItem(STORAGE.session);
      state.user = null;
      state.profile = null;
      state.isAuthor = false;
      renderEverything();
      showToast("Sesión cerrada.");
    }
  }

  if (likeButton) {
    if (!requireAuth("Inicia sesion para dar like.")) return;
    const id = likeButton.dataset.blogLike;
    if (state.firebaseReady) {
      await set(dbRef(`blog/likes/${id}/${uid()}`), true);
    } else {
      state.blogLikes[id] = state.blogLikes[id] || {};
      state.blogLikes[id].local = true;
      writeStore(STORAGE.blogLikes, state.blogLikes);
    }
    renderBlogLikes();
    showToast("Gracias por tu corazon.");
  }

  if (starButton) {
    if (!requireAuth("Inicia sesion para dejar estrellas.")) return;
    const id = starButton.dataset.blogStar;
    if (state.firebaseReady) {
      await set(dbRef(`blog/stars/${id}/${uid()}`), true);
    } else {
      state.blogStars[id] = state.blogStars[id] || {};
      state.blogStars[id].local = true;
      writeStore(STORAGE.blogStars, state.blogStars);
    }
    renderBlogStars();
    showToast("Tu estrella quedo guardada.");
  }

  if (deletePostButton) {
    if (!state.isAuthor) return;
    const id = deletePostButton.dataset.deletePost;
    if (state.firebaseReady) await remove(dbRef(`blog/posts/${id}`));
    showToast("Publicacion eliminada.");
  }

  if (editPostButton) {
    if (!state.isAuthor) return;
    const id = editPostButton.dataset.editPost;
    const post = state.blogPosts[id];
    const form = document.querySelector("[data-author-editor]");
    if (!form || !post) return;
    form.dataset.editingPost = id;
    form.elements.title.value = post.title || "";
    form.elements.category.value = post.category || "";
    form.elements.body.value = post.body || "";
    form.elements.link.value = post.link || "";
    form.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (progressButton) {
    if (!requireAuth("Inicia sesion para guardar tu progreso.")) return;
    const bookId = progressButton.dataset.markProgress;
    const chapterId = progressButton.dataset.chapter;
    const progress = { chapterId, updatedAt: Date.now() };
    if (state.firebaseReady) await setUserData(`readingProgress/${bookId}`, progress);
    showToast("Progreso guardado.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  normalizeNavigation();
  initMenu();
  enhanceNavigationIcons();
  adjustInitialHashScroll();
  initAuth();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.addEventListener("input", event => renderSearch(event.target.value));

  const reviewForm = document.getElementById("reviewForm");
  if (reviewForm) {
    reviewForm.addEventListener("submit", async event => {
      event.preventDefault();
      if (!requireAuth("Inicia sesion para publicar una resena.")) return;
      const form = new FormData(reviewForm);
      const review = {
        bookId: "tbbmd",
        userId: uid(),
        name: userName(),
        rating: Number(form.get("rating") || 5),
        comment: String(form.get("comment") || "").trim(),
        createdAt: Date.now()
      };
      if (!review.comment) return;
      if (state.firebaseReady) {
        await pushData("reviews/books/tbbmd", review);
        await set(dbRef(`ratings/books/tbbmd/${uid()}`), review.rating);
      } else {
        state.reviews.unshift(review);
        writeStore(STORAGE.reviews, state.reviews);
      }
      reviewForm.reset();
      renderReviews();
      showToast("Tu resena se publico.");
    });
  }

  document.querySelectorAll("[data-contact-form]").forEach(form => {
    form.addEventListener("submit", () => {
      showToast("Enviando mensaje al correo de Sofia Garcia Books.");
    });
  });

  document.querySelectorAll("[data-account-form]").forEach(form => {
    form.addEventListener("submit", event => event.preventDefault());
  });

  document.querySelectorAll("[data-account-form] input[name=name], [data-account-form] input[name=email]").forEach(input => {
    input.addEventListener("change", () => {
      if (!state.user) return;
      const form = input.form;
      const saved = readStore(STORAGE.account, {});
      const profile = { ...saved, name: String(form.elements.name.value || state.user.displayName).trim(), email: String(form.elements.email.value || state.user.email).trim() };
      if (!profile.name || !profile.email) return;
      state.user.displayName = profile.name;
      state.user.email = profile.email;
      state.profile = profile;
      writeStore(STORAGE.account, profile);
      writeStore(STORAGE.session, { ...profile, uid: state.user.uid });
      renderEverything();
      showToast("Perfil actualizado en este navegador.");
    });
  });

  document.addEventListener("submit", async event => {
    const form = event.target.closest("[data-comment-form]");
    if (!form) return;
    event.preventDefault();
    if (!requireAuth("Inicia sesion para comentar.")) return;
    const postId = form.dataset.commentForm;
    const data = new FormData(form);
    const comment = {
      userId: uid(),
      name: String(data.get("name") || userName()).trim(),
      comment: String(data.get("comment") || "").trim(),
      createdAt: Date.now()
    };
    if (!comment.comment) return;
    if (state.firebaseReady) {
      await pushData(`blog/comments/${postId}`, comment);
    } else {
      state.blogComments[postId] = state.blogComments[postId] || [];
      state.blogComments[postId].unshift(comment);
      writeStore(STORAGE.blogComments, state.blogComments);
    }
    form.reset();
    renderBlogComments();
    showToast("Tu comentario se publico en el diario de autora.");
  });

  document.querySelectorAll("[data-author-editor]").forEach(form => {
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (!state.isAuthor) {
        showToast("Solo anasofiaglb@gmail.com puede publicar contenido.");
        return;
      }
      const data = new FormData(form);
      const post = {
        title: String(data.get("title") || "").trim(),
        category: String(data.get("category") || "Diario de escritura").trim(),
        body: String(data.get("body") || "").trim(),
        link: String(data.get("link") || "").trim(),
        authorEmail: AUTHOR_EMAIL,
        updatedAt: Date.now()
      };
      if (!post.title || !post.body) return;
      if (state.firebaseReady) {
        const editingId = form.dataset.editingPost;
        if (editingId) {
          await update(dbRef(`blog/posts/${editingId}`), post);
          delete form.dataset.editingPost;
        } else {
          await pushData("blog/posts", { ...post, createdAt: Date.now() });
        }
      } else {
        const key = form.dataset.editingPost || `post-${Date.now()}`;
        state.blogPosts[key] = { ...post, createdAt: state.blogPosts[key]?.createdAt || Date.now() };
        writeStore(STORAGE.blogPosts, state.blogPosts);
      }
      form.reset();
      renderDynamicBlogPosts();
      showToast("Publicacion guardada en Firebase Realtime Database.");
    });
  });

  document.querySelectorAll("[data-chapter-editor]").forEach(form => {
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (!state.isAuthor) {
        showToast("Solo la autora puede subir capitulos.");
        return;
      }
      const data = new FormData(form);
      const bookId = String(data.get("bookId") || "tbbmd");
      const chapterKey = `chapter-${Date.now()}`;
      const chapter = {
        id: chapterKey,
        title: String(data.get("chapterTitle") || "").trim(),
        body: String(data.get("chapterBody") || "").trim(),
        order: Number(data.get("chapterOrder") || Date.now()),
        createdAt: Date.now()
      };
      if (!chapter.title || !chapter.body) return;
      if (state.firebaseReady) {
        await set(dbRef(`chapters/${bookId}/${chapterKey}`), chapter);
      } else {
        state.chapters[bookId] = state.chapters[bookId] || {};
        state.chapters[bookId][chapterKey] = chapter;
        writeStore(STORAGE.chapters, state.chapters);
      }
      form.reset();
      showToast("Capitulo guardado para lectoras con compra confirmada.");
    });
  });
});




