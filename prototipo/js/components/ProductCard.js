(function () {
    App.Components.ProductCard = (product) => {
        // Find best offer
        const availableOffers = product.offers.filter(o => o.stock > 0);
        availableOffers.sort((a, b) => a.price - b.price);
        const bestOffer = availableOffers[0];

        const hasStock = bestOffer && bestOffer.stock > 0;
        const priceDisplay = hasStock ? `$${bestOffer.price}` : 'Agotado';
        const disabled = !hasStock ? 'disabled' : '';
        const btnClass = hasStock ? '' : 'secondary';

        // Check if in cart to show Quantity Controls
        const cart = App.Core.Store.getCart();
        const cartItem = cart.find(item => item.productId === product.id);
        const q = cartItem ? cartItem.quantity : 0;

        let actionAreaHtml = '';

        if (q > 0) {
            actionAreaHtml = `
                <div style="display: flex; align-items: center; border: 1px solid var(--pico-primary); border-radius: 5px; overflow: hidden; height: 38px; flex: 1;">
                    <button class="outline" style="border:none; padding: 0 12px; margin: 0; height: 100%;" onclick="App.Controllers.Client.updateQuantity('${product.id}', '${cartItem.providerId}', -1); return false;">-</button>
                    <span style="font-weight: bold; padding: 0 10px; min-width: 30px; text-align: center; color: var(--pico-primary);">${q}</span>
                    <button class="outline" style="border:none; padding: 0 12px; margin: 0; height: 100%;" onclick="App.Controllers.Client.updateQuantity('${product.id}', '${cartItem.providerId}', 1); return false;">+</button>
                </div>
            `;
        } else {
            actionAreaHtml = `
                <button onclick="App.Controllers.Client.addToCart('${product.id}'); return false;" ${disabled} class="${btnClass}" style="margin:0; height: 38px; flex: 1;">
                    Agregar
                </button>
            `;
        }

        return `
            <article class="product-card">
                <header style="padding:0; overflow:hidden;">
                    <div class="product-placeholder">
                        <i class="ph ph-package"></i>
                    </div>
                </header>
                <div style="padding: 10px;">
                    <h5 style="margin-bottom: 5px; font-size: 1rem;">${product.name}</h5>
                    <p class="price-tag">${priceDisplay}</p>
                    <div class="button-group" style="display: flex; gap: 10px; margin-top: 10px;">
                        ${actionAreaHtml}
                        <button class="secondary outline" style="margin:0; height: 38px; flex: 1; font-size: 0.85rem;" onclick="App.Controllers.Client.viewProduct('${product.id}'); return false;">
                            Ver Detalles
                        </button>
                    </div>
                </div>
            </article>
        `;
    };
})();
