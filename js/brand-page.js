/* ============================================
   EEC CORPORATE — BRAND PAGE RENDERER
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const brandKey = document.body.getAttribute('data-brand');
  if (!brandKey || !window.BRANDS) return;

  const brand = window.BRANDS[brandKey];
  if (!brand) return;

  renderCategories(brand);
  renderProducts(brand);
  renderTestimonials(brand);
});

function renderCategories(brand) {
  const container = document.getElementById('category-grid');
  if (!container) return;

  const brandKey = document.body.getAttribute('data-brand') || 'tech';
  const productImg = window.BRAND_PRODUCT_IMAGES ? window.BRAND_PRODUCT_IMAGES[brandKey] : null;

  const positions = ['center top', 'right top', 'left bottom', 'right bottom'];

  container.innerHTML = brand.categories.map((cat, i) => `
    <a href="#" class="category-card">
      <div class="category-card-bg" style="${productImg ? `background:url('${productImg}') ${positions[i % positions.length]} / cover no-repeat` : `background:linear-gradient(135deg, var(--brand-color), var(--brand-color-dark))`}"></div>
      <div class="category-card-overlay"></div>
      <div class="category-card-content">
        <h3>${cat.name}</h3>
        <p>${cat.desc} — ${cat.count} produtos</p>
      </div>
    </a>
  `).join('');
}

function renderProducts(brand) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = brand.products.map((p, i) => generateProductCard(p, i)).join('');
}

function renderTestimonials(brand) {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  const testimonials = [
    { text: `Excelente experiência de compra na ${brand.name}. Produtos de qualidade e entrega rápida para Maputo.`, name: 'Maria Santos', role: 'Cliente desde 2022', rating: 5 },
    { text: `Fiquei impressionado com o atendimento. A equipa é muito profissional e os preços são justos.`, name: 'João Machava', role: 'Cliente desde 2021', rating: 5 },
    { text: `Recomendo sem hesitar! Produtos originais, bem embalados e com garantia. Voltarei a comprar.`, name: 'Ana Costa', role: 'Cliente desde 2023', rating: 4 }
  ];

  container.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" style="display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-weight:700;color:white;font-size:1.1rem">${t.name.charAt(0)}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}
