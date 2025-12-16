// Application Logic

// --- State Management ---
const state = {
    cart: [],
    navStack: ['root'], // Stack of category IDs. 'root' is the base.
    searchQuery: '',    // Global search input
    view: 'home'        // 'home', 'cart', 'admin'
};

// --- DOM Elements ---
const app = document.getElementById('app');

// --- Core Helper Functions ---

// --- Helper Functions for Hierarchy ---

// Get all descendant category IDs (recursive)
function getDescendantCategoryIds(categoryId) {
    if (categoryId === 'root') {
        return CATEGORIES.map(c => c.id);
    }

    let ids = [categoryId];
    const children = CATEGORIES.filter(c => c.parentId === categoryId);

    for (const child of children) {
        ids = ids.concat(getDescendantCategoryIds(child.id));
    }
    return ids;
}

// Get path to root (for breadcrumbs/back)
function getAncestors(categoryId) {
    if (categoryId === 'root') return [];

    const cat = CATEGORIES.find(c => c.id === categoryId);
    if (!cat || !cat.parentId) return ['root'];

    return [cat.parentId, ...getAncestors(cat.parentId)];
}

function getCurrentCategoryId() {
    return state.navStack[state.navStack.length - 1];
}

function getCheapestOffer(product) {
    const availableOffers = product.offers.filter(o => o.stock > 0);
    if (availableOffers.length === 0) return null;
    availableOffers.sort((a, b) => a.price - b.price);
    return availableOffers[0];
}

function addToCart(productId) {
    const product = CATALOG.find(p => p.id === productId);
    const offer = getCheapestOffer(product);

    if (!offer) {
        alert('Producto agotado');
        return;
    }

    const existingItem = state.cart.find(item => item.productId === productId && item.providerId === offer.providerId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.cart.push({
            productId: product.id,
            name: product.name,
            providerId: offer.providerId,
            price: offer.price,
            quantity: 1
        });
    }

    render();
    showToast(`Agregado: ${product.name}`);
}

function showToast(message) {
    const toast = document.createElement('div');
    Object.assign(toast.style, {
        position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'var(--pico-primary)', color: 'white', padding: '10px 20px',
        borderRadius: '50px', zIndex: '1000'
    });
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// --- Render Functions ---

function renderHeader() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const currentId = getCurrentCategoryId();

    let title = 'Gopelivery';
    if (state.searchQuery) {
        title = 'Buscando...';
    } else if (currentId !== 'root') {
        const cat = CATEGORIES.find(c => c.id === currentId);
        if (cat) title = cat.name;
    }

    return `
        <nav>
            <ul>
                <li><strong>${title}</strong></li>
            </ul>
            <ul>
                <li>
                    <a href="#" onclick="window.app.setView('cart')" role="button" class="outline">
                        Carrito (${totalItems})
                    </a>
                </li>
            </ul>
        </nav>
    `;
}

function renderSearchBar() {
    // Determine if we should show filter pills or just the search bar
    return `
        <div class="search-wrapper">
            <input 
                type="search" 
                id="search" 
                name="search" 
                placeholder="Buscar productos..." 
                value="${state.searchQuery}"
                oninput="window.app.search(this.value)"
            >
            ${state.searchQuery ? `
                <button 
                    onclick="window.app.clearSearch()" 
                    class="search-clear" 
                    title="Limpiar búsqueda"
                >
                    ✕
                </button>
            ` : ''}
        </div>
    `;
}

function renderCategoryPills() {
    // If searching, hide category navigation to avoid confusion OR keep it? 
    // Plan said: "Prioridad de Búsqueda... Ignorar getCurrentCategoryId".
    // It's cleaner to hide category pills when searching.
    if (state.searchQuery) return '';

    const currentId = getCurrentCategoryId();
    let pillsHTML = '';

    let children = CATEGORIES.filter(c => c.parentId === (currentId === 'root' ? null : currentId));

    if (children.length === 0 && currentId !== 'root') {
        const currentCat = CATEGORIES.find(c => c.id === currentId);
        if (currentCat && currentCat.parentId) {
            children = CATEGORIES.filter(c => c.parentId === currentCat.parentId);
        }
    }

    if (currentId !== 'root') {
        const currentCat = CATEGORIES.find(c => c.id === currentId);
        const parentId = currentCat ? currentCat.parentId : 'root';
        const parentName = parentId && parentId !== 'root' ? CATEGORIES.find(c => c.id === parentId).name : 'Todo';

        pillsHTML += `
            <a href="#" class="category-pill active" onclick="window.app.goBack()">
                ← ${parentName}
            </a>
         `;
    } else {
        pillsHTML += `<a href="#" class="category-pill active">Todo</a>`;
    }

    pillsHTML += children.map(cat => `
        <a href="#" class="category-pill ${cat.id === currentId ? 'active' : ''}" onclick="window.app.navigateTo('${cat.id}')">
            ${cat.name}
        </a>
    `).join('');

    return `
        <div class="categories-scroll">
            ${pillsHTML}
        </div>
    `;
}

function renderProductList() {
    let products = [];
    let emptyMessage = '';

    if (state.searchQuery) {
        // --- SEARCH MODE ---
        const query = state.searchQuery.toLowerCase();
        products = CATALOG.filter(p => p.name.toLowerCase().includes(query));
        emptyMessage = 'No se encontraron productos con ese nombre.';
    } else {
        // --- CATEGORY MODE ---
        const currentId = getCurrentCategoryId();
        const relevantCategoryIds = getDescendantCategoryIds(currentId);
        products = CATALOG.filter(p => relevantCategoryIds.includes(p.category));
        emptyMessage = 'No hay productos disponibles en esta sección.';
    }

    if (products.length === 0) {
        return `<p class="text-center" style="margin-top:20px; color: var(--pico-muted-color);">${emptyMessage}</p>`;
    }

    return `
        <div class="product-list">
            ${products.map(product => {
        const bestOffer = getCheapestOffer(product);
        const hasStock = bestOffer && bestOffer.stock > 0;

        const priceDisplay = hasStock ? `$${bestOffer.price}` : 'Agotado';
        const disabled = !hasStock ? 'disabled' : '';
        const btnText = hasStock ? 'Agregar' : 'Agotado';
        const btnClass = hasStock ? '' : 'secondary';

        return `
                    <article class="product-card">
                        <header style="padding:0; overflow:hidden;">
                            <div class="product-placeholder">
                                <i class="ph ph-package"></i>
                            </div>
                        </header>
                        <div style="padding: 10px;">
                            <h5 style="margin-bottom: 5px;">${product.name}</h5>
                            <p class="price-tag">${priceDisplay}</p>
                            <div class="button-group">
                                <button onclick="window.app.addToCart('${product.id}')" ${disabled} class="${btnClass}">
                                    ${btnText}
                                </button>
                                <button class="secondary outline">Ver Detalles</button>
                            </div>
                        </div>
                    </article>
                `;
    }).join('')}
        </div>
    `;
}

function renderCart() {
    if (state.cart.length === 0) {
        return `
            <nav><ul><li><a href="#" onclick="window.app.setView('home')">← Volver</a></li></ul></nav>
            <div class="text-center" style="margin-top: 50px;">
                <h3>Tu carrito está vacío</h3>
            </div>
        `;
    }

    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return `
        <nav>
            <ul><li><a href="#" onclick="window.app.setView('home')">← Seguir Comprando</a></li></ul>
            <ul><li><strong>Tu Pedido</strong></li></ul>
        </nav>
        <section>
            ${state.cart.map(item => `
                <article style="padding: 15px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div><strong>${item.name}</strong><br><small>$${item.price} x ${item.quantity}</small></div>
                    <div><strong>$${item.price * item.quantity}</strong></div>
                </article>
            `).join('')}
            <hr>
            <div style="display: flex; justify-content: space-between; font-size: 1.2rem; margin-bottom: 20px;">
                <strong>Total</strong>
                <strong>$${total}</strong>
            </div>
             <label for="whatsapp">Teléfono Whatsapp (Requerido)
                <input type="tel" id="whatsapp" required>
            </label>
            <button onclick="window.app.checkout()" class="contrast">Pedir por WhatsApp</button>
        </section>
    `;
}

function render() {
    let content = '';
    if (state.view === 'home') {
        content = `
            ${renderHeader()}
            ${renderSearchBar()}
            ${renderCategoryPills()}
            ${renderProductList()}
        `;
    } else if (state.view === 'cart') {
        content = renderCart();
    }
    app.innerHTML = content;

    // Maintain focus on search input if it exists
    if (state.view === 'home' && state.searchQuery) {
        const input = document.getElementById('search');
        if (input) {
            input.focus();
            // Move cursor to end
            const val = input.value;
            input.value = '';
            input.value = val;
        }
    }
}

// --- Exposed actions ---
window.app = {
    navigateTo: (catId) => {
        state.navStack.push(catId);
        state.searchQuery = ''; // Clear search when navigating
        render();
    },
    goBack: () => {
        if (state.navStack.length > 1) {
            state.navStack.pop();
            state.searchQuery = '';
            render();
        }
    },
    search: (query) => {
        state.searchQuery = query;
        render();
    },
    clearSearch: () => {
        state.searchQuery = '';
        render();
    },
    setView: (view) => {
        state.view = view;
        render();
    },
    addToCart: (id) => addToCart(id),
    checkout: () => {
        const phone = document.getElementById('whatsapp').value;
        if (!phone) { alert('Falta el teléfono'); return; }
        let msg = "¡Hola! Pedido:\n\n";
        state.cart.forEach(item => { msg += `- ${item.name} (${item.quantity}): $${item.price * item.quantity}\n`; });
        const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        msg += `\nTotal: $${total}\nTel: ${phone}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
        state.cart = [];
        state.view = 'home';
        render();
    }
};

render();
