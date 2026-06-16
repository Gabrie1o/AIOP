// ── Products ──────────────────────────────────────────────────
const beds = [
  { id:'BED-01', num:'BED-01', cat:'Bed', name:'Grey Velvet Tufted Bed', desc:'Diamond-button tufted headboard in premium grey velvet with crystal embellishments. Solid hardwood frame with matching footboard and side rails.', price:85000, img:'img/bed-01.jpg' },
  { id:'BED-02', num:'BED-02', cat:'Bed', name:'Burgundy Royal Velvet Bed', desc:'Statement bed in rich burgundy velvet with full diamond tufting, crystal studs, and rope trim detail. Curved headboard and scallop footboard.', price:85000, img:'img/bed-02.jpg' },
  { id:'BED-03', num:'BED-03', cat:'Bed', name:'Blue Fabric Wingback Bed', desc:'Wingback-style headboard in durable blue fabric with button-tuft centre panel. Elegant curved footboard with matching upholstered panels.', price:85000, img:'img/bed-03.jpg' },
  { id:'BED-04', num:'BED-04', cat:'Bed', name:'Black Luxury Wingback Bed', desc:'Bold black upholstered bed with dramatic high wingback headboard, crystal stud accents, and sculpted footboard. A true centrepiece.', price:85000, img:'img/bed-04.jpg' },
];

const vanities = [
  { id:'VAN-01', num:'VAN-01', cat:'Vanity', name:'White Classic Dresser Vanity', desc:'9-drawer white dresser vanity with full-width frameless mirror. Silver bar handles throughout. Ample storage for a complete dressing suite.', price:5200, img:'img/van-01.jpg' },
  { id:'VAN-02', num:'VAN-02', cat:'Vanity', name:'White Panel Vanity — View B', desc:'The same elegant 9-drawer white vanity shown from a complementary angle. Showcases the deep drawer capacity and clean panel detailing.', price:5200, img:'img/van-02.jpg' },
  { id:'VAN-03', num:'VAN-03', cat:'Vanity', name:'White Wide-Format Vanity', desc:'Wider-format dresser vanity with panoramic mirror, 10 spacious drawers, and premium silver hardware. Perfect for larger dressing rooms.', price:5200, img:'img/van-03.jpg' },
];

const wardrobes = [
  { id:'WAR-01', num:'WAR-01', cat:'Wardrobe', name:'White Glass-Door Display Wardrobe', desc:'Large-scale wardrobe unit with two glass-panel side doors, open centre display bay, and 6 deep base drawers. Elegant silver hardware throughout.', price:62000, img:'img/war-01.jpg' },
  { id:'WAR-02', num:'WAR-02', cat:'Wardrobe', name:'White 4-Door Mirror Wardrobe', desc:'Four-door wardrobe with full-length mirror panels on outer doors, ample hanging space, and 6 lower drawers. A complete bedroom storage solution.', price:62000, img:'img/war-02.jpg' },
];

// ── Render ────────────────────────────────────────────────────
function fmt(n) { return '$' + n.toLocaleString(); }

function renderGrid(items, containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(p => `
    <div class="product-card reveal" onclick="openModal('${p.id}')">
      <div class="product-card__num">${p.num}</div>
      <div class="product-card__img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="product-card__overlay"><span>Quick View</span></div>
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${p.cat}</span>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${fmt(p.price)}</span>
          <button class="product-card__cta">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

// ── Modal ─────────────────────────────────────────────────────
const allProducts = [...beds, ...vanities, ...wardrobes];
let currentProduct = null, qty = 1;

function openModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  currentProduct = p; qty = 1;
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalCat').textContent = p.cat;
  document.getElementById('modalNum').textContent = p.num;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = fmt(p.price);
  document.getElementById('qtyValue').textContent = 1;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === document.getElementById('modalOverlay')) closeModal(); });
document.getElementById('qtyMinus').addEventListener('click', () => { if (qty > 1) { qty--; document.getElementById('qtyValue').textContent = qty; } });
document.getElementById('qtyPlus').addEventListener('click', () => { qty++; document.getElementById('qtyValue').textContent = qty; });
document.getElementById('modalAdd').addEventListener('click', () => { if (currentProduct) { addToCart(currentProduct, qty); closeModal(); } });

// ── Cart ──────────────────────────────────────────────────────
let cart = [];
function addToCart(p, quantity = 1) {
  const ex = cart.find(i => i.id === p.id);
  ex ? ex.qty += quantity : cart.push({ ...p, qty: quantity });
  updateCartUI();
  showToast(`${p.name} added to cart`);
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCartUI(); }
function updateCartUI() {
  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s,i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = fmt(total);
  const el = document.getElementById('cartItems');
  el.innerHTML = cart.length === 0
    ? '<p class="cart-empty">Your cart is empty.</p>'
    : cart.map(i => `<div class="cart-item">
        <div><p class="cart-item__name">${i.name}</p><p class="cart-item__qty">${i.num} · Qty: ${i.qty}</p></div>
        <span class="cart-item__price">${fmt(i.price * i.qty)}</span>
        <button class="cart-item__remove" onclick="removeFromCart('${i.id}')">✕</button>
      </div>`).join('');
}
document.getElementById('cartBtn').addEventListener('click', () => { document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); document.body.style.overflow = 'hidden'; });
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);
function closeCart() { document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); document.body.style.overflow = ''; }

// ── Navbar scroll ─────────────────────────────────────────────
window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40));

// ── Mobile menu ───────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => document.getElementById('mobileMenu').classList.toggle('open'));
document.querySelectorAll('.mobile-link').forEach(a => a.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open')));

// ── Reveal on scroll ──────────────────────────────────────────
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}

// ── Animated counters ─────────────────────────────────────────
new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) return;
  document.querySelectorAll('.count').forEach(el => {
    const target = +el.dataset.target, step = target / 55;
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur) + '+';
      if (cur >= target) clearInterval(t);
    }, 22);
  });
  entries[0].target._io.disconnect();
}, { threshold: 0.5 }).observe(Object.assign(document.querySelector('.stats'), { _io: new IntersectionObserver(()=>{}) }));

// ── Contact form ──────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formSuccess').classList.add('visible');
  e.target.reset();
  setTimeout(() => document.getElementById('formSuccess').classList.remove('visible'), 5000);
});

// ── Keyboard ──────────────────────────────────────────────────
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeCart(); } });

// ── Toast ─────────────────────────────────────────────────────
let _tt;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(_tt); _tt = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── 3D Gem Canvas ─────────────────────────────────────────────
(function initGem() {
  const canvas = document.getElementById('gemCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  let angle = 0;

  // Gem facets defined as polygons in 3D, projected to 2D
  const GOLD   = (a) => `rgba(201,168,76,${a})`;
  const LIGHT  = (a) => `rgba(240,220,140,${a})`;
  const DARK   = (a) => `rgba(80,55,10,${a})`;
  const WHITE  = (a) => `rgba(255,248,220,${a})`;

  function project(x, y, z, scale = 140) {
    const fov = 500;
    const f = fov / (fov + z);
    return { x: cx + x * f * scale, y: cy + y * f * scale };
  }

  function rotateFacets(facets, ay) {
    const cos = Math.cos(ay), sin = Math.sin(ay);
    return facets.map(facet => ({
      ...facet,
      verts: facet.verts.map(([x, y, z]) => [
        x * cos - z * sin, y, x * sin + z * cos
      ])
    }));
  }

  // Define gem shape: octagonal prism top + pyramid bottom
  const raw = [
    // Top crown facets (upper triangles)
    { verts: [[0,.85,0],[.55,.2,.38],[.7,.2,0]],    shade:LIGHT, alpha:.95 },
    { verts: [[0,.85,0],[.38,.2,.55],[.55,.2,.38]],  shade:GOLD,  alpha:.9 },
    { verts: [[0,.85,0],[0,.2,.65],[.38,.2,.55]],    shade:LIGHT, alpha:.85 },
    { verts: [[0,.85,0],[-.38,.2,.55],[0,.2,.65]],   shade:GOLD,  alpha:.9 },
    { verts: [[0,.85,0],[-.55,.2,.38],[-.38,.2,.55]],shade:DARK,  alpha:.7 },
    { verts: [[0,.85,0],[-.7,.2,0],[-.55,.2,.38]],   shade:DARK,  alpha:.65 },
    { verts: [[0,.85,0],[-.55,.2,-.38],[-.7,.2,0]],  shade:DARK,  alpha:.7 },
    { verts: [[0,.85,0],[-.38,.2,-.55],[-.55,.2,-.38]],shade:GOLD,alpha:.8 },
    { verts: [[0,.85,0],[0,.2,-.65],[-.38,.2,-.55]], shade:LIGHT, alpha:.9 },
    { verts: [[0,.85,0],[.38,.2,-.55],[0,.2,-.65]],  shade:GOLD,  alpha:.88 },
    { verts: [[0,.85,0],[.55,.2,-.38],[.38,.2,-.55]],shade:LIGHT, alpha:.95 },
    { verts: [[0,.85,0],[.7,.2,0],[.55,.2,-.38]],    shade:LIGHT, alpha:.98 },

    // Middle girdle quads
    { verts: [[.7,.2,0],[.55,.2,.38],[.55,-.2,.38],[.7,-.2,0]],      shade:LIGHT, alpha:.85 },
    { verts: [[.55,.2,.38],[.38,.2,.55],[.38,-.2,.55],[.55,-.2,.38]],shade:GOLD,  alpha:.8 },
    { verts: [[.38,.2,.55],[0,.2,.65],[0,-.2,.65],[.38,-.2,.55]],    shade:WHITE, alpha:.9 },
    { verts: [[0,.2,.65],[-.38,.2,.55],[-.38,-.2,.55],[0,-.2,.65]],  shade:GOLD,  alpha:.75 },
    { verts: [[-.38,.2,.55],[-.55,.2,.38],[-.55,-.2,.38],[-.38,-.2,.55]],shade:DARK,alpha:.6 },
    { verts: [[-.55,.2,.38],[-.7,.2,0],[-.7,-.2,0],[-.55,-.2,.38]],  shade:DARK,  alpha:.55 },
    { verts: [[-.7,.2,0],[-.55,.2,-.38],[-.55,-.2,-.38],[-.7,-.2,0]],shade:DARK,  alpha:.6 },
    { verts: [[-.55,.2,-.38],[-.38,.2,-.55],[-.38,-.2,-.55],[-.55,-.2,-.38]],shade:GOLD,alpha:.7 },
    { verts: [[-.38,.2,-.55],[0,.2,-.65],[0,-.2,-.65],[-.38,-.2,-.55]],shade:LIGHT,alpha:.85 },
    { verts: [[0,.2,-.65],[.38,.2,-.55],[.38,-.2,-.55],[0,-.2,-.65]], shade:LIGHT, alpha:.9 },
    { verts: [[.38,.2,-.55],[.55,.2,-.38],[.55,-.2,-.38],[.38,-.2,-.55]],shade:LIGHT,alpha:.88 },
    { verts: [[.55,.2,-.38],[.7,.2,0],[.7,-.2,0],[.55,-.2,-.38]],    shade:WHITE, alpha:.95 },

    // Bottom pavilion triangles
    { verts: [[0,-.95,0],[.7,-.2,0],[.55,-.2,.38]],    shade:DARK,  alpha:.7 },
    { verts: [[0,-.95,0],[.55,-.2,.38],[.38,-.2,.55]],  shade:GOLD,  alpha:.75 },
    { verts: [[0,-.95,0],[.38,-.2,.55],[0,-.2,.65]],    shade:DARK,  alpha:.65 },
    { verts: [[0,-.95,0],[0,-.2,.65],[-.38,-.2,.55]],   shade:DARK,  alpha:.6 },
    { verts: [[0,-.95,0],[-.38,-.2,.55],[-.55,-.2,.38]],shade:DARK,  alpha:.55 },
    { verts: [[0,-.95,0],[-.55,-.2,.38],[-.7,-.2,0]],   shade:DARK,  alpha:.5 },
    { verts: [[0,-.95,0],[-.7,-.2,0],[-.55,-.2,-.38]],  shade:DARK,  alpha:.55 },
    { verts: [[0,-.95,0],[-.55,-.2,-.38],[-.38,-.2,-.55]],shade:GOLD,alpha:.65 },
    { verts: [[0,-.95,0],[-.38,-.2,-.55],[0,-.2,-.65]], shade:LIGHT, alpha:.7 },
    { verts: [[0,-.95,0],[0,-.2,-.65],[.38,-.2,-.55]],  shade:LIGHT, alpha:.8 },
    { verts: [[0,-.95,0],[.38,-.2,-.55],[.55,-.2,-.38]],shade:LIGHT, alpha:.85 },
    { verts: [[0,-.95,0],[.55,-.2,-.38],[.7,-.2,0]],    shade:LIGHT, alpha:.9 },
  ];

  // Sparkle particles
  const sparks = Array.from({length:18}, () => ({
    angle: Math.random() * Math.PI * 2,
    dist: 90 + Math.random() * 60,
    phase: Math.random() * Math.PI * 2,
    size: 1 + Math.random() * 2.5,
    speed: .4 + Math.random() * .6,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Subtle ambient glow
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 150);
    grad.addColorStop(0, 'rgba(201,168,76,0.08)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Rotate facets
    const rotated = rotateFacets(raw, angle);

    // Sort back-to-front by average Z
    rotated.sort((a, b) => {
      const az = a.verts.reduce((s,v) => s + v[2], 0) / a.verts.length;
      const bz = b.verts.reduce((s,v) => s + v[2], 0) / b.verts.length;
      return az - bz;
    });

    // Draw facets
    rotated.forEach(facet => {
      const pts = facet.verts.map(([x,y,z]) => project(x, y, z));
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.closePath();

      // Shimmer based on angle
      const shimmer = (Math.sin(angle * 2 + facet.verts[0][0]) + 1) / 2;
      const alpha = facet.alpha * (.7 + .3 * shimmer);
      ctx.fillStyle = facet.shade(alpha);
      ctx.fill();
      ctx.strokeStyle = 'rgba(201,168,76,0.25)';
      ctx.lineWidth = .5;
      ctx.stroke();
    });

    // Inner highlight flash
    const flashAlpha = Math.max(0, Math.sin(angle * 1.5)) * .25;
    const flash = ctx.createRadialGradient(cx - 20, cy - 30, 0, cx, cy, 90);
    flash.addColorStop(0, `rgba(255,248,220,${flashAlpha})`);
    flash.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = flash;
    ctx.fillRect(0, 0, W, H);

    // Sparkles
    sparks.forEach(s => {
      const a = s.angle + angle * s.speed * .3;
      const pulse = (Math.sin(angle * s.speed * 2 + s.phase) + 1) / 2;
      if (pulse < 0.4) return;
      const sx = cx + Math.cos(a) * s.dist;
      const sy = cy + Math.sin(a) * s.dist * .6;
      const r = s.size * pulse;
      ctx.save();
      ctx.globalAlpha = pulse * .9;
      // 4-point star
      ctx.beginPath();
      const arms = 4, inner = r * .3, outer = r * 1.8;
      for (let i = 0; i < arms * 2; i++) {
        const rad = (i % 2 === 0 ? outer : inner);
        const a2 = (i / (arms * 2)) * Math.PI * 2 - Math.PI / 4;
        i === 0 ? ctx.moveTo(sx + Math.cos(a2)*rad, sy + Math.sin(a2)*rad)
                : ctx.lineTo(sx + Math.cos(a2)*rad, sy + Math.sin(a2)*rad);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(255,248,200,1)`;
      ctx.shadowColor = 'rgba(201,168,76,0.9)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    });

    angle += 0.012;
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── Counter fix ───────────────────────────────────────────────
const statsEl = document.querySelector('.stats');
if (statsEl) {
  const io = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    document.querySelectorAll('.count').forEach(el => {
      const target = +el.dataset.target;
      let cur = 0; const step = target / 55;
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur) + '+';
        if (cur >= target) clearInterval(t);
      }, 22);
    });
    io.disconnect();
  }, { threshold: 0.5 });
  io.observe(statsEl);
}

// ── Init ──────────────────────────────────────────────────────
renderGrid(beds, 'bed-grid');
renderGrid(vanities, 'vanity-grid');
renderGrid(wardrobes, 'wardrobe-grid');
observeReveal();
