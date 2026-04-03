/* ============================================
   EEC CORPORATE — BRAND PAGE SHARED DATA
   ============================================ */

const BRANDS = {
    tech: {
        name: 'EEC Tech',
        tagline: 'Inovação ao Seu Alcance',
        segment: 'Electrónicos & Tecnologia',
        color: '#1565C0',
        colorDark: '#0D47A1',
        categories: [
            { name: 'Smartphones', desc: 'Os melhores modelos', count: 45 },
            { name: 'Laptops', desc: 'Para trabalho e lazer', count: 32 },
            { name: 'Televisões', desc: 'Imagem de qualidade', count: 28 },
            { name: 'Acessórios', desc: 'Tudo que precisa', count: 120 }
        ],
        products: [
            { name: 'Samsung Galaxy S24 Ultra', category: 'Smartphones', price: 89999, oldPrice: 99999, badge: 'Novo', rating: 4.8 },
            { name: 'MacBook Air M3', category: 'Laptops', price: 125000, badge: 'Destaque', rating: 4.9 },
            { name: 'Samsung QLED 65"', category: 'Televisões', price: 75000, oldPrice: 85000, badge: 'Promoção', rating: 4.7 },
            { name: 'iPhone 15 Pro Max', category: 'Smartphones', price: 95000, rating: 4.9 },
            { name: 'AirPods Pro 2', category: 'Acessórios', price: 22000, badge: 'Popular', rating: 4.6 },
            { name: 'Dell XPS 15', category: 'Laptops', price: 110000, rating: 4.7 },
        ]
    },
    cars: {
        name: 'EEC Cars',
        tagline: 'A Sua Próxima Viagem Começa Aqui',
        segment: 'Automóveis Novos & Usados',
        color: '#E65100',
        colorDark: '#BF360C',
        categories: [
            { name: 'Sedans', desc: 'Conforto e elegância', count: 18 },
            { name: 'SUVs', desc: 'Potência e versatilidade', count: 24 },
            { name: 'Comerciais', desc: 'Para o seu negócio', count: 12 },
            { name: 'Usados Certificados', desc: 'Qualidade garantida', count: 35 }
        ],
        products: [
            { name: 'Toyota Corolla 2024', category: 'Sedans', price: 2500000, badge: 'Novo', rating: 4.8 },
            { name: 'Toyota RAV4 Hybrid', category: 'SUVs', price: 4200000, badge: 'Destaque', rating: 4.9 },
            { name: 'Nissan Navara', category: 'Comerciais', price: 3800000, rating: 4.6 },
            { name: 'Toyota Fortuner', category: 'SUVs', price: 5500000, badge: 'Popular', rating: 4.7 },
            { name: 'Honda Civic', category: 'Sedans', price: 2200000, oldPrice: 2500000, badge: 'Promoção', rating: 4.5 },
            { name: 'Isuzu D-Max', category: 'Comerciais', price: 3200000, rating: 4.6 },
        ]
    },
    oclock: {
        name: "EEC O'Clock",
        tagline: 'O Tempo é Precioso',
        segment: 'Relógios de Luxo',
        color: '#212121',
        colorDark: '#000000',
        categories: [
            { name: 'Clássicos', desc: 'Elegância intemporal', count: 22 },
            { name: 'Desportivos', desc: 'Performance e estilo', count: 18 },
            { name: 'Edições Limitadas', desc: 'Exclusividade', count: 8 },
            { name: 'Pulseiras', desc: 'Complementos', count: 30 }
        ],
        products: [
            { name: 'Rolex Submariner Date', category: 'Clássicos', price: 850000, badge: 'Premium', rating: 5.0 },
            { name: 'Omega Speedmaster', category: 'Desportivos', price: 420000, badge: 'Destaque', rating: 4.9 },
            { name: 'TAG Heuer Carrera', category: 'Desportivos', price: 280000, rating: 4.8 },
            { name: 'Cartier Santos', category: 'Clássicos', price: 650000, badge: 'Exclusivo', rating: 4.9 },
            { name: 'Breitling Navitimer', category: 'Clássicos', price: 380000, rating: 4.7 },
            { name: 'Pulseira Couro Premium', category: 'Pulseiras', price: 15000, badge: 'Novo', rating: 4.5 },
        ]
    },
    safety: {
        name: 'EEC Safety & Equipment',
        tagline: 'Protecção é Prioridade',
        segment: 'Equipamento de Protecção',
        color: '#0D1B2A',
        colorDark: '#0a1520',
        categories: [
            { name: 'Capacetes', desc: 'Protecção craniana', count: 25 },
            { name: 'Luvas', desc: 'Protecção das mãos', count: 40 },
            { name: 'Calçado', desc: 'Segurança nos pés', count: 30 },
            { name: 'Sinalização', desc: 'Segurança visual', count: 50 }
        ],
        products: [
            { name: 'Capacete 3M SecureFit', category: 'Capacetes', price: 4500, badge: 'Certificado', rating: 4.8 },
            { name: 'Luvas Anti-Corte Nível 5', category: 'Luvas', price: 2800, badge: 'Popular', rating: 4.7 },
            { name: 'Bota Caterpillar S3', category: 'Calçado', price: 8500, rating: 4.9 },
            { name: 'Colete Reflector Classe 3', category: 'Sinalização', price: 1500, badge: 'Essencial', rating: 4.6 },
            { name: 'Kit Emergência Industrial', category: 'Sinalização', price: 12000, badge: 'Completo', rating: 4.8 },
            { name: 'Óculos Protecção UV', category: 'Luvas', price: 3200, rating: 4.5 },
        ]
    },
    prive: {
        name: 'EEC Privé',
        tagline: 'Luxo Sem Compromisso',
        segment: 'Artigos de Luxo Premium',
        color: '#1A1A1A',
        colorDark: '#0a0a0a',
        categories: [
            { name: 'Óculos de Sol', desc: 'Estilo e protecção', count: 35 },
            { name: 'Sapatos', desc: 'Elegância nos pés', count: 28 },
            { name: 'Bolsas', desc: 'Acessórios de luxo', count: 22 },
            { name: 'Cintos', desc: 'Detalhes premium', count: 18 }
        ],
        products: [
            { name: 'Ray-Ban Aviator Classic', category: 'Óculos de Sol', price: 25000, badge: 'Popular', rating: 4.8 },
            { name: 'Nike Air Jordan 1 Retro', category: 'Sapatos', price: 35000, badge: 'Destaque', rating: 4.9 },
            { name: 'Louis Vuitton Neverfull', category: 'Bolsas', price: 180000, badge: 'Exclusivo', rating: 5.0 },
            { name: 'Gucci GG Belt', category: 'Cintos', price: 45000, rating: 4.7 },
            { name: 'Prada Sunglasses', category: 'Óculos de Sol', price: 32000, badge: 'Novo', rating: 4.8 },
            { name: 'Adidas Yeezy 350', category: 'Sapatos', price: 28000, rating: 4.6 },
        ]
    },
    furniture: {
        name: 'EEC Furniture',
        tagline: 'Espaços Que Inspiram',
        segment: 'Mobiliário de Escritório',
        color: '#4A148C',
        colorDark: '#38006b',
        categories: [
            { name: 'Secretárias', desc: 'Para produtividade', count: 20 },
            { name: 'Cadeiras', desc: 'Conforto ergonómico', count: 35 },
            { name: 'Armários', desc: 'Organização perfeita', count: 18 },
            { name: 'Salas de Reunião', desc: 'Espaços profissionais', count: 12 }
        ],
        products: [
            { name: 'Secretária Executiva Premium', category: 'Secretárias', price: 45000, badge: 'Destaque', rating: 4.8 },
            { name: 'Cadeira Ergonómica Pro', category: 'Cadeiras', price: 28000, badge: 'Popular', rating: 4.9 },
            { name: 'Armário Ficheiros 4 Gavetas', category: 'Armários', price: 18000, rating: 4.6 },
            { name: 'Mesa Reunião 8 Lugares', category: 'Salas de Reunião', price: 65000, badge: 'Novo', rating: 4.7 },
            { name: 'Estante Modular', category: 'Armários', price: 22000, rating: 4.5 },
            { name: 'Sofá Recepção 3 Lugares', category: 'Salas de Reunião', price: 38000, badge: 'Premium', rating: 4.8 },
        ]
    },
    cosmetics: {
        name: 'EEC Cosmetics',
        tagline: 'Beleza que Inspira',
        segment: 'Perfumaria & Beleza',
        color: '#1A1A1A',
        colorDark: '#0a0a0a',
        categories: [
            { name: 'Perfumes', desc: 'Fragrâncias exclusivas', count: 45 },
            { name: 'Maquilhagem', desc: 'Realce a sua beleza', count: 60 },
            { name: 'Cuidados Pele', desc: 'Rotina perfeita', count: 38 },
            { name: 'Kits Presente', desc: 'Ofertas especiais', count: 15 }
        ],
        products: [
            { name: 'Chanel No.5 EDP 100ml', category: 'Perfumes', price: 18000, badge: 'Clássico', rating: 4.9 },
            { name: 'Dior Sauvage EDT 100ml', category: 'Perfumes', price: 15000, badge: 'Popular', rating: 4.8 },
            { name: 'MAC Ruby Woo Lipstick', category: 'Maquilhagem', price: 3500, badge: 'Destaque', rating: 4.7 },
            { name: 'La Mer Moisturizing Cream', category: 'Cuidados Pele', price: 42000, badge: 'Premium', rating: 5.0 },
            { name: 'Kit Presente Lancôme', category: 'Kits Presente', price: 25000, badge: 'Oferta', rating: 4.8 },
            { name: 'Tom Ford Black Orchid', category: 'Perfumes', price: 22000, badge: 'Exclusivo', rating: 4.9 },
        ]
    }
};

// Format price in MZN
function formatPrice(price) {
    return price.toLocaleString('pt-MZ') + ' MT';
}

// Generate star rating HTML
function generateStars(rating) {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '★'.repeat(full);
    if (hasHalf) stars += '½';
    stars += '☆'.repeat(5 - full - (hasHalf ? 1 : 0));
    return stars;
}

// Map brand to product image
const BRAND_PRODUCT_IMAGES = {
    tech: '/assets/images/products/products-tech.png',
    cars: '/assets/images/products/products-cars.png',
    oclock: '/assets/images/products/products-oclock.png',
    safety: '/assets/images/products/products-safety.png',
    prive: '/assets/images/products/products-prive.png',
    furniture: '/assets/images/products/products-furniture.png',
    cosmetics: '/assets/images/products/products-cosmetics.png'
};

// Generate product card HTML
function generateProductCard(product, index) {
    const badgeClass = product.badge === 'Promoção' ? 'product-badge-sale' :
        product.badge === 'Popular' || product.badge === 'Destaque' ? 'product-badge-hot' :
            'product-badge-new';

    // Determine brand from page
    const brandKey = document.body.getAttribute('data-brand') || 'tech';
    const productImg = BRAND_PRODUCT_IMAGES[brandKey] || BRAND_PRODUCT_IMAGES.tech;

    // Vary image position per product for visual variety
    const positions = ['center top', 'center bottom', 'left center', 'right center', 'center center', 'left top'];
    const objPos = positions[(index || 0) % positions.length];

    return `
    <div class="product-card">
      <div class="product-card-image">
        <img src="${productImg}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;object-position:${objPos}" />
        ${product.badge ? `<div class="product-card-badges"><span class="product-badge ${badgeClass}">${product.badge}</span></div>` : ''}
        <div class="product-card-actions">
          <button class="product-action-btn" aria-label="Lista de desejos">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></svg>
          </button>
          <button class="product-action-btn" aria-label="Ver produto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-rating">${generateStars(product.rating)} <span>(${product.rating})</span></div>
        <div class="product-card-price">
          <span class="product-price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <button class="product-card-cart-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  `;
}

// Export for use
window.BRANDS = BRANDS;
window.BRAND_PRODUCT_IMAGES = BRAND_PRODUCT_IMAGES;
window.formatPrice = formatPrice;
window.generateStars = generateStars;
window.generateProductCard = generateProductCard;
